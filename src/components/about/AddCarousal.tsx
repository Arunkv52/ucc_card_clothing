import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'
import YarnImg from '../../assets/home/roll.jpg'

const AddCarousal = () => {
  return (
    <>
      <div className='px-50'>
        <Carousel>
          <CarouselContent>
            <CarouselItem className='basis-1/3'>
              <div>
                <div>
                  <img
                    src={YarnImg}
                    alt=''
                    className='rounded-2xl w-full h-[450px] object-cover'
                  />
                </div>
                <div className='mt-8'>
                  <h5 className='text-black font-normal text-3xl'>2002</h5>
                  <h6 className='text-3xl font-bold text-black/50'>Where It All Begin</h6>
                  <p className='text-base py-5 leading-4'>
                    Found in the year 2002. Started by team of experts having
                    years of experience in card clothing manufacturing.
                  </p>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className='basis-1/3'>
              <div>
                <div>
                  <img src='' alt='' />
                </div>
                <div>
                  <h5>
                    Found in the year 2002. Started by team of experts having
                    years of experience in card clothing manufacturing.
                  </h5>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className='basis-1/3'>
              <div>
                <div>
                  <img src='' alt='' />
                </div>
                <div>
                  <h5>
                    Found in the year 2002. Started by team of experts having
                    years of experience in card clothing manufacturing.
                  </h5>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </>
  )
}

export default AddCarousal
