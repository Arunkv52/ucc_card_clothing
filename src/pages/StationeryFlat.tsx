import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Prod1 from '../assets/products/stationery/st_flat3.jpg'
import Prod2 from '../assets/products/stationery/st_flat4.jpg'
import Prod3 from '../assets/products/stationery/st_flat5.jpg'
import Prod4 from '../assets/products/stationery/st_flat6.jpg'
import Prod5 from '../assets/products/stationery/st_flat7.jpg'
import Prod6 from '../assets/products/stationery/st_flat8.jpg'

import StationeryFlatTable from '@/components/stationeryflattops/StationeryFlatTable'

const StationeryFlat = () => {
  return (
    <>
      <div>
        <Navbar />
        <div className='md:px-8 px-5 md:mt-5 mt-30'>
          <h4 className='bg-gray-600 py-5 px-10 text-white text-2xl'>
            Stationary Flat Tops
          </h4>
        </div>

        <div className='md:grid grid md:grid-cols-2 grid-cols-1 gap-10 py-10 md:px-18 px-10'>
          <div>
            <div>
              <div className='py-4'>
                <ul className='text-md leading-5 font-semibold'>
                  <li className='py-1 list-disc'>
                    Available for all make and model cards
                  </li>
                  <li className='py-1 list-disc'>
                    Periodical Replacement of SF Tops Enhance Cylinder and Flat
                    Top Life.
                  </li>
                  <li className='py-1 list-disc'>
                    Stationary Flat Metallic wires are made out of imported NANO
                    ALLOY STEELS
                  </li>
                  <li className='py-1 list-disc'>
                    Latest Tooth Geometry and angle Suitable for Super High
                    Production Cards (up to 100kg/hrs)
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <div className='md:grid grid md:grid-cols-3 grid-cols-2 gap-10'>
              <img src={Prod1} alt='' />
              <img src={Prod2} alt='' />
              <img src={Prod3} alt='' />
              <img src={Prod4} alt='' />
              <img src={Prod5} alt='' />
              <img src={Prod6} alt='' />
            </div>
          </div>
        </div>
        <StationeryFlatTable />

        <Footer />
      </div>
    </>
  )
}

export default StationeryFlat
