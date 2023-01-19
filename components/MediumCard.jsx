import Image from 'next/image'

function MediumCard({ img, title }) {
  return (
    <div className='flex flex-col items-center p-4 rounded-2xl hover:scale-105 hover:bg-gray-100 transition transform duration-200 ease-out cursor-pointer'>
      <div className='relative h-[200px] w-[200px]'>
        <Image className='rounded-lg' alt={title} src={img} fill/>
      </div>
      <h3 className='text-xl mt-3 font-semibold'>{title}</h3>
    </div>
  )
}

export default MediumCard
