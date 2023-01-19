import Image from 'next/image'

import { BiSearch, BiGlobe, BiMenu, BiUserCircle } from 'react-icons/bi'

let airbnbLogo =
  'https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_Bélo.svg'

function Header() {
  return (
    <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10'>
      {/* Left - Logo*/}
      <div className='relative flex items-center cursor-pointer my-auto'>
        <Image alt='Airbnb Logo' src={airbnbLogo} width={128} height={128} />
      </div>

      {/* Middle - Search*/}
      <div className='flex items-center rounded-full py-2 md:border-2 md:shadow-sm'>
        <input
          className='pl-6 flex-grow bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400'
          type='text'
          placeholder='Start your search'
        />
        <BiSearch className='hidden md:inline-flex w-6 h-8 p-2 rounded-full bg-red-400 hover:bg-red-600 transition transform duration-200 ease-out text-white p2 cursor-pointer mx-2 min-w-fit' />
      </div>

      {/* Right*/}
      <div className='flex items-center space-x-4 justify-end text-gray-500'>
        <p className='hidden md:inline cursor-pointer'>Become a host</p>
        <BiGlobe className='cursor-pointer w-6 h-6' />

        <div className='flex items-center space-x-2 border-2 p-2 rounded-full cursor-pointer'>
          <BiMenu className='w-6 h-6' />
          <BiUserCircle className='w-6 h-6' />
        </div>
      </div>
    </header>
  )
}

export default Header
