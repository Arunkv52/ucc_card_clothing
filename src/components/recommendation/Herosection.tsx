import { Link } from 'react-router'
import Navbar from '../Navbar'

const Herosection = () => {
  return (
    <>
      <Navbar />
      <div className='bg-[#f1f1f1] md:py-20 py-30 md:px-8 px-4 md:flex md:flex-row justify-between items-start gap-10'>
        <div className='seller-left'>
          <h2 className='text-4xl md:max-w-1/2  w-full'>
            Recommendation Chart
          </h2>
        </div>
        <div className='seller-right'>
          <div className='seller-right-text md:py-0 py-5'>
            <p>
              Our Dealer network spans across various <br /> cities in many
              states of India
            </p>
          </div>
          <div className='seller-right-btn flex justify-start items-center gap-5 py-3'>
            <div className='btn-right1'>
              <Link
                to='/contact'
                className='inline-block border border-gray-300 px-8 py-2 rounded-sm text-sm cursor-pointer'
              >
                Connect Us
              </Link>
            </div>
            <div className='btn-right1'>
              <button className='bg-gray-300 px-8 py-2 rounded-sm text-sm cursor-pointer'>
                Recommendation Chart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Herosection
