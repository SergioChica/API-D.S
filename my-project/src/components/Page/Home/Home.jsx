import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Main } from '../../Layouts/Main/Main';
import { Login } from '../../Login/Login';


export const Home = () => {

    const [data, setData] = useState([]);
    const inputIdRef = useRef('');
    const inputNameRef = useRef('');

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:3000/data');
            setData(response.data);
        } catch (error) {
            console.error('Error al obtener datos:', error);
        }
    };

    const handleSubmit = async event => {
        event.preventDefault();
        const id = inputIdRef.current.value;
        const name = inputNameRef.current.value;
        try {
            await axios.post('http://localhost:3000/data', { id, name });
            fetchData(); // Actualizar datos después de agregar uno nuevo
            inputIdRef.current.value = ''; // Limpiar el campo de ID después de enviar los datos
            inputNameRef.current.value = ''; // Limpiar el campo de nombre después de enviar los datos
        } catch (error) {
            console.error('Error al enviar datos:', error);
        }
    };

    return (
        <>
            <Main>
                <div className='bg-[#381975] bg-opacity-[35%] w-[100px] h-[100px] rounded-[100%] absolute top-[20px] left-[85px] '></div>
                <div className='bg-gradient-to-t from-[#7C96AB5E] to-[#692FDB5E] w-[370px] h-[390px] rounded-[100%] absolute top-[20px] left-[225px] '></div>
                <div className='bg-[#FE7A3659] bg-opacity-[35%] w-[70px] h-[70px] rounded-[100%] absolute top-[30%] left-[65px] '></div>
                <div className=' bg-gradient-to-tr from-[#FE7A365C] to-[#7C96AB3D] w-[380px] h-[390px] rounded-[350px] absolute bottom-[20px] left-[115px] z-[1] '></div>
                <Login name={inputNameRef} code={inputIdRef} submit={handleSubmit} />
                <div className='relative bg-[#979797] h-[632px] w-[570px] rounded-[5px] flex flex-col justify-center items-center z-[999] '>
                    <h1>Result:</h1>
                    {data.map(item => (
                        <li key={item.id}>{item.name}</li>
                    ))}
                </div>
                <div className='bg-[#FE7A3659] bg-opacity-[35%] w-[100px] h-[100px] rounded-[100%] absolute top-[20px] right-[225px] '></div>
                <div className='bg-[#FF9F2E59] bg-opacity-[35%] w-[110px] h-[110px] rounded-[100%] absolute top-[110px] right-[75px] '></div>
                <div className=' bg-gradient-to-t from-[#3819755E] to-[#692FDB5E] w-[710px] h-[680px] rounded-[350px] absolute bottom-[-210px] right-[-70px] z-[0]'></div>
            </Main>
        </>
    )
}
