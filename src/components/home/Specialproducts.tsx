import SpecialImg from '../../assets/home/prod-draw.png'
import { FaChevronRight } from 'react-icons/fa6'

const Specialproducts = () => {
  return (
    <>
      <div className='spl-prod md:px-5 px-0 md:flex md:flex-row flex flex-col md:justify-between md:items-start gap-10'>
        <div className='md:w-[70%] w-full'>
          <p className='bg-[#d8d8d849] text-black text-xs max-w-fit px-3 py-2'>
            Cotton Series Card Clothing
          </p>
          <h2 className='text-5xl py-10 font-bold'>
            Precision Engineered for <br />
            Superior Carding Performance
          </h2>
          <div className='bg-black text-white px-5 py-3 max-w-fit mt-8'>
            <button className='flex items-center gap-5'>
              How it Works
              <FaChevronRight />
            </button>
          </div>
        </div>
        <div className='md:w-[30%] w-full'>
          <img src={SpecialImg} alt='' className='w-100 h-10/12 object-cover' />
        </div>
        {/* Dark Overlay */}
        <div className='absolute inset-0'></div>

        {/* Glass Lines */}
        <div className='absolute inset-0 pointer-events-none'>
          <div className='absolute top-[92%] right-0 w-full h-16 bg-gradient-to-r from-transparent to-blue-500/80 '></div>
        </div>
      </div>
    </>
  )
}

export default Specialproducts
