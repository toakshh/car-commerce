'use client'
import React, { useCallback, useState } from 'react'
import { Input } from './ui/input'
import { Camera, Upload } from 'lucide-react'
import { Button } from './ui/button'
import { useDropzone } from 'react-dropzone'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'


const HomeSearch = () => {

  const [searchedText, setSearchedText] = useState("")
  const [isImageSearchActive, setIsImageSearchActive] = useState(false)
  const [imagePreview, setImagePreview] = useState("")
  const [searchImage,setSearchImage] = useState(null)
  const [isUploading,setIsUploading] = useState(false)


  const router = useRouter();
 

  const imageSearchFn = (e)=>{
   setIsImageSearchActive(!isImageSearchActive)
  }

  const handleImageSearch = async(e)=>{
    e.preventDefault()
    if(!searchImage){
      toast.error("Please upload an image")
      return
    }
    //seach image logic by ai
  }

  const onDrop = (acceptedFile) => {
    const file = acceptedFile[0];
    if(file){
      if(file.size > 5 * 1024 * 1024){
        toast.error("File size should be less than 5MB")
        return 
      }
      setIsUploading(true)
      setSearchImage(file)

      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
        setIsUploading(false)
        toast.success("Image uploaded successfully")
      }
      reader.onerror = () => {
        setIsUploading(false)
        toast.error("Error uploading image")
      }
      reader.readAsDataURL(file);

    }
  }
  const {getRootProps, getInputProps, isDragActive, isDragReject} = useDropzone({
    onDrop,
    accept: {
      'image/*': [".jpeg", ".jpg", ".png",".webp"]
    },
    maxFiles: 1,
  })

  const handleFormSubmit = (e)=>{
    e.preventDefault()
    if(!searchedText.trim()){
      toast.error("Please enter a valid text")
      return;
    }
    router.push(`/cars?search=${encodeURIComponent(searchedText)}`)
  }

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <div className='relative flex items-center flex-col'>
          <Input 
            placeholder="Enter Model, make, or use AI to search..."
            type={"text"}
            value={searchedText}
            onChange={(e) => setSearchedText(e.target.value)}
            className="bg-white/95 backdrop-blur-md rounded-full w-full px-8 py-6"
          />

          <div className='absolute right-[100px] top-2'>
            <Camera 
              size={35}
              className='cursor-pointer p-1.5 rounded-full'
              onClick={imageSearchFn}
              style={
                isImageSearchActive ? {
                  background:"black",
                  color:"white"
                } : {}
              }
            />
          </div>

          <Button 
            type='submit'
            className='rounded-full absolute right-2 top-2'
          >
            Search
          </Button>
          </div>
          </form>

          {isImageSearchActive && (
            <div className="mt-4">
              <form onSubmit={handleImageSearch} className="space-y-4">
                <div className="border-2 border-dashed border-gray-300 rounded-3xl p-6 text-center">
                  {imagePreview ? (
                    <div className="flex flex-col items-center">
                      <img
                        src={imagePreview}
                        alt="Car preview"
                        className="h-40 object-contain mb-4"
                      />
                      <Button
                        variant="outline"
                        onClick={() => {
                          setSearchImage(null);
                          setImagePreview("");
                          toast.info("Image removed");
                        }}
                      >
                        Remove Image
                      </Button>
                    </div>
                  ) : (
                    <div {...getRootProps()} className="cursor-pointer">
                      <input {...getInputProps()} />
                      <div className="flex flex-col items-center">
                        <Upload className="h-12 w-12 text-gray-400 mb-2" />
                        <p className="text-gray-500 mb-2">
                          {isDragActive && !isDragReject
                            ? "Drop the file here to upload"
                            : "Drag & drop a car image or click to select"}
                        </p>
                        {isDragReject && (
                          <p className="text-red-500 mb-2">File type invalid</p>
                        )}
                        <p className="text-gray-400 text-sm">
                          Supports: JPG, PNG, WEBP, JPEG (max 5MB)
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {imagePreview && (
                  <Button
                    type="submit"
                    className="w-full"
                    disabled={isUploading }
                  >
                    {isUploading
                      ? "Uploading..."
                      // : isProcessing
                      // ? "Analyzing image..."
                      : "Search with this Image"}
                  </Button>
                )}
              </form>
            </div>
          )}
            </div>
  )
}

export default HomeSearch