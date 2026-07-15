import CottonCard from '../../assets/home/Photoshoot/Banner-4.png'
import MetalicImg from '../../assets/home/Products/Metalic-wires.jpg'
import FlattopImg from '../../assets/home/Photoshoot/stilo-550.jpeg'
import StationaryImg from '../../assets/home/Photoshoot/All-type.jpeg'

const Productsticyscroll = () => {
  const Products = [
    {
      image: CottonCard,
      title: 'Cotton Series Card Clothing',
      types: 'Unistar / Unistar Plus / Unimax'
    },
    {
      image: MetalicImg,
      title: 'Metallic Wires',
      types:
        'Cylinder wires / Doffer wires / Grooved lickerin wires / Interlocking lickerin wires / stripper roller wires / Feed roller wires / Blow room beater saw tooth wires'
    },
    {
      image: FlattopImg,
      title: 'Flat Tops',
      types: 'Flat Tops - For cotton, synthetics, acrylics and surgical cotton process',
      types1: 'Flat Tops - Stilo series, Uno series, Uno S series and Uno G series'
    },
    {
      image: StationaryImg,
      title: 'Stationary Flats Tops - Stilo Series',
      types:
        'Manufactured out of imported nano alloy steels. With modified tooth geometry suitable for latest generation carding machines'
    }
  ]

  return (
    <>
      <div className='product-stickyscroll bg-black text-white md:py-20 pt-120 md:px-10 px-0'>
        <div className='heading'>
          <h3 className='text-4xl font-bold'>
            Advanced Clothing for Every Fibre
          </h3>
        </div>
        <div className='sticky-products py-10'>
          {Products.map(item => (
            <>
              <div className='md:flex md:flex-row flex flex-col justify-start items-start gap-10 sticky top-20 bg-black py-10 md:px-0 px-5'>
                <div className='md:w-1/2 w-full'>
                  <img src={item.image} alt='' className='w-full' />
                </div>
                <div className='md:w-1/2 w-full'>
                  <div className='text-content flex flex-col justify-between items-start border-t border-white'>
                    <div className='pt-3 pb-10'>
                      <h6 className='md:text-2xl text-base'>{item.title}</h6>
                    </div>
                    <div className='py-10'>
                      <h3 className='md:text-2xl text-2xl text-[#e37f32] font-bold'>
                        {item.types}
                      </h3>
                      <h3 className='md:text-2xl text-2xl text-[#e37f32] font-bold py-2'>
                        {item.types1}
                      </h3>
                    </div>
                    {/* <div className='py-10 text-base'>
                      <ul>
                        <li className='border-b border-white py-3'>
                          {item.list1}
                        </li>
                        <li className='border-b border-white py-3'>
                          {item.list2}
                        </li>
                        <li className='border-b border-white py-3'>
                          {item.list3}
                        </li>
                      </ul>
                    </div> */}
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  )
}

export default Productsticyscroll
