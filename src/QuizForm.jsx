import React from 'react'

export default function QuizForm( {children , contentWith}) {
  return (
    <div className="flex justify-center items-center w-full h-full">
        <div className={`flex flex-col justify-center items-center h-[25rem] rounded-[10px] bg-[#fff] shadow-[2px_2px_40px_rgba(0,0,0,0.2)] ${contentWith}`}>
                {children}
        </div>
    </div>
  )
}
