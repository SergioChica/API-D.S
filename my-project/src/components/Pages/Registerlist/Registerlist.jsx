import React, { useEffect, useContext } from 'react'
import { Buttonfilter, ButtomHome } from '../../shared/Button/Buttons'
import { Perfilcontenedor } from '../../shared/InputForms/InputForms';
import { useLocation } from 'wouter'
import { IoMdArrowRoundBack } from "react-icons/io";
import axios from '../../../../axiosConfig';
import { StateContext } from '../../Context/Context';

export const Registerlist = () => {
  const [location, setLocation] = useLocation();
  const { clientsView, setClientsView } = useContext(StateContext);
  useEffect(() => {
    const fetchClients = async () => {
      try {
        const response = await axios.get('/clients/clients');
        // console.log(response.data);

        setClientsView(response.data)

      } catch (error) {
        console.error("Error getting clients", error);
      }
    };

    fetchClients();
  }, []);


  // useEffect(() => {
  //   console.log('clientsView state updated:', clientsView); // Verifica el estado actualizado
  // }, [clientsView]);

  return (
    <div className=' bg-[#F0ECE3] w-full h-full flex flex-col flex-1 items-center relative py-[2.5%]'>

      <div className='w-[1rem]' onClick={() => setLocation("/home")}>
        <ButtomHome Text={'Regresar'} customClassName={'m-[1rem] text-[30px] absolute left-[10%] top-[2.7%] text-[#000000] bg-[#F0ECE3] px-[1.5rem] py-[0.5rem] rounded-[10px] shadow-xl border-2 border-transparent transition-transform transform hover:-translate-y-2 hover:border-[#3B3A50] duration-3000 2xl:left-[7rem] 2xl:top-[2%] 2xl:px-[2rem] 2xl:text-[30px] xl:left-[5rem] xl:top-[1%] xl:px-[1.5rem] xl:text-[25px] lg:left-[3.5rem] lg:top-[1.3%] lg:text-[22px] md:text-[18px] md:top-[1.6%] md:left-[3%] sm:hidden'} />
        <IoMdArrowRoundBack className="hidden sm:inline-block  sm:text-[3rem] sm:top-[1%] text-[#000000] bg-[#F0ECE3] p-[0.5rem] rounded-[10px] shadow-xl border-2 border-transparent" />

      </div>
      <label className="flex flex-wrap items-center justify-end  ">
        <input className='w-[40rem] h-[4rem] bg-white text-[25px]  placeholder-[#3F3D56] px-5 border-[3px] border-[#3F3D56] rounded-[10px] 2xl:w-[35rem] 2xl:mt-[1.7%] xl:w-[30rem] xl:h-[3rem] xl:mt-[1.5%] lg:w-[25rem] lg:h-[2.8rem] lg:mt-[5%] md:w-[20rem] md:text-[20px] md:mt-[7%] md:border-[2px]' type="text" placeholder='Ingresa tu documento...' />

        {/* <button className='bg-[#FE7A36] rounded-[5px] w-[4rem] h-[4rem] bottom-[3rem] right-[5rem] xl:hidden lg:hidden md:inline block md:w-[2.6rem] md:h-[2.6rem] md:ml-[1rem] md:mt-[6.8%] sm- ' >
            <div className='flex justify-center' onClick={() => setLocation("/createusers")}>
              <svg width="40" height="40" viewBox="0 0 105 112" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M51 13L51 99" stroke="#F0ECE3" stroke-width="25" stroke-linecap="round" />
                <path d="M92 53L13 53.9997" stroke="#F0ECE3" stroke-width="25" stroke-linecap="round" />
              </svg>
            </div>
          </button> */}


      </label>

      <div className='flex items-center justify-center w-[full] h-full mt-[3rem]'>

        <Buttonfilter Text={'Horario'} customClassName={'m-[1rem] text-[30px] text-[#000000] bg-[#F0ECE3] px-[1.5rem] py-[0.5rem] rounded-[10px] shadow-xl border-2 border-transparent transition-transform transform hover:-translate-y-3 hover:border-[#3B3A50] duration-3000 xl:px-[1.5rem] xl:text-[25px] lg:top-[1.3%] lg:text-[22px] md:text-[18px]'} />
        <Buttonfilter Text={'Categoria'} customClassName={'m-[1rem] text-[30px] text-[#000000] bg-[#F0ECE3] px-[1.5rem] py-[0.5rem] rounded-[10px] shadow-xl border-2 border-transparent transition-transform transform hover:-translate-y-3 hover:border-[#3B3A50] duration-3000 xl:px-[1.5rem] xl:text-[25px] lg:top-[1.3%] lg:text-[22px] md:text-[18px]'} />
        <Buttonfilter Text={'Estado'} customClassName={'m-[1rem] text-[30px] text-[#000000] bg-[#F0ECE3] px-[1.5rem] py-[0.5rem] rounded-[10px] shadow-xl border-2 border-transparent transition-transform transform hover:-translate-y-3 hover:border-[#3B3A50] duration-3000 xl:px-[1.5rem] xl:text-[25px] lg:top-[1.3%] lg:text-[22px] md:text-[18px]'} />


      </div>

      <h1 className='text-[3rem] mt-[20px] 2xl:text-[2.7rem] xl:text-[2rem] lg:text-[1.7rem]'>Usuarios Registrados</h1>
      <div className=' m-2 h-[full] w-[90%] flex flex-wrap justify-center items-center mb-[15px] lg:w-[92%]'>
        {clientsView.map((client) => (
          <Perfilcontenedor
            key={client.id}
            nombre={client.name}
            documento={`CC:${client.id}`}
            customClassName="m-[1rem] text-[14px] text-black bg-[#F0ECE3] pr-[0.5rem] py-[0.5rem] rounded-[10px] shadow-md border-2 border-[#3F3D56] transition-transform transform hover:-translate-y-2 duration-3000"
            Background="bg-gradient-to-t from-[#3F3D56] to-[#3F3D56] to-[#381975] rounded-l-[10px]"
            icon="text-[#FE8D32]"
          />
        ))
        }
        {/* <Perfilcontenedor
          nombre={'Luis Fernández'}
          documento={'CC:1092456052'}
          customClassName={'m-[1rem] text-[14px] text-black bg-[#F0ECE3] pr-[0.5rem] py-[0.5rem] rounded-[10px] shadow-md border-2 border-[#5023A7] transition-transform transform hover:-translate-y-2 duration-3000'}
          Background={'bg-gradient-to-t from-[#692FDB] to-[#381975] rounded-l-[10px]'}
          icon={'text-[#5023A7]'}
        />
        <Perfilcontenedor
          nombre={'María López'}
          documento={'CC:1092456053'}
          customClassName={'m-[1rem] text-[14px] text-black bg-[#F0ECE3] pr-[0.5rem] py-[0.5rem] rounded-[10px] shadow-md border-2 border-[#3F3D56] transition-transform transform hover:-translate-y-2 duration-3000'}
          Background={'bg-gradient-to-t from-[#3F3D56] to-[#3F3D56] to-[#381975] rounded-l-[10px]'}
          icon={'text-[#3F3D56]'}
        />
        /> */}
      </div>

      <button className='bg-[#FE7A36] rounded-[5px] w-[4rem] h-[4rem] fixed bottom-[3rem] right-[5rem] xl:bottom-[2rem] xl:right-[2.5rem] lg:w-[3rem] lg:h-[3rem] lg:bottom-[2rem] lg:right-[2rem] md:hidden ' >
        <div className='flex justify-center' onClick={() => setLocation("/createusers")}>
          <svg width="40" height="40" viewBox="0 0 105 112" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M51 13L51 99" stroke="#F0ECE3" stroke-width="25" stroke-linecap="round" />
            <path d="M92 53L13 53.9997" stroke="#F0ECE3" stroke-width="25" stroke-linecap="round" />
          </svg>
        </div>
      </button>

    </div>

  )
}