import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import NonImage1 from '@/assets/products/nonowen/Image-1.png'
import Metalicwirechart from '@/components/nonowen/Metalicwirechart'
import NonowenCylinder from '@/components/nonowen/NonowenCylinder'
import NonowenDoffer from '@/components/nonowen/NonowenDoffer'
import NonowenWorker from '@/components/nonowen/NonowenWorker'
import NonowenTransporter from '@/components/nonowen/NonowenTransporter'
import NonowenCondensor from '@/components/nonowen/NonowenCondesnsor'
import NonowenLickerin from '@/components/nonowen/NonowenLickerin'

const Nonowen = () => {
  return (
    <>
      <div>
        <Navbar />
        <div className='px-8 mt-5 '>
          <h4 className='bg-gray-600 py-5 px-10 text-white text-2xl'>
            Nonwoven Metalic Wires
          </h4>
        </div>

        <div className='grid grid-cols-2 gap-10 py-10 px-18'>
          <div>
            <div className='py-4'>
              <p className='text-2xl'>
                Nonwoven Metallic wires chart for customer's specification
                requirements.
              </p>
            </div>
          </div>
          <div>
            <div className='py-4'>
              <img src={NonImage1} alt='' />
            </div>
          </div>
        </div>
        <Metalicwirechart />

        <div className='grid grid-cols-2'>
          <div>
            <NonowenCylinder />
          </div>
          <div>
            <NonowenDoffer />
          </div>
          <div>
            <NonowenWorker />
          </div>
          <div>
            <NonowenTransporter />
          </div>
          <div>
            <NonowenCondensor />
          </div>
          <div>
            <NonowenLickerin />
          </div>
        </div>

        <Footer />
      </div>
    </>
  )
}

export default Nonowen
