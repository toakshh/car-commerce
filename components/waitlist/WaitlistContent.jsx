'use client'
import {  useState } from 'react'

const WaitlistContent = () => {
        const [email, setEmail] = useState("");
        const [submitted, setSubmitted] = useState(false);
        const [error, setError] = useState(null);
        const [openQuestion, setOpenQuestion] = useState(null);
        // const [logo, setLogo] = useState(null);
        // const [logoError, setLogoError] = useState(null);
      
        // useEffect(() => {
        //   const generateLogo = async () => {
        //     try {
        //       const response = await fetch("/api/minimalist-car-logo-generator", {
        //         method: "POST",
        //         body: JSON.stringify({
        //           prompt:
        //             "minimalist modern car logo design, simple lines, professional, clean design, white background, vector style",
        //         }),
        //       });
      
        //       if (!response.ok) {
        //         throw new Error(`Error: ${response.status}`);
        //       }
      
        //       const data = await response.json();
        //       if (data.error) {
        //         throw new Error(data.error);
        //       }
      
        //       setLogo(data.url);
        //     } catch (err) {
        //       console.error("Failed to generate logo:", err);
        //       setLogoError(err.message);
        //     }
        //   };
      
        //   generateLogo();
        // }, []);
      
        const handleSubmit = async (e) => {
          e.preventDefault();
          setError(null)
          if(!email){
            setError("Please enter your email.");
            return;
          }
          try {
            await fetch("/api/db/waitlist-entries", {
              method: "POST",
              body: JSON.stringify({
                query:
                  "INSERT INTO `waitlist` (`email`, `signup_date`) VALUES (?, ?)",
                values: [email, new Date().toISOString()],
              }),
            });
            setSubmitted(true);
            setEmail("");
          } catch (err) {
            setError("Something went wrong with Email submission. Please try again.");
          }finally{
            setError("")
          }
        };
      
        return (
          <div className="min-h-screen bg-[#0D111D] flex flex-col relative overflow-hidden pb-24">
            <div className="absolute inset-0 bg-[#20242F] opacity-50 pointer-events-none"></div>
      
            <div className="flex-1 flex flex-col items-center justify-center px-6 md:px-10 py-24 relative z-10">
              <div className="max-w-3xl mx-auto w-full">
                <div className="p-8 md:p-12">
                  <h1 className="text-4xl md:text-5xl lg:text-7xl text-[#EFEFED] font-poppins leading-tight mb-8">
                    <div>
                      <span>The future of car buying</span>
                    </div>
                    <div>
                      <span className="text-[#EFEFED]">is here.</span>
                    </div>
                  </h1>
                  <p className="text-lg text-[#9C9FA4] font-poppins mb-8 leading-relaxed">
                    Join the waitlist for Carverse - your AI-powered car marketplace
                    that makes buying and selling vehicles simpler, smarter, and more
                    secure. Be the first to experience the revolution in automotive
                    commerce.
                  </p>
                  <div className="flex items-center space-x-2 mb-8">
                    <div className="h-px flex-1 bg-[#262A36]"></div>
                    <p className="text-lg font-poppins text-[#EFEFED]">
                      Be the first to revolutionize your car buying experience 🚗
                    </p>
                    <div className="h-px flex-1 bg-[#262A36]"></div>
                  </div>
      
                  {!submitted ? (
                    <form onSubmit={(e)=>handleSubmit(e)} className="space-y-6">
                     <div className="relative">
                        <input
                          type="email"
                          name="email"
                          // value={email}
                          defaultValue={""}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Enter your email"
                          className="w-full px-6 py-4 pr-36 rounded-lg bg-[#171B26] border border-[#262A36] text-[#EFEFED] placeholder-[#9C9FA4] focus:outline-none focus:border-[#E4E7EA] focus:ring-1 focus:ring-[#E4E7EA] transition-colors"
                          required
                        />
                        <button
                          type="submit"
                          className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#171B26] text-[#EFEFED] border border-[#262A36] py-2 px-4 rounded-lg transition-colors hover:bg-[#262A36]"
                        >
                          <span className="flex items-center space-x-2">
                            <span>Join Waitlist</span>
                            <i className="far fa-arrow-right"></i>
                          </span>
                        </button>
                      </div>
                      {error && <p className="text-red-400 text-sm">{error}</p>}
                    </form>
                  ) : (
                    <div className="bg-[#171B26] border border-[#262A36] text-[#EFEFED] p-8 rounded-lg space-y-4">
                      <div className="flex items-center space-x-3">
                        <i className="far fa-check-circle text-3xl text-[#EFEFED]"></i>
                        <h3 className="text-2xl font-poppins">You're on the list!</h3>
                      </div>
                      <p className="text-[#9C9FA4] font-poppins">
                        Thanks for joining! We'll keep you updated on all the exciting
                        developments.
                      </p>
                    </div>
                   )} 
                </div>
                <div className="absolute -z-10 top-1/4 left-1/2 w-96 h-96 -translate-x-1/2 -translate-y-1/2">
                  <div className="absolute inset-0 bg-[#4F46E5] rounded-full mix-blend-multiply filter blur-[128px] opacity-20">
                    <style jsx global>{`
                      @keyframes slowPulse {
                        0%, 100% { opacity: 0.2; }
                        50% { opacity: 0.1; }
                      }
                      .animate-slow-pulse {
                        animation: slowPulse 8s ease-in-out infinite;
                      }
                    `}</style>
                    <div className="w-full h-full animate-slow-pulse"></div>
                  </div>
                  <div className="absolute inset-0 bg-[#9333EA] rounded-full mix-blend-multiply filter blur-[128px] opacity-20">
                    <div
                      className="w-full h-full animate-slow-pulse"
                      style={{ animationDelay: "4s" }}
                    ></div>
                  </div>
                </div>
              </div>
      
              <div className="max-w-3xl mx-auto w-full mt-4">
                <div className="p-8 md:p-12">
                  <h2 className="text-lg md:text-xl lg:text-2xl font-poppins mb-8 text-[#EFEFED]">
                    Frequently Asked Questions
                  </h2>
                  <div className="space-y-4">
                    <div className="border border-[#262A36] rounded-lg p-4 bg-[#171B26] hover:border-[#E4E7EA] transition-colors">
                      <button
                        onClick={() => setOpenQuestion(openQuestion === 0 ? null : 0)}
                        className="w-full flex justify-between items-center text-xl font-poppins"
                      >
                        <span className="text-[#EFEFED]">What is Carverse?</span>
                        <i
                          className={`far fa-chevron-down text-[#EFEFED] transition-transform ${
                            openQuestion === 0 ? "rotate-180" : ""
                          }`}
                        ></i>
                      </button>
                      <div
                        className={`mt-4 transition-all duration-300 ease-in-out ${
                          openQuestion === 0
                            ? "max-h-40 opacity-100"
                            : "max-h-0 opacity-0 overflow-hidden"
                        }`}
                      >
                        <p className="text-[#9C9FA4] font-poppins">
                          Carverse is an AI-powered car marketplace that
                          revolutionizes how people buy and sell vehicles. Our
                          platform uses advanced technology to make the entire process
                          more transparent, secure, and efficient.
                        </p>
                      </div>
                    </div>
                    <div className="border border-[#262A36] rounded-lg p-4 bg-[#171B26] hover:border-[#E4E7EA] transition-colors">
                      <button
                        onClick={() => setOpenQuestion(openQuestion === 1 ? null : 1)}
                        className="w-full flex justify-between items-center text-xl font-poppins"
                      >
                        <span className="text-[#EFEFED]">How does it work?</span>
                        <i
                          className={`far fa-chevron-down text-[#EFEFED] transition-transform ${
                            openQuestion === 1 ? "rotate-180" : ""
                          }`}
                        ></i>
                      </button>
                      <div
                        className={`mt-4 transition-all duration-300 ease-in-out ${
                          openQuestion === 1
                            ? "max-h-40 opacity-100"
                            : "max-h-0 opacity-0 overflow-hidden"
                        }`}
                      >
                        <p className="text-[#9C9FA4] font-poppins">
                          Our platform uses AI to match buyers with their perfect
                          vehicles, verify car histories, and streamline the entire
                          transaction process. We handle everything from initial
                          search to final purchase with advanced security measures.
                        </p>
                      </div>
                    </div>
      
                    <div className="border border-[#262A36] rounded-lg p-4 bg-[#171B26] hover:border-[#E4E7EA] transition-colors">
                      <button
                        onClick={() => setOpenQuestion(openQuestion === 2 ? null : 2)}
                        className="w-full flex justify-between items-center text-xl font-poppins"
                      >
                        <span className="text-[#EFEFED]">
                          When will it be available?
                        </span>
                        <i
                          className={`far fa-chevron-down text-[#EFEFED] transition-transform ${
                            openQuestion === 2 ? "rotate-180" : ""
                          }`}
                        ></i>
                      </button>
                      <div
                        className={`mt-4 transition-all duration-300 ease-in-out ${
                          openQuestion === 2
                            ? "max-h-40 opacity-100"
                            : "max-h-0 opacity-0 overflow-hidden"
                        }`}
                      >
                        <p className="text-[#9C9FA4] font-poppins">
                          We're currently in the final stages of development. Join our
                          waitlist to be among the first to access the platform when
                          we launch.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      
}

export default WaitlistContent