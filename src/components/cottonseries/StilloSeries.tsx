import StilioImg from '../../assets/products/cotton-series/stilio.jpg'
import UnoImg from '../../assets/products/cotton-series/uno.jpg'
import Series1 from '../../assets/products/cotton-series/stilio-logo.png'

const StilloSeries = () => {
  return (
    <>
      <div className='grid grid-cols-3 gap-10 py-30 px-20'>
        <div>
          <div className='flex justify-start items-end gap-1'>
            <img src={Series1} alt='' className='w-20' />
            <p className='font-semibold'>SERIES</p> <br />
          </div>
          <div className='mb-5'>
            <p className='font-bold'>530, 550, 580, 600 & 700</p>
          </div>
          <img src={StilioImg} alt='' />
        </div>
        <div>
          <div className='flex justify-start items-end gap-1'>
            <img src={Series1} alt='' className='w-20' />
            <p className='font-semibold'>SERIES</p> <br />
          </div>
          <div className='mb-5'>
            <p className='font-bold'>550</p>
          </div>
          <img src={UnoImg} alt='' />
        </div>
        <div>
          <h6 className='bg-[#ff681c] py-4 px-2 font-bold text-md'>
            Features of Flat Tops
          </h6>
          <div className='py-4'>
            <p className='text-md leading-5 font-semibold'>
              Strong - Made of special grade oil tempered steel with high
              fatigue properties. Long life - Extra hardened tips by hydrogen
              fuel and cryogenic quenching method. Smooth surface finish - Flat
              tops remains naturally clean for longer time. Consistent sliver
              quality - NRE% and imperfections. Available in progressive setting
              pattern STILO series and uniform setting pattern UNO series.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default StilloSeries
