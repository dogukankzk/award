import React from 'react'

const Button = ({title, id,leftIcon, rightIcon, containerClass }) => {
  return (
    <button id={id} className={` inline-flex relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black ${containerClass}`}> 
        {leftIcon}
        <span className="relative inline-flex overflow-hidden font-general text-xs uppercase">
            <div className='font-[general]'>
                {title}
            </div>
        </span>
        {rightIcon}
    </button>
  )
}

export default Button