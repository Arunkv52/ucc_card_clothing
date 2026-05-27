const ExplainProd = () => {
  return (
    <>
      <div className=' md:grid md:grid-cols-2 grid grid-cols-1 gap-5 md:px-3 md:pb-20 pb-10'>
        <div className='second-type p-5 flex flex-col justify-between'>
          <h6 className='text-white text-4xl'>Industries</h6>

          <p className='text-white/80'>
            Serving spinning mills, nonwoven manufacturers, OE spinning units,
            and textile industries with precision-engineered card
            clothing solutions tailored for modern production demands.
          </p>
        </div>

        <div className='second-type-next p-5 flex flex-col justify-between'>
          <h6 className='text-white text-4xl'>Solutions</h6>

          <p className='text-white/80'>
            Innovative metallic wires, flat tops, fillets, and card conversion
            systems developed to improve fibre control, enhance yarn quality,
            and ensure long-lasting machine performance.
          </p>
        </div>
      </div>
    </>
  )
}

export default ExplainProd
