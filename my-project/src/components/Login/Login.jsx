import React from 'react'
import huella from '../../assets/huella.png'
import perfil from '../../assets/perfil.png'
import { IoClose } from "react-icons/io5"
import { CiBoxList } from "react-icons/ci";

export const Login = ({ submit, name, code, viewUsers, visibility, children,closeIcon }) => {
    return (
        <>
            <div className='relative bg-[#979797] h-[632px] w-[570px] rounded-[5px] flex flex-col justify-center items-center z-[999]'>
                <CiBoxList fontSize={30} color='#503A7A' className='absolute top-[30px] right-[30px] cursor-pointer ' onClick={viewUsers} />
                <div className={visibility ? 'absolute w-[60%] h-[90%] bg-white z-[90] animate-modal opacity-0 ' : 'hidden absolute'}>
                    <div className=' w-full h-full flex flex-col items-center gap-[30px] relative'>
                        <IoClose fontSize={30} color='#FE7A36E5' onClick={closeIcon} className=' absolute top-[10px] right-[30px] cursor-pointer' />
                        <h2 className='h-[20%] flex items-center text-[24px] text-[#503A7A] '>Users</h2>
                        <ul className='h-[60%] w-[80%] flex flex-col gap-[20px] '>
                            {children}
                        </ul>
                    </div>
                </div>

                <img src={huella} className=' opacity-[60%] w-[280px] h-[360px] absolute   z-[1] ' alt="" />
                <div className='h-[25%] text-center '>
                    <h1 className='text-[60px] text-[#503A7A] h-full '>Login</h1>
                </div>
                <div className='h-[65%] w-[60%] flex flex-col gap-[25px] items-center z-[2] '>
                    <img src={perfil} className=' w-[80px] h-[80px] ' alt="" />
                    <input type="text" ref={name} placeholder='put estableshments name' className=' h-[60px] w-[100%] bg-white border-[#FF9F2E59] border-[3px] indent-[20px] ' />
                    <input type="text" ref={code} placeholder='put unique code' className=' h-[60px] w-[100%] bg-white border-[#FF9F2E59] border-[3px] indent-[20px] ' />
                    <div>
                        <button type='checked'></button>
                        <p></p>
                    </div>
                </div>
                <div className=' w-[60%] h-[40%] flex justify-center z-[2] '>
                    <button onClick={submit} className=' bg-[#FE7A36E5] h-[50px] w-[80%] text-[25px] text-white rounded-[10px]  '>Sing in</button>
                </div>
                {/*<h2>Datos Guardados:</h2>
            <ul className='bg-yellow-300'>
                {data.map(item => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>*/}
            </div>
        </>
    )
}
