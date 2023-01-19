import React from 'react'
import Image from 'next/image'

function SmallCard({ img, distance, location }) {
  return (
    <div className='flex p-4 items-center rounded-xl hover:bg-gray-100 active:bg-gray-300 hover:scale-105 transition transform duration-200 ease-out cursor-pointer'>
      <Image alt='small card' className='rounded-lg' src={img} width={64} height={64} />
      <div className='mx-4'>
        <h1 className='font-semibold text-gray-900'>{location}</h1>
        <p className='text-gray-500'>{distance}</p>
      </div>
    </div>
  )
}

export default SmallCard
