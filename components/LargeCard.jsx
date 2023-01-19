import Image from 'next/image'

function LargeCard({ img, title, description, buttonText }) {
  return (
    <section className='relative py-16 hover:scale-105 transition transform duration-200 ease-out cursor-pointer'>
      <div className='relative h-96 min-w-[300px]'>
        <Image className='object-cover rounded-2xl' src={img} fill />
      </div>
      <div className='absolute top-32 left-12'>
        <h1 className='text-4xl my-2 font-semibold'>{title}</h1>
        <p className='text-lg my-6'>{description}</p>
        <button className='px-4 py-2 text-white bg-gray-800 rounded-lg'>
            {buttonText}
        </button> 
      </div>
      
    </section>
  )
}

export default LargeCard
