import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { SmoothScrollHero } from '@/components/SmoothScrollHero'
import ImageItem from '../assets/home/dummy-img.avif'
import Button from '@/components/Button'
import { FaArrowRightLong } from 'react-icons/fa6'
import { useState } from 'react'
import { FaChevronDown } from 'react-icons/fa'
import ImageOne from '../assets/home/Products/prod-1.png'


const Home = () => {
  const pdfs = [
    {
      name: 'Product Catalog',
      file: '/pdfs/product-catalog.pdf'
    },
    {
      name: 'Technical Data Sheet',
      file: '/pdfs/technical-data-sheet.pdf'
    },
    {
      name: 'Safety Information',
      file: '/pdfs/safety-information.pdf'
    }
  ]

  const [open, setOpen] = useState(false)

  const sectionRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  })

  const bgColor = useTransform(
    scrollYProgress,
    [0, 1],
    ['rgba(0,0,0,0)', 'rgba(0,0,0,1)']
  )
  return (
    <>
      <section>
        <Header />
      </section>

      <section>
        <SmoothScrollHero />
      </section>

      <section className='md:py-50 py-20 px-3'>
        <div className='md:px-70 px-2'>
          <h1 className='md:text-5xl text-3xl font-semibold'>
            Vast is developing next-generation space stations and space
            infrastructure using an incremental, hardware-rich and low-cost
            approach.
          </h1>
          <div className='mt-10'>
            <Button text='Know about us' />
          </div>
        </div>
      </section>

      {/* Products overview */}
      <section className='min-h-screen px-3 py-20'>
        <div className='md:flex md:items-start md:justify-between md:gap-20'>
          {/* Left Sticky */}
          <div className='md:sticky top-30 md:w-[30%] w-full md:py-0 py-10'>
            <h1 className='md:text-2xl text-2xl font-light'>Our Products</h1>
          </div>

          {/* Right Content */}
          <div className='md:w-[70%] w-full space-y-32'>
            <div className='md:grid md:grid-cols-2 md:gap-20 grid grid-cols-1 gap-20'>
              <div className='card'>
                <div className='bg-[#dbd7d3] hover:bg-white transition-all rounded-lg border-2 border-white'>
                  <img src={ImageItem} alt='' />
                </div>
                <div className='py-3'>
                  <h6 className='font-semibold text-2xl'>
                    Cotton Series Card Clothing
                  </h6>
                </div>
                <div>
                  <p className='text-xs border bg-black text-white border-black max-w-fit px-3 py-2 rounded-lg'>
                    Specially Products
                  </p>
                </div>
              </div>
              <div className='card'>
                <div className='bg-[#dbd7d3] hover:bg-white transition-all rounded-lg border-2 border-white'>
                  <img src={ImageItem} alt='' />
                </div>
                <div className='py-3'>
                  <h6 className='font-semibold text-2xl'>
                    Cotton Series Card Clothing
                  </h6>
                </div>
                <div>
                  <p className='text-xs border bg-black text-white border-black max-w-fit px-3 py-2 rounded-lg'>
                    Specially Products
                  </p>
                </div>
              </div>
              <div className='card'>
                <div className='bg-[#dbd7d3] hover:bg-white transition-all rounded-lg border-2 border-white'>
                  <img src={ImageItem} alt='' />
                </div>
                <div className='py-3'>
                  <h6 className='font-semibold text-2xl'>
                    Cotton Series Card Clothing
                  </h6>
                </div>
                <div>
                  <p className='text-xs border bg-black text-white border-black max-w-fit px-3 py-2 rounded-lg'>
                    Specially Products
                  </p>
                </div>
              </div>
              <div className='card'>
                <div className='bg-[#dbd7d3] hover:bg-white transition-all rounded-lg border-2 border-white'>
                  <img src={ImageItem} alt='' />
                </div>
                <div className='py-3'>
                  <h6 className='font-semibold text-2xl'>
                    Cotton Series Card Clothing
                  </h6>
                </div>
                <div>
                  <p className='text-xs border bg-black text-white border-black max-w-fit px-3 py-2 rounded-lg'>
                    Specially Products
                  </p>
                </div>
              </div>
              <div className='card'>
                <div className='bg-[#dbd7d3] hover:bg-white transition-all rounded-lg border-2 border-white'>
                  <img src={ImageItem} alt='' />
                </div>
                <div className='py-3'>
                  <h6 className='font-semibold text-2xl'>
                    Cotton Series Card Clothing
                  </h6>
                </div>
                <div>
                  <p className='text-xs border bg-black text-white border-black max-w-fit px-3 py-2 rounded-lg'>
                    Specially Products
                  </p>
                </div>
              </div>
              <div className='card'>
                <div className='bg-[#dbd7d3] hover:bg-white transition-all rounded-lg border-2 border-white'>
                  <img src={ImageItem} alt='' />
                </div>
                <div className='py-3'>
                  <h6 className='font-semibold text-2xl'>
                    Cotton Series Card Clothing
                  </h6>
                </div>
                <div>
                  <p className='text-xs border bg-black text-white border-black max-w-fit px-3 py-2 rounded-lg'>
                    Specially Products
                  </p>
                </div>
              </div>

              {/* Product Link */}
              <motion.div
                className='cursor-pointer inline-block'
                whileHover='hover'
              >
                <h3 className='text-3xl font-semibold flex items-center gap-4 hover:text-[#ed3238]'>
                  See all Products
                  <motion.span
                    variants={{
                      hover: {
                        x: 10
                      }
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <FaArrowRightLong />
                  </motion.span>
                </h3>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Wordld Wide impact */}
      {/* <motion.section
        initial={{ backgroundColor: 'transparent' }}
        whileInView={{ backgroundColor: '#f1f1f1' }}
        transition={{ duration: 7, ease: 'easeInOut' }}
        viewport={{ once: false, amount: 0.7 }}
        className='transition-colors'
      >
        <div className='md:px-50 py-20 flex justify-between items-center gap-10 min-h-screen '>
          <div className='w-1/2'>
            <h2 className='text-7xl font-semibold'>
              Worldwide <span className='text-black/50'>Impact</span>
            </h2>

            <p className='text-base py-6'>
              Present across 3 continents,
              <br />
              in 15+ countries
            </p>

            <Button />
          </div>

          <div className='w-1/2'>
            <img src={WorldMap} alt='' />
          </div>
        </div>
      </motion.section> */}

      {/* Why Choose us */}
      <section className=' md:px-0'>
        <div className='why-choose md:flex md:flex-row md:justify-start md:items-start md:gap-20 md:px-5 md:py-50 py-20 px-3'>
          <div className='md:w-1/2 w-full'>
            <div className='flex flex-col '>
              <div>
                <h6 className='md:text-5xl text-4xl font-light text-white'>
                  Q-Industrial specializes in coatings{' '}
                  <span className='text-white/50'>
                    {' '}
                    for the metal and plastic in the general industrial
                    segments.
                  </span>
                </h6>
              </div>
              <div className='py-10'>
                <p className='text-white text-sm'>
                  The Q-Industrial products are represented in the international{' '}
                  <br />
                  distribution network Colorfactory and Colormarket, customer
                  <br />
                  centers for professional coating materials.
                </p>
              </div>

              {/* Dropdown */}
              <div className='max-w-60'>
                <button
                  onClick={() => setOpen(!open)}
                  className='flex items-center justify-between w-full border-b border-white/20 py-4 text-white bg-red-600 px-5 cursor-pointer'
                >
                  <span className='text-sm'>Downloads</span>

                  <FaChevronDown
                    className={`transition-transform duration-300 ${
                      open ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-500 text-sm ${
                    open ? 'max-h-200 mt-4' : 'max-h-0'
                  }`}
                >
                  {pdfs.map((pdf, index) => (
                    <a
                      key={index}
                      href={pdf.file}
                      download
                      className='block py-3 px-4 text-white/80 hover:text-white hover:bg-white/10 transition cursor-pointer'
                    >
                      {pdf.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className='w-1/2'></div>
        </div>
      </section>

      {/* Section grid 2 */}
      <section className='bg-black'>
        <div className='division-grid md:grid md:grid-cols-2 md:gap-3 grid grid-cols-1 gap-10 md:px-3 md:pb-20'>
          <div className='second-type p-5 flex flex-col justify-between'>
            <h6 className='text-white text-4xl'>Industries</h6>
            <p className='text-white'>
              We have practical experience in every industry, so we know their
              specific needs and unique challenges. Find out more about our
              suggested solutions here.
            </p>
          </div>
          <div className='second-type-next p-5 flex flex-col justify-between'>
            <h6 className='text-white text-4xl'>Industries</h6>
            <p className='text-white'>
              We have practical experience in every industry, so we know their
              specific needs and unique challenges. Find out more about our
              suggested solutions here.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className='py-30'>
        <div className='text-center text-black'>
          <div className=''>
            <h6 className='font-bold text-6xl'>
              Interested in <br /> learning more?
            </h6>
            <p className='py-8 text-base'>
              We have practical experience in every industry, so we know their{' '}
              <br />
              specific needs and unique challenges. <br /> Find out more about
              our suggested solutions here.
            </p>
          </div>
          <div>
            <Button text='Connect with us' />
          </div>
        </div>
      </section>

      <section>
        <Footer />
      </section>
    </>
  )
}

export default Home
