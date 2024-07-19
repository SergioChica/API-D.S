import React, { useContext, useRef } from 'react'
import axios from 'axios';
import { InputFormsreg, InputFormslog, Inputrecuerdame, Inputolvi, InputFormsUsers } from '../InputForms/InputForms';
import { Buttonlog, Buttonreg, ButtonUsers } from '../Button/Buttons';
import { FaUserCircle } from "react-icons/fa";
import { StateContext } from '../../Context/Context';

export const FormsUsers = ({ }) => {
  const { setCreateUser } = useContext(StateContext);
  // const [data, setData] = useState([]);
  const inputNameRef = useRef()
  const inputLastNameRef = useRef()
  const inputEmailRef = useRef()
  const inputPhoneRef = useRef()
  const inputAddressRef = useRef()
  const inputAsistanceRef = useRef()
  const inputIdCenterRef = useRef()

  const toggleCreateUser = async () => {

    const name = inputNameRef.current.value;
    const lastName = inputLastNameRef.current.value;
    const email = inputEmailRef.current.value;
    const phone = inputPhoneRef.current.value;
    const address = inputAddressRef.current.value;
    const assistance = inputAsistanceRef.current.value;
    const idCenter = inputIdCenterRef.current.value;

    try {
      const response = await axios.post('http://localhost:3000/ds/auth/clients/register', { name, lastName, email, phone, address, assistance, idCenter });

      if (response.ok) {
        // const data = await response.json();
        // console.log('User registered:', data);
        setCreateUser(true);
      } else {
        alert('Failed to register user');
      }
    } catch (error) {
      alert('Error al obtener datos', error);
    }

  };

  return (
    <form className='absolute w-[600px] flex flex-col justify-center top-[10%] right-[30%] gap-[60px] items-center '>
      <div className='flex flex-col items-center gap-[20px] '>
        <h2 className='text-[#381975] font-medium text-[62px] '>Inscripción</h2>
      </div>
      <div className='flex flex-col items-center gap-[40px]'>
        <label className='flex flex-wrap justify-between gap-y-[20px] '>
          <InputFormsUsers type={'text'} placeholder='Pon tu Nombre' ref={inputNameRef} />
          <InputFormsUsers type={'text'} placeholder='Pon tu Apellido'ref={inputLastNameRef} />
          <InputFormsUsers type={'email'} placeholder='Pon tu Correo'ref={inputEmailRef} />
          <InputFormsUsers type={'text'} placeholder='Pon tu Telefono'ref={inputPhoneRef} />
          <InputFormsUsers type={'text'} placeholder='Pon tu Direccion'ref={inputAddressRef} />
          <InputFormsUsers type={'text'} placeholder='Pon tu Asistencia'ref={inputAsistanceRef} />
          <InputFormsUsers type={'text'} placeholder='Pon tu Numero de Centro'ref={inputIdCenterRef} />
        </label>
        <ButtonUsers Text={'Crear Usuario'} onClick={toggleCreateUser} />
      </div>
    </form>
  )
}

export const Formsreg = ({ }) => {
  return (
    <form className='absolute w-[600px] flex flex-col top-[50px] right-[190px] gap-[60px] items-center '>
      <div className='flex flex-col items-center gap-[20px] '>
        <h2 className='text-[#692FDB] font-medium text-[62px] '>Registrate</h2>
        <FaUserCircle className='text-[80px] text-[#692FDB] ' />
      </div>
      <div className='flex flex-col items-center gap-[40px]'>
        <label className='flex flex-wrap justify-between gap-y-[20px] '>
          <InputFormsreg placeholder='Pon tu correo' />
          <InputFormsreg placeholder='Pon tu numero' />
          <InputFormsreg placeholder='Pon tu local' />
          <InputFormsreg placeholder='Pon tu direccion' />
          <InputFormsreg placeholder='Pon tu deporte' />
          <InputFormsreg placeholder='Pon tu ciudad' />
        </label>
        <Buttonreg Text={'Contactanos'} />
      </div>
    </form>
  )
}

export const Formslog = () => {
  return (
    <form className='absolute w-[600px] flex flex-col top-[50px] left-[450px] gap-[60px] items-center '>
      <div className='flex flex-col items-center gap-[20px] '>
        <h2 className='text-[#FE7A36] font-medium text-[62px] '>Login</h2>
        <FaUserCircle className='text-[80px] text-[#FE7A36] ' />
      </div>
      <div className='flex flex-col items-center gap-[40px]'>
        <label className='flex flex-col justify-center gap-y-[20px] '>
          <InputFormslog placeholder='Pon tú ID' />
          <InputFormslog placeholder='Pon tú codigo' />
          <div className='w-[360px] flex justify-between'>
            <Inputrecuerdame placeholder='recuerdame' />
            <Inputolvi placeholder='¿Olvidaste tu contraseña?' />
          </div>
        </label>
        <Buttonlog Text={'Iniciar'} />
      </div>
    </form>
  )
}
