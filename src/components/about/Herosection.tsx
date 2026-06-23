import Navbar from '../Navbar'

const Herosection = () => {
  return (
    <>
      <div>
        <Navbar />
        <div className='w-full'>
          <div className='md:py-20 py-40 md:px-10 px-5 bg-[#e5e2dd]'>
            <h6 className='text-5xl font-normal py-5'>About us</h6>
            <p className='md:w-1/4 w-full text-base leading-4'>
              Serving customers across India and exporting to multiple
              international markets, we focus on quality manufacturing, reliable
              service, and cost-effective solutions to support improved
              productivity and long-term performance.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Herosection
