import CottonCard from '../../assets/home/Photoshoot/Banner-4.png'
import MetalicImg from '../../assets/home/Products/metalic.png'
import FlattopImg from '../../assets/home/Products/Flat-tops.png'
import StationaryImg from '../../assets/home/Products/Stationary-Flat-Tops.png'

const Productsticyscroll = () => {
  const Products = [
    {
      image: CottonCard,
      title: 'Cotton Series Card Clothing',
      types: 'Unimax / Unistar Plus / Unistar',
      list1: 'Available in 960 & 860 ppsi',
      list2: 'Metallurgy : Unistar, Unichrome & Unicarb',
      list3:
        'Speciﬁcations : CP 2035 x 0.4 - 960, CR 2030 x 0.5 - 860, CP 1735 x 0.4 - 960, CR 1730 x 0.5 - 860'
    },
    {
      image: MetalicImg,
      title: 'Metallic Wires',
      types: 'CYLINDER WIRES / DOFFER WIRES / INTERLOCKING LICKER-IN WIRES',
      list1:
        'UNISTAR : Made from NANO ALLOY STEELS for super high production cards.',
      list2:
        'UNICHROME: Made from CHROME VANADIUM STEELS for high production cards.',
      list3:
        'UNICARB : Made from Special High Tenacity CARBON STEELS for medium speed cards.'
    },
    {
      image: FlattopImg,
      title: 'Flat Tops',
      types: '',
      list1:
        'Flat tops pins made out of Special grade oil tempered steel with high fatigue properties.',
      list2:
        'Tips are extra hardened in advanced HAQ - method (Hydrogen fuel flaming and cryogenic quenching).',
      list3:
        'This advance treatment keeps the flat tops naturally clean, due to smooth surface finish.'
    },
    {
      image: StationaryImg,
      title: 'Stationary Flat Tops',
      types: '',
      list1: 'Available for all make and model cards',
      list2:
        'Periodical Replacement of SF Tops Enhance Cylinder and Flat Top Life.',
      list3:
        'Stationary Flat Metallic wires are made out of imported NANO ALLOY STEELS'
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
                      <h3 className='md:text-3xl text-3xl'>{item.types}</h3>
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
