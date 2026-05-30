import AbtImg from '../../assets/home/man-is-working-machine-with-lot-yarn.jpg'

const HeroSection = () => {
  return (
    <>
      <div className='bg-[#f3f1ef] overflow-hidden'>
        <div className='w-full mx-auto px-3 py-24'>
          {/* Heading */}
          <div className='text-center'>
            <h1 className='text-7xl md:text-7xl leading-none font-light tracking-[-3px] text-black'>
              Precision Engineered
            </h1>

            <h2 className='text-[60px] md:text-6xl leading-none font-light tracking-[-2px] text-[#b4a6a3]'>
              Cotton Series Card Clothing
            </h2>
          </div>

          {/* Content Row */}
          <div className='grid md:grid-cols-3 gap-10 items-start mt-10'>
            {/* Left Image */}
            <div className='md:mt-32'>
              <div className='rounded-[40px] overflow-hidden'>
                <img
                  src={AbtImg}
                  alt='Team'
                  className='w-full h-[320px] object-cover'
                />
              </div>
            </div>

            {/* Center Content */}
            <div className='flex flex-col items-center md:items-start justify-center text-center pt-0'>
              <p className='text-[#3f3f3f] text-base leading-6 max-w-md'>
                Built for high-performance spinning mills, our Cotton Series
                Card Clothing delivers superior fiber opening, cleaning, and
                carding efficiency.
              </p>

              {/* Bottom Center Image */}
              <div className='rounded-[40px] overflow-hidden mt-20 w-full'>
                <img
                  src={AbtImg}
                  alt='Energy'
                  className='w-full h-[350px] object-cover'
                />
              </div>
            </div>

            {/* Right Image */}
            <div className='flex justify-end'>
              <div className='rounded-[40px] overflow-hidden w-full md:w-[90%]'>
                <img
                  src={AbtImg}
                  alt='Windmill'
                  className='w-full h-[520px] object-cover'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HeroSection
