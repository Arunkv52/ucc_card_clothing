const Abtproduct = () => {
  return (
    <>
      <div className='md:px-5 px-0 py-10'>
        <div className='top-abt pb-10 md:flex flex md:flex-row flex-col md:justify-between gap-5'>
          <div className="md:w-1/2 w-full">
            <h1 className='md:text-4xl text-5xl font-bold'>
              Welcome to <br /> Unispin Card Clothing India Pvt. Ltd.,
            </h1>
          </div>
          <div className="md:w-1/2 w-full">
            <p className="leading-5">
              Welcome to Unispin card clothing India pvt ltd. Meet the emerging
              Indian brand in card clothing. Feel the performing products in
              Unimax cotton series, Unistar Plus, Unistar, Unichrome, Unicarb,
              Stilo and Uno flat tops, Stilo stationary flat tops and fillets.
              Experience the accomplished sales and service team backed by
              regional selling agents. Products to cater medium, high & super
              high production cards, priced competitively. Backed by 24 years of
              manufacturing expertise.
            </p>
          </div>
        </div>
        <div className='abt-prod-all mt-5 md:flex flex md:flex-row flex-col justify-between items-start gap-10'>
          <div className='md:w-1/2 w-full relative overflow-hidden '>
            <div className='abt-left'>
              <p className='bg-white max-w-fit py-2 px-5 shadow-lg uppercase text-sm tracking-wide'>
                Flat Tops
              </p>
              {/* Dark Overlay */}
              <div className='absolute inset-0'></div>

              {/* Glass Lines */}
              <div className='absolute inset-0 pointer-events-none'>
                <div className='absolute top-[92%] right-0 w-full h-16 bg-gradient-to-r from-transparent to-pink-500/20 '></div>
              </div>
            </div>
          </div>
          <div className='md:w-1/2 w-full relative overflow-hidden '>
            <div className='abt-right'>
              <p className='bg-white max-w-fit py-2 px-5 shadow-lg uppercase text-sm tracking-wide'>
                Cylinder Wires
              </p>
              {/* Dark Overlay */}
              <div className='absolute inset-0'></div>

              {/* Glass Lines */}
              <div className='absolute inset-0 pointer-events-none'>
                <div className='absolute top-[92%] right-0 w-full h-16 bg-gradient-to-r from-transparent to-blue-500/80 '></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Abtproduct
