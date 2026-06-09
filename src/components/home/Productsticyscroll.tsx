import CottonCard from '../../assets/home/Photoshoot/Banner-4.png'
import MetalicImg from '../../assets/home/Products/Metalic-wires.jpg'
import FlattopImg from '../../assets/home/Photoshoot/pic3.jpeg'
import StationaryImg from '../../assets/home/Products/Stationary-Flat-Tops.png'

const Productsticyscroll = () => {
  const Products = [
    {
      image: CottonCard,
      title: 'Cotton Series Card Clothing',
      types: 'Unimax / Unistar Plus / Unistar',
     
    },
    {
      image: MetalicImg,
      title: 'Metallic Wires',
      types: 'CYLINDER WIRES / DOFFER WIRES / INTERLOCKING LICKER-IN WIRES',
     
    },
    {
      image: FlattopImg,
      title: 'Flat Tops',
      types: '',
     
    },
    {
      image: StationaryImg,
      title: 'Stationary Flat Tops',
      types: '',
     
    }
   
  ]

  return (
    <>
      <div className='product-stickyscroll bg-black text-white md:py-20 pt-120 md:px-10 px-0'>
        <div className='heading'>
          <h3 className='text-4xl font-bold'>
            Advanced Clothing for <br /> Every Fiber
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
                      <h3 className='md:text-2xl text-2xl text-[#e37f32] font-bold'>{item.types}</h3>
                    </div>
                    <div className='py-10 text-base'>
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
                    </div>
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
