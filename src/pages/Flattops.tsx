import FlattopsTable from '@/components/flattops/FlattopsTable'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Flat1 from '../assets/products/flat-tops/flat1.png'
import Flat2 from '../assets/products/flat-tops/flat2.png'
import Flat3 from '../assets/products/flat-tops/flat3.png'
import Flat4 from '../assets/products/flat-tops/flat4.png'
import Flat6 from '../assets/products/flat-tops/flat6.png'





const Flattops = () => {
  return (
    <>
      <div>
        <Navbar />
        <div className='px-8 mt-5 '>
          <h4 className='bg-gray-600 py-5 px-10 text-white text-2xl'>
            Flat Tops
          </h4>
        </div>

        <div className='grid grid-cols-2 gap-10 py-10 px-18'>
          <div>
            <div>
              <div className='py-4'>
                <ul className='text-md leading-5 font-semibold'>
                  <li className='py-1 list-disc'>
                    {' '}
                    Flat tops pins made out of Special grade oil tempered steel
                    with high fatigue properties.
                  </li>
                  <li className='py-1 list-disc'>
                    Tips are extra hardened in advanced HAQ - method (Hydrogen
                    fuel flaming and cryogenic quenching).
                  </li>
                  <li className='py-1 list-disc'>
                    This advance treatment keeps the flat tops naturally clean,
                    due to smooth surface finish.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <div className="grid grid-cols-3 gap-10">
                <img src={Flat1} alt="" />
                <img src={Flat2} alt="" />
                <img src={Flat3} alt="" />
                <img src={Flat4} alt="" />
                <img src={Flat6} alt="" />
            </div>
          </div>
        </div>
        <FlattopsTable/>

        <Footer />
      </div>
    </>
  )
}

export default Flattops
