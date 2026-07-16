import BlowroombeaterlmwTable from './BlowroombeaterlmwTable'
import BlowroombeaterTable from './BlowroombeaterTable'
import BorderWiresTable from './BorderWiresTable'
import StripperTable from './StripperTable'
import Img3 from '../../assets/products/metalic-wires/cylinder/Product-banner-image-3.jpg'

const Blowroom = () => {
  return (
    <>
      <div className='md:grid md:grid-cols-2 md:gap-10 md:py-10 py-10 md:px-18 px-5'>
        <div>
          <div>
            <h6 className='bg-[#ff681c] md:py-4 py-4 px-2 font-bold text-md md:mt-0 mt-10'>
              Blowroom Beater Wires TRUTZSCHLER & TRUMAC
            </h6>
          </div>
          <BlowroombeaterTable />
        </div>

        <div>
          <div>
            <h6 className='bg-[#ff681c] md:py-4 py-4 px-2 font-bold text-md md:mt-0 mt-10'>
              Blowroom Beater Wires RIETER & LMW
            </h6>
          </div>
          <BlowroombeaterlmwTable />
        </div>

        <div>
          <div>
            <h6 className='bg-[#ff681c] md:py-4 py-4 px-2 font-bold text-md md:mt-0 mt-10'>
              Border Wires
            </h6>
          </div>
          <BorderWiresTable />
        </div>

        <div>
          <div>
            <h6 className='bg-[#ff681c] md:py-4 py-4 px-2 font-bold text-md md:mt-0 mt-10'>
              Stripper Roller & Feed Roller & Chute Beater Wires
            </h6>
          </div>
          <StripperTable />
        </div>
        <div>
            <img src={Img3} alt="" className='w-full' />
        </div>
      </div>
    </>
  )
}

export default Blowroom
