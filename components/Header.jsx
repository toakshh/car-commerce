
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { ArrowLeft, CarFront, Heart, Layout } from 'lucide-react'
import { checkUser } from '@/lib/checkUser'

const Header = async ({isAdminPage=false}) => {
  const user = await checkUser()
  const isAdmin = user?.role === "ADMIN";
  return (
    <header className='fixed top-0 w-full bg-white/80 backdrop-blur-md z-10 border-b'>
        <nav className='mx-auto px-4 py-4 flex items-center justify-between'>
            <Link href={isAdminPage ? "/admin" : "/"} className='flex' >
                {/* <h1 className='text-4xl font-bold'>CarVerse</h1> */}
                <Image src="/logo.png" alt="logo" width={200} height={60} className='object-contain w-auto h-12'/>
                {isAdminPage && (
                  <span className="text-xs font-extralight">admin</span>
                )}
            </Link>

              {/* Action Buttons */}
              <div className="flex items-center space-x-4">
                {isAdminPage ? (
                  <>
                    <Link href="/">
                      <Button variant="outline" className="flex items-center gap-2">
                        <ArrowLeft size={18} />
                        <span>Back to App</span>
                      </Button>
                    </Link>
                  </>
                ) : (
                  <SignedIn>
                    {!isAdmin && (
                      <Link
                        href="/reservations"
                        className="text-gray-600 hover:text-blue-600 flex items-center gap-2"
                      >
                        <Button variant="outline">
                          <CarFront size={18} />
                          <span className="hidden md:inline">My Reservations</span>
                        </Button>
                      </Link>
                    )}
                    {!isAdminPage && <a href="/saved-cars">
                      <Button className="flex items-center gap-2">
                        <Heart size={18} />
                        <span className="hidden md:inline">Saved Cars</span>
                      </Button>
                    </a>}
                    {isAdmin && (
                      <Link href="/admin">
                        <Button variant="outline" className="flex items-center gap-2">
                          <Layout size={18} />
                          <span className="hidden md:inline">Admin Portal</span>
                        </Button>
                      </Link>
                    )}
                  </SignedIn>
                )}

                <SignedOut>
                  {!isAdminPage && (
                    <SignInButton forceRedirectUrl="/">
                      <Button variant="outline">Login</Button>
                    </SignInButton>
                  )}
                </SignedOut>

                <SignedIn>
                  <UserButton
                    appearance={{
                      elements: {
                        avatarBox: "w-10 h-10",
                      },
                    }}
                  />
                </SignedIn>
              </div>

        </nav>
    </header>
  )
}

export default Header