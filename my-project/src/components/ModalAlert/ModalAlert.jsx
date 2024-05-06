import React from 'react'

import { IoClose } from "react-icons/io5"
// import { IoCloseCircleOutline } from "react-icons/io5"; Icono Error
// import { FaRegCheckCircle } from "react-icons/fa"; Icono Complete

export const ModalAlert = ({text,closeIcon,closeButton,IconAlert,visibility}) => {
    return (
        <div className={visibility ? ' w-screen h-screen flex justify-center items-center fixed top-0 left-0 bg-[#00000080] z-[9999999999] ' : 'hidden'}>
            <div className='w-[30%] h-[70%] bg-white flex flex-col items-center rounded-[10px] pb-[10px] animate-modal opacity-0 '>
                <div className='w-[90%] h-[15%] flex items-center justify-between border-b-2 pr-[5px] pl-[5px] text-[#FE7A36E5] '>
                    <p className='font-semibold '>Alert!</p>
                    <IoClose fontSize={30} onClick={closeIcon} className='cursor-pointer' />
                </div>
                <div className='w-[90%] h-[85%] flex flex-col items-center pt-[50px] gap-[40px] '>
                    <div className='relative h-[160px] w-[160px] '>
                        <IconAlert fontSize={160} color='#503A7A' className='absolute animate-icon opacity-0' />
                    </div>
                    <div>
                        <p>{text}</p>
                    </div>
                    <div className=' w-[35%] h-[10%] '>
                        <button className='w-[100%] h-[100%] bg-[#FE7A36E5] rounded-[10px] text-white' onClick={closeButton} >Accept</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
