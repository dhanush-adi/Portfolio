import React from 'react'
import logo from "../assets/Images/gfglogo.png"

const Experience = () => {
  return (
    <div className=' flex flex-row  p-4'>
        {/* left side */}
        <div className='max-w-[20%] p-2 '>
           <img src={logo} alt="" className='rounded-xl shadow-sm' />
        </div>

        {/* right side */}

        <div className='p-5 max-w-[80%] flex flex-col  '>
            {/* company */}
            <div className='font-bold text-xl font-saans'>
                GeekForGeeks Student Chapter
            </div>
            {/* position */}
            <div className='font-saans'>
                Core Member - Head of Operations
            </div>
        </div>

    </div>
  )
}

export default Experience;