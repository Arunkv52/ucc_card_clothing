import { FaChevronDown } from 'react-icons/fa'
import { useState } from 'react'

const WhyChoose = () => {
  const [open, setOpen] = useState(false)

  const pdfs = [
    {
      name: 'Rising Fillets',
      file: '/pdfs/product-catalog.pdf'
    },
    {
      name: 'NonWovens',
      file: '/pdfs/technical-data-sheet.pdf'
    },
    {
      name: 'OE Combing Roller Wire',
      file: '/pdfs/safety-information.pdf'
    }
  ]
  return (
    <>
      <div className='md:flex md:gap-20 md:px-5 md:py-50 py-20 px-3'>
        {/* Left */}
        <div className='md:w-1/2 w-full'>
          <h6 className='md:text-5xl text-4xl font-light text-white leading-tight'>
            Precision Card Clothing Engineered for
            <span className='text-white/50 font-semibold'> Modern Textile Performance</span>
          </h6>

          <div className='py-5'>
            <p className='text-white md:text-sm text-base leading-7'>
              UNISPIN Card Clothing delivers advanced carding solutions designed
              for cotton, nonwoven, and textile processing industries. With over
              two decades of manufacturing expertise.
            </p>
          </div>

          {/* Dropdown */}
          <div className='max-w-60'>
            <button
              onClick={() => setOpen(!open)}
              className='flex items-center justify-between w-full border-b border-white/20 md:py-4 py-3 text-white bg-red-600 px-5 cursor-pointer'
            >
              <span className='md:text-sm text-lg'>Downloads</span>

              <FaChevronDown
                className={`transition-transform duration-300 ${
                  open ? 'rotate-180' : ''
                }`}
              />
            </button>

            <div
              className={`overflow-hidden transition-all duration-500 text-sm ${
                open ? 'max-h-[500px] mt-2' : 'max-h-0'
              }`}
            >
              {pdfs.map((pdf, index) => (
                <a
                  key={index}
                  href={pdf.file}
                  download
                  className='block py-3 px-4 text-white/80 hover:text-white hover:bg-white/10 transition'
                >
                  {pdf.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right */}
        <div className='md:w-1/2 w-full mt-10 md:mt-0'></div>
      </div>
    </>
  )
}

export default WhyChoose
