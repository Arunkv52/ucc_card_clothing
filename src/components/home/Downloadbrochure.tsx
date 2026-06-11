

const Downloadbrochure = () => {
  // const pdfs = [
  //   {
  //     name: 'Rising Fillets',
  //     file: '/pdfs/product-catalog.pdf'
  //   },
  //   {
  //     name: 'NonWovens',
  //     file: '/pdfs/technical-data-sheet.pdf'
  //   },
  //   {
  //     name: 'OE Combing Roller Wire',
  //     file: '/pdfs/safety-information.pdf'
  //   }
  // ]
  return (
    <>
      <div className='md:flex md:gap-20 md:px-10 md:py-30 py-20 px-3 download-bg relative overflow-hidden '>
        {/* Left */}
        <div className='md:w-1/2 w-full'>
          <h6 className='md:text-4xl text-2xl font-light text-white leading-tight border-l border-t border-white rounded-2xl md:max-w-fit max-w-fit py-5 px-5'>
            Precision Card Clothing Engineered for
            <span className='text-white font-semibold'>
              {' '}
              Modern Textile Performance
            </span>
          </h6>
        </div>
        {/* Right */}
        <div className='md:w-1/2 w-full relative'>
          <div className='md:absolute right-0 absolute md:top-35 top-80'>
            <div className='py-5'>
              <p className='text-white md:text-4xl text-3xl leading-8 font-bold'>
                Download  Brochure
              </p>
            </div>
            <div className='download-btn'>
              <ul className='text-white flex justify-between items-center gap-5 cursor-pointer'>
                 <li className='bg-white rounded-2xl text-black max-w-fit md:px-4 px-2 cursor-pointer py-2'>
                  Product Catalogue
                </li>
                <li className='bg-white rounded-2xl text-black max-w-fit md:px-4 px-2 cursor-pointer py-2'>
                  Non Woven Metalic Wires
                </li>
                <li className='bg-white rounded-2xl text-black max-w-fit md:px-4 px-2 cursor-pointer py-2'>
                  OE Combing Roller Wires
                </li>                
              </ul>
            </div>
          </div>
        </div>

       

        {/* Glass Lines */}
        <div className='absolute inset-0 pointer-events-none'>
          <div className='absolute top-[73%] right-0 w-[30%] h-20 bg-gradient-to-r from-transparent to-cyan-400/30 '></div>
          <div className='absolute top-[78%] right-0 w-[60%] h-20 bg-gradient-to-r from-transparent to-cyan-400/40 '></div>

          <div className='absolute top-[80%] right-0 w-[20%] h-20 bg-gradient-to-r from-transparent to-cyan-400/80 '></div>

          <div className='absolute top-[95%] right-0 w-[60%] h-16 bg-gradient-to-r from-transparent to-cyan-400/30 '></div>
        </div>
      </div>
    </>
  )
}

export default Downloadbrochure
