import React, {useState} from 'react'
import { FaUserCircle } from 'react-icons/fa'

export const InputFormsAdmin = ({placeholder,type,userRef}) => {
  return (
    <>
    <div className='w-[272px] h-[64px]  p-1 rounded-[4px] bg-gradient-to-r from-[#FE7A36]  to-[#381975] '>
      <div className=' w-full h-full bg-[#efeeee] flex items-center justify-center'>
            <input type={type} required placeholder={placeholder} className='w-full h-full text-[#3f3d56] placeholder-[#3f3d56] bg-[#efeeee] text-[18px] indent-[20px] rounded-[4px] ' ref={userRef} />
      </div>
    </div>
    </>
  )
}

export const InputFormsEmployees = ({placeholder,type,userRef}) => {
  return (
    <>
    <div className='w-[272px] h-[64px]  p-1 rounded-[4px] bg-gradient-to-r from-[#FE7A36]  to-[#381975] '>
      <div className=' w-full h-full bg-[#efeeee] flex items-center justify-center'>
            <input type={type} required placeholder={placeholder} className='w-full h-full text-[#3f3d56] placeholder-[#3f3d56] bg-[#efeeee] text-[18px] indent-[20px] rounded-[4px] ' ref={userRef} />
      </div>
    </div>
    </>
  )
}

export const InputFormsUsers = ({placeholder,type,userRef}) => {
  return (
    <>
    <div className='w-[272px] h-[64px]  p-1 rounded-[4px] bg-gradient-to-r from-[#FE7A36]  to-[#381975] '>
      <div className=' w-full h-full bg-[#efeeee] flex items-center justify-center'>
            <input type={type} required placeholder={placeholder} className='w-full h-full text-[#3f3d56] placeholder-[#3f3d56] bg-[#efeeee] text-[18px] indent-[20px] rounded-[4px] ' ref={userRef} />
      </div>
    </div>
    </>
  )
}

export const InputFormsreg = ({placeholder}) => {
  return (
    <>
    <div className='w-[272px] h-[64px]  p-1 rounded-[4px] bg-gradient-to-r from-[#FE7A36]  to-[#692FDB] '>
      <div className=' w-full h-full bg-[#efeeee] flex items-center justify-center'>
            <input type="text" placeholder={placeholder} className='w-full h-full text-[#3f3d56] placeholder-[#3f3d56] bg-[#efeeee] text-[25px] indent-[20px] rounded-[4px] ' />
      </div>
    </div>
    </>
  )
}

export const InputFormslog = ({placeholder,type,userRef}) => {
  return (
    <>
    <div className='w-[280px] h-[55px]  p-1 rounded-[5px] bg-[#FE7A36]'>
      <div className=' w-full h-full bg-[#efeeee] flex items-center justify-center'>
            <input type={type} placeholder={placeholder} className='w-full h-full text-[#3f3d56] placeholder-[#3f3d56] bg-[#efeeee] text-[20px] indent-[20px] rounded-[4px] ' ref={userRef} />
      </div>
    </div>
    </>
  )
}

export const InputFormslog2 = ({ placeholder,type,userRef }) => {
  return (
    <>
      <div className='w-[280px] h-[55px]  p-1 rounded-[5px] bg-[#692FDB]'>
        <div className=' w-full h-full bg-[#efeeee] flex items-center justify-center'>
          <input type={type} placeholder={placeholder} className='w-full h-full text-[#3f3d56] placeholder-[#3f3d56] bg-[#efeeee] text-[20px] indent-[20px] rounded-[4px] ' ref={userRef} />
        </div>
      </div>
    </>
  )
}

export const Inputrecuerdame = ({ placeholder, onChange = () => { } }) => {
  const [checked, isChecked] = useState(false);

  const handleClick = () => isChecked(val => {
    const nextValue = !val
    onChange(nextValue)
    return nextValue
  })

  const CheckComponent = () => {
    return <div className='flex items-center justify-center pointer-events-none select-none rounded-[3px] size-5' >
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="m10 15.586-3.293-3.293-1.414 1.414L10 18.414l9.707-9.707-1.414-1.414z"></path></svg>    </div>
  }
  return (
    <>
      <div className='flex h-[30px] content-between'>
        <input checked={checked} value={checked} type="checkbox" className='hidden' />

        <div onClick={handleClick} className='size-5 outline outline-[#3f3d56] rounded-[5px] m-0 p-0'>
          {
            checked && <CheckComponent />
          }
        </div>


        <div className=' justify-center'>
          <p className='mx-2 text-[15px] placeholder-[#3f3d56] '>{placeholder}</p>
        </div>
      </div>
    </>
  )
}

export const Inputolvi = ({ placeholder, textsize, onClick, customClassName }) => {
  return (
    <div onClick={() => onClick && onClick()} className={`${customClassName} cursor-pointer`}>
      <p className={`w-fit mb-3 border-b-[4px] border-[#3f3d56] px-1 placeholder-[#3f3d56] mt-1 right-2 text-[${textsize}]`} >{placeholder}</p>
    </div>

  )
}


export const Perfilcontenedor = ({ customClassName, nombre, documento, Background, icon }) => {
  return (
    
    <div className={`${customClassName} w-[22rem] h-[5rem] flex items-center justify-evenly cursor-pointer xl:w-[20rem]`}>
      <div className={`${Background} w-[18%] h-[5rem]`}>
        
      </div>
      
      <div className='w-[65%] flex-col px-[10px] '>
        <div className='text-[16px]'>
          {nombre}
        </div>
        {documento}
      </div>
      <FaUserCircle className={`w-[17%] text-[40px] text-[${icon}] flex justify-end`} />
    </div>
  );
}

