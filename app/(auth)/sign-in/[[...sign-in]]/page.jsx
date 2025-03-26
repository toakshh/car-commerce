import { SignedIn, SignIn, UserButton } from '@clerk/nextjs'
import React from 'react'

const SignInPage = () => {
  return (
    <div>
      <SignIn />
        <SignedIn>
            <UserButton />
        </SignedIn>
    </div>
  )
}

export default SignInPage