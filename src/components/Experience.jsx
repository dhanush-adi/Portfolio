import React from 'react'
import logo from "../assets/Images/gfglogo.png"

const Experience = ( {logo, name , position , sd , ed }) => {
  return (
    <div>
      <div className=' flex flex-row  p-4'>
        {/* left side */}
        <div className='max-w-[20%] p-2 '>
           <img src={logo} alt="" className='rounded-xl shadow-sm' />
        </div>

        {/* right side */}

        <div className='p-5 max-w-[80%] flex flex-col  '>
            {/* company */}
            <div className='font-bold text-xl font-saans'>
                {/* GeekForGeeks Student Chapter */}
                {name}
            </div>
            {/* position */}
            <div className='font-saans mb-4 text-neutral-600'>
                {/* Core Member - Head of Operations */}
                {position}
            </div>

            <div className='flex flex-row text-neutral-400'>
              <div className='px-2 pl-0 font-saans'>{sd}</div>
              -
              <div className='px-2 font-saans'>{ed}</div>
            </div>
        </div>

      


    </div>
    <hr className="border-gray-200 my-1" />
    </div>
  )
}

export default Experience;