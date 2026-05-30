import AddCarousal from "./AddCarousal"

const OurHistory = () => {
  return (
    <>
      <div className=''>
        <div className='year-head flex justify-between items-start gap-50 px-50 py-20'>
          <div>
            <h2 className="text-5xl">Our Heritage.</h2>
          </div>
          <div>
           

            <p className="text-2xl">
              A legacy more than a century in the making continues here, rooted
              in craftsmanship and progress as Wolverine Worldwide grows as a
              global brand builder. The next chapter is the best one.
            </p>
          </div>
        </div>
        <div className="year-scroll">
          <div>
              <AddCarousal />
          </div>
        </div>
      </div>
    </>
  )
}

export default OurHistory
