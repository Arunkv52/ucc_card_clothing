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
      <div className='relative top-20 z-10'>
        <h1 className='md:text-7xl text-6xl text-[#020012] font-semibold text-center'>
          Reliable Carding Solutions
        </h1>

        
       
      </div>
    </header>
  )
}

export default Header
