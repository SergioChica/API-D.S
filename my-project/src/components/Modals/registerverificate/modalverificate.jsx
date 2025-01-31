import React from 'react'
import { IoCloseOutline } from "react-icons/io5";

export const Modalverificate = ({ closeIcon, closeButton, visibility }) => {
    return (
        <div className={visibility ? ' w-screen h-screen flex justify-center items-center fixed top-0 left-0 bg-[#00000080] z-[9999999999] ' : 'hidden'}>
            <div className='w-[40%] h-[85%] bg-[#F0ECE3] flex flex-col justify-center items-center rounded-[10px] pb-[10px] animate-modal relative'>
                <IoCloseOutline fontSize={50} onClick={closeIcon} className='cursor-pointer absolute right-4 top-3 text-[#2F2E41] ' />
                <div className='w-[90%] h-[85%] flex flex-col items-center justify-between relative '>

                <svg className='mt-[3rem] ml-[2.5rem]' width="495" height="453" viewBox="0 0 495 453" fill="none" xmlns="http://www.w3.org/2000/svg">

                <path
              fill="url(#paint0_linear_242_169)">
                <animate attributeName='d' dur="20000ms" repeatCount="indefinite"
                    values='
                    M236.088 430.794C182.797 387.842 237.425 329.211 117.347 380.609C-2.73057 432.008 -32.0562 272.965 36.3359 208.845C104.728 144.725 -27.329 6.05722 122.489 50.7436C272.307 95.4299 194.147 -3.03333 267.495 0.549835C330.673 3.6362 347.015 72.2378 350.332 91.2015C350.868 94.262 352.516 96.924 355.071 98.579C381.418 115.646 527.16 213.969 475.189 268.433C459.235 285.152 446.872 291.171 424.442 297.956C389.428 308.548 328.425 290.833 345.529 349.498C362.632 408.163 289.379 473.747 236.088 430.794Z;
                    M202.089 418.795C148.798 375.842 203.426 317.211 83.3482 368.61C-36.7295 420.008 -9.39268 273.62 58.9995 209.5C127.392 145.381 -61.328 -5.94241 88.49 38.7439C238.308 83.4303 256.653 -2.58317 330 0.99999C387.525 3.81019 346.861 53.2781 326.641 74.4898C321.99 79.3684 322.683 87.5823 328.203 91.2828C366.753 117.123 489.543 205.761 441.19 256.433C425.236 273.152 378.931 236.715 356.501 243.5C321.487 254.092 294.426 278.833 311.53 337.498C328.633 396.163 255.38 461.747 202.089 418.795Z;
                    M241.31 444.499C188.019 401.547 238.236 353.71 118.158 405.108C-1.91958 456.507 -34.0009 190 41.8113 165.5C117.623 140.999 72.8089 98.4991 127.809 55.4991C182.809 12.4991 288 -33.9999 364.81 37.4986C399.341 69.6424 400.209 89.664 390.703 101.966C384.142 110.457 382.595 132.824 392.061 137.429C433.641 157.658 488.25 193.745 455.5 233C440.671 250.775 413.741 273.214 391.311 279.999C356.297 290.591 416.681 360.994 346.34 373.997C275.998 387 294.601 487.452 241.31 444.499Z;
                    M212.002 419.001C158.711 376.048 212.078 305.602 91.9998 357.001C-28.0779 408.399 -19.3124 171.502 56.4998 147.002C132.312 122.502 78.3114 82.0012 133.311 39.0012C188.311 -3.99876 336.5 -13 370.312 21.0008C393.164 43.9796 379.219 73.8185 367.777 90.7493C363.499 97.08 366.023 106.652 373.104 109.043C416.028 123.54 529.333 167.558 488.501 216.501C473.671 234.276 419.244 256.716 396.814 263.501C361.8 274.093 435.844 366.498 365.502 379.501C295.16 392.504 265.293 461.954 212.002 419.001Z;                  
                    M236.088 430.794C182.797 387.842 237.425 329.211 117.347 380.609C-2.73057 432.008 -32.0562 272.965 36.3359 208.845C104.728 144.725 -27.329 6.05722 122.489 50.7436C272.307 95.4299 194.147 -3.03333 267.495 0.549835C330.673 3.6362 347.015 72.2378 350.332 91.2015C350.868 94.262 352.516 96.924 355.071 98.579C381.418 115.646 527.16 213.969 475.189 268.433C459.235 285.152 446.872 291.171 424.442 297.956C389.428 308.548 328.425 290.833 345.529 349.498C362.632 408.163 289.379 473.747 236.088 430.794Z;
                    


                     '
                    >
                </animate>
              </path>
<defs>
<linearGradient id="paint0_linear_242_169" x1="-14.511" y1="95.8592" x2="418.589" y2="361.195" gradientUnits="userSpaceOnUse">
<stop offset="0.307562" stop-color="#503A7A"/>
<stop offset="0.76" stop-color="#692FDB"/>
</linearGradient>
</defs>
</svg>

<p className='text-[20px] text-[#F0ECE3] '> <b className='text-[35px] w-[15rem] fixed top-[13rem] left-[40rem] text-center'>Ya nos comunicaremos contigo</b> <p className=' w-[15rem] fixed top-[23rem] text-center left-[40rem] text-[#c2c1c0]'>gracias por confiar en nuestros servicios.</p></p>






                    </div>


                </div>
            </div>
    )
}
