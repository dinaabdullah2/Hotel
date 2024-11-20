import React from 'react'
import CheckIcon from '../icons/CheckIcon'
import Logo from '../atoms/Logo'

const ConfirmationModal = () => {
  return (
    <div className='flex flex-col '>
        <CheckIcon />
        <div className='m-auto text-center'>
        <p className='text-lg font-semibold'> Your trip is confirmed (323045621) </p>
        <p  className='py-2 text-sm text-gray-700'>Well email your booking confirmation shortly </p>
        <p  className='text-sm text-gray-700'>Thank you for your purchase </p>
        </div>
        <div className='py-3 m-auto'>
        <Logo />
        </div>
    </div>
  )
}

export default ConfirmationModal