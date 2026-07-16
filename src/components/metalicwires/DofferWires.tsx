import DofferwireTable from './DofferwireTable'
import GroovedlickedTable from './GroovedlickedTable'
import InterlocingTable from './InterlockingTable'
import Img1 from '../../assets/products/metalic-wires/cylinder/grooved.jpg'

const DofferWires = () => {
  return (
    <>
      <div className='md:grid md:grid-cols-2 md:gap-10 md:py-10 py-10 md:px-18 px-5'>
        <div>
          <div>
            <h6 className='bg-[#ff681c] py-4 px-2 font-bold text-md'>
              Doffer Wires
            </h6>
          </div>
          <DofferwireTable />
        </div>

        <div>
          <div>
            <h6 className='bg-[#ff681c] py-4 px-2 font-bold text-md md:mt-0 mt-10'>
              Interlocking Licker-in Wires
            </h6>
          </div>
          <InterlocingTable />
        </div>
        <div>
          <div>
            <h6 className='bg-[#ff681c] py-4 px-2 font-bold text-md md:mt-0 mt-10'>
              Grooved Licker-in Wires
            </h6>
          </div>
          <GroovedlickedTable />
        </div>
        <div>
          <img src={Img1} alt='' />
        </div>
      </div>
    </>
  )
}

export default DofferWires
