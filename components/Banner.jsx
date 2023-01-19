import Image from 'next/image'

let bannerSource = 'https://images.unsplash.com/photo-1613190151884-6f44af3ad0d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1975&q=80'

function Banner() {
  return (
    <div className='relative h-[300px] sm:h[400px] lg:h-[500px] xl:h[600px] 2xl:h[700px]'>
      <Image className='object-cover'
        src={bannerSource}
        fill
      />
      <div className='absolute top-1/3 w-full text-center'>
        <h1 className='text-white text-2xl font-bold'>Not sure where to go? Perfect.</h1>

        <button className='mt-6 px-8 py-4 bg-white font-semibold text-sm sm:text-lg text-red-400 rounded-full shadow-lg hover:shadow-2xl active:scale-90 transition duration-200'>I'm flexible</button>
      </div>
    </div>
  )
}

export default Banner
