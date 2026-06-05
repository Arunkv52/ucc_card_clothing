import { FaChevronRight } from 'react-icons/fa6'

const Contactpreview = () => {
  return (
    <>
      <div className='md:px-10 px-5 md:py-30 py-20 relative overflow-hidden'>
        <div className='text-start text-black'>
          <h6 className='font-bold md:text-6xl text-5xl md:leading-15 leading-12'>
            Ready to Transform Your <br /> Textile Performance?
          </h6>
        </div>
        <div className='bg-black text-white px-5 py-3 max-w-fit mt-8'>
          <button className='flex items-center gap-5'>
            How it Works
            <FaChevronRight />
          </button>
        </div>
        {/* Dark Overlay */}
        <div className='absolute inset-0'></div>

        {/* Glass Lines */}
        <div className='absolute inset-0 pointer-events-none'>
          <div className='absolute top-[60%] right-10 w-1/2 h-12 bg-gradient-to-r from-transparent to-blue-500/80 '></div>
          <div className='absolute top-[70%] right-40 w-1/3 h-10 bg-gradient-to-r from-transparent to-blue-500/20 '></div>
          <div className='absolute top-[78%] right-0 w-1/2 h-13 bg-gradient-to-r from-transparent to-blue-500/40 '></div>
          <div className='absolute top-[90%] right-0 w-full h-12 bg-gradient-to-r from-transparent to-blue-500/50 '></div>
        </div>
      </div>
    </>
  )
}

export default Contactpreview
