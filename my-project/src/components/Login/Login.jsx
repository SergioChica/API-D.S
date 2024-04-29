import React from 'react'
import huella from '../../assets/huella.png'
import perfil from '../../assets/perfil.png'

export const Login = ({submit,name,code}) => {
    return (
        <>
        <div className='relative bg-[#979797] h-[632px] w-[570px] rounded-[5px] flex flex-col justify-center items-center z-[999] '>
        <img src={huella} className=' opacity-[60%] w-[280px] h-[360px] absolute   z-[1] ' alt="" />
        <div className='h-[25%] text-center '>
        <h1 className='text-[60px] text-[#503A7A] h-full '>Login</h1>
        </div>
        <div className='h-[65%] w-[60%] flex flex-col gap-[25px] items-center z-[2] '>
        <img src={perfil} className=' w-[80px] h-[80px] ' alt="" />
            <input type="text" ref={name} placeholder='put estableshments name' className=' h-[60px] w-[100%] bg-none border-[#FF9F2E59] border-[3px] indent-[20px] ' />
            <input type="text" ref={code} placeholder='put unique code' className=' h-[60px] w-[100%] bg-none border-[#FF9F2E59] border-[3px] indent-[20px] ' />
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
