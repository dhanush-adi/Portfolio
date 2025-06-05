import React from 'react'
import ethlinkImg from "../assets/Images/image.png";
import orbitus from "../assets/Images/83262276-ed3d-4038-83e9-4798ff38811c.png";
import paste from "../assets/Images/paste.png";
import game from "../assets/Images/game.png";

const V0projectCard = ({logo , name , detail}) => {
  return (
    <section>
        <div className='border border-neutral-400 rounded-xl flex flex-col w-80'>
            {/* image div */}
            <div className='p-2'>
                <img src={logo} alt="" className='h-40 rounded-xl' />
            </div>


            {/* content of */}
            <div className='p-3'>
                <p className='text-white font-bold text-[16px]'>{name}</p>
                <p className='text-[10px]  text-neutral-400'>
                    {detail}
                </p>
            </div>


        </div>
    </section>
  )
}

export default V0projectCard
