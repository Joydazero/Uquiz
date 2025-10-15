import React from 'react'

function Notfound() {
  return (
    <>
    <div className='flex flex-col justify-center items-center w-full h-full'>
        <h2 className='text-9xl font-black'>404</h2>
        <p className='text-2xl text-[#000] mt-5 font-bold'>Not Found</p>
        <p className='text-2xl text-[#000] mt-5 font-bold'>😥 페이지를 찾을 수 없습니다.</p>
        <p className='mt-2 font-light'>The resource requested could not be found on this server!</p>
    </div>
    </>
  )
}

export default Notfound