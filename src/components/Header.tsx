import Navbar from './Navbar'

const Header = () => {
  return (
    <header className='relative h-screen overflow-hidden'>
      {/* Background Image */}

      {/* Dark Overlay */}
      <div className='absolute inset-0 '></div>

      {/* Glass Lines */}
      <div className='absolute inset-0 pointer-events-none'>
        <div className='absolute top-[60%] right-0 w-[30%] h-20 bg-gradient-to-r from-transparent to-cyan-400/30 '></div>
        <div className='absolute top-[80%] right-0 w-[60%] h-20 bg-gradient-to-r from-transparent to-cyan-400/40 '></div>

        <div className='absolute top-[85%] right-0 w-[20%] h-20 bg-gradient-to-r from-transparent to-cyan-400/80 '></div>

        <div className='absolute top-[90%] right-0 w-[90%] h-16 bg-gradient-to-r from-transparent to-cyan-400/30 '></div>
      </div>

      <Navbar />

      {/* Content */}
      <div className='absolute top-1/3 left-5 z-10'>
        <h1 className='md:text-4xl text-5xl text-black font-semibold md:leading-10 leading-12'>
          Reliable <br /> Carding Solutions
        </h1>

        
        <div className='mt-20 md:w-1/2 w-full text-black/85 border-t-2 border-l-2 border-gray-300 p-5 rounded-2xl'>
          <h6 className='md:text-base text-base'>
            Meet the emerging Indian brand in card clothing
          </h6>
        </div>
      </div>
    </header>
  )
}

export default Header
