import { motion, useScroll, useTransform, useMotionTemplate, MotionValue } from 'framer-motion'
import { FaArrowRightLong } from 'react-icons/fa6'
import { useRef } from 'react'
import Product1 from '../../assets/home/Products/prod-1A.png'
import Product2 from '../../assets/home/Products/prod-2A-.png'
import Product3 from '../../assets/home/Products/Prod-3A.png'
import Product4 from '../../assets/home/Products/Prod-4A-.png'
import Product5 from '../../assets/home/Products/prod-5A-.png'
import Product6 from '../../assets/home/Products/Prod-6A-.png'



const StickyScroll = () => {
  const sectionRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  })

  // ✅ Fix 1: use useMotionTemplate to interpolate MotionValue
  const gradientX: MotionValue<string> = useTransform(
    scrollYProgress,
    [0, 1],
    ['0%', '100%']
  )
  const backgroundImage = useMotionTemplate`radial-gradient(ellipse at ${gradientX} 50%, rgba(237,50,56,0.12) 0%, rgba(237,50,56,0.04) 40%, transparent 70%)`

  const products = [
    { title: 'Cotton Series Card Clothing', tag: 'Specially Products', image: Product1 },
    { title: 'Metalic',                    tag: 'Specially Products', image: Product2 },
    { title: 'Flat Tops',                  tag: 'Specially Products', image: Product3 },
    { title: 'Stationery Flat Tops',       tag: 'Specially Products', image: Product4 },
    { title: 'Fillets',                    tag: 'Specially Products', image: Product5 },
    { title: 'Card Conversion C-System',   tag: 'Specially Products', image: Product6 }
  ]

  return (
    // ✅ Fix 3: added relative + overflow-hidden
    <motion.section
      ref={sectionRef}
      style={{ backgroundImage, backgroundSize: '200% 200%' }}
      className='relative min-h-screen px-3 py-20 overflow-hidden'
    >
      {/* ✅ Fix 2: SoftAurora as absolute background layer */}
  

      {/* Content above aurora */}
      <div className='relative z-10 md:flex md:items-start md:justify-between md:gap-20'>

        {/* Sticky Left */}
        <motion.div
          className='md:sticky md:top-30 md:w-[30%] w-full py-10 md:py-0'
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <h1 className='md:text-base text-3xl font-semibold'>Our Products</h1>
        </motion.div>

        {/* Right Grid */}
        <div className='md:w-[70%] w-full'>
          <div className='grid md:grid-cols-2 grid-cols-1 gap-20'>

            {products.map((item, index) => (
              <motion.div
                key={index}
                className='card'
                custom={index}
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true, amount: 0.2 }}
              >
                <div className='bg-[#dbd7d3] rounded-lg border-2 border-white overflow-hidden'>
                  <motion.img
                    src={item.image}
                    alt={item.title}
                    className='w-full object-cover'
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                  />
                </div>
                <div className='py-3'>
                  <h6 className='font-semibold text-2xl'>{item.title}</h6>
                </div>
                <motion.p
                  className='text-xs border bg-black text-white border-black max-w-fit px-3 py-2 rounded-lg'
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.15 + 0.3, duration: 0.4 }}
                  viewport={{ once: true }}
                >
                  {item.tag}
                </motion.p>
              </motion.div>
            ))}

            {/* CTA */}
            <motion.div
              className='cursor-pointer inline-flex items-center'
              whileHover='hover'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              <h3 className='text-3xl font-semibold flex items-center gap-4 hover:text-[#ed3238] transition-colors'>
                See all Products
                <motion.span
                  variants={{ hover: { x: 10 } }}
                  transition={{ duration: 0.3 }}
                >
                  <FaArrowRightLong />
                </motion.span>
              </h3>
            </motion.div>

          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default StickyScroll