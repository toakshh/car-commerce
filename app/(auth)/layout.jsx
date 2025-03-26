import React from 'react'

const AuthLayout = ({children}) => {
  return (
    <div className='flex items-center justify-center h-screen'>
        {children}
    </div>
  )
}

export default AuthLayout