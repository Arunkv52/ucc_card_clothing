import FlattopsTable from '@/components/flattops/FlattopsTable'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Flat1 from '../assets/products/flat-tops/flat-top-stilo-550.jpeg'






const Flattops = () => {
  return (
    <>
      <div>
        <Navbar />
        <div className='md:px-8 px-5 md:mt-5 mt-30'>
          <h4 className='bg-gray-600 py-5 px-10 text-white text-2xl'>
            Flat Tops
          </h4>
        </div>

        <div className='md:grid grid md:grid-cols-2 grid-cols-1 gap-10 py-10 md:px-18 px-10'>
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
            <img src={Flat1} alt="" />
          </div>
        </div>
        <FlattopsTable/>

        <Footer />
      </div>
    </>
  )
}

export default Flattops
