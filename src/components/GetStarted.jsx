import React from 'react'
import styles from '../style'
import { arrowUp } from '../assets'

const GetStarted = () => {
  const handleOnClick = () => {
    window.open('https://calendly.com/kaptivus/client-discovery-call?month=2024-01', '_blank');
  };
  return (
    <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`} onClick={()=> handleOnClick()}>
      <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
        <div className={`${styles.flexStart} flex-row`}>
          <p className='font-poppins font-medium text-[18px] leading-[23px] mr-2'>
            <span className='text-gradient'>Book</span>
          </p>
          <img
            src={arrowUp}
            alt='arrow'
            className='w-[23px] h-[23px] object-contain'
          />
        </div>
        <p className='font-poppins font-medium text-[18px] leading-[20px]'>
          <span className='text-gradient'>Today</span>
        </p>
      </div>
    </div>
  )
}

export default GetStarted
