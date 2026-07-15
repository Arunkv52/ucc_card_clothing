import CylinderImg from '../../assets/products/metalic-wires/cylinder/Product-banner-image.jpg'
import CylinderWireTable from './CylinderwireTable'

const CylinderSeries = () => {
  return (
    <>
      <div className='grid grid-cols-2 gap-10 py-10 px-18'>
        <div>
          
          <div>
            <h6 className='bg-[#ff681c] py-4 px-2 font-bold text-md'>
              Cylinder Wires
            </h6>
            <div className='py-4'>
              <ul className='text-md leading-5 font-semibold'>
                <li className='py-2'>
                  <strong> UNISTAR : </strong> Made from NANO ALLOY STEELS for
                  super high production cards.
                </li>
                <li className='py-2'>
                  <strong> UNICHROME:</strong> Made from CHROME VANADIUM STEELS
                  for high production cards.
                </li>
                <li className='py-2'>
                  <strong> UNICARB : </strong> Made from Special High Tenacity
                  CARBON STEELS for medium speed cards.
                </li>
                <li className='py-2'>
                  <strong> STILO : </strong> Made of Special Combination Steel.
                </li>
              </ul>
            </div>
          </div>
          <img src={CylinderImg} alt='' className='w-full' />
        </div>

        <CylinderWireTable />
      </div>
    </>
  )
}

export default CylinderSeries
