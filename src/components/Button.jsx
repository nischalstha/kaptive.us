import React from 'react'

const Button = ({ styles }) => {
  const handleOnClick = () => {
    window.open('https://calendly.com/kaptivus/staffing-discovery-call?month=2024-01', '_blank');
  };
  return (
    <button type='button' className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles} rounded-[10px]`} onClick={() => handleOnClick()}>
      Lets Connect
    </button>
  )
}

export default Button
