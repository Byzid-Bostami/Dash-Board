import React from 'react'

const ErrorPage = () => {
  return (
        <div className='w-full max-h-screen overflow-y-auto '>
             <div className='flex flex-col h-screen items-center justify-center w-full bg-[#111525]'>
                <h2 className='lg:text-[200px] md:text-[200px] text-[150px] font-bold text-[#161b2e]'>404</h2>
                <p className='text-xl text-gray-400 uppercase'>page not found</p>
            </div>
        </div>
  )
}

export default ErrorPage