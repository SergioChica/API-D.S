import React from 'react'

export const ListUsers = ({ textName, textCode}) => {
    return (
        <li className=' h-[15%] flex justify-between items-center bg-[#38197599] pl-[5px] pr-[5px] '>
            <p>name: {textName}</p>
            <p>code: {textCode}</p>
        </li>
    )
}
