import MenuItems from '../data/TopMenu'
import SocialLinks from '../data/SocialLinks'
import Noise from './Noise'
import MotionAnim from './ShapeCards'
import AnimatedShape from './AnimatedShape'
import Logo from '../assets/logo/logo.png'


const Footer = () => {
  return (
    <>
      <footer
        className='bg-[#0b110f] md:py-0 py-2'
      >
        <Noise
          patternSize={160}
          patternScaleX={1.9}
          patternScaleY={1.9}
          patternRefreshInterval={2}
          patternAlpha={10}
        />
        <div className='footer-top md:flex'>
          <div className='md:w-[40%] w-full md:p-3 p-3'>
            <div className='section_one md:flex md:justify-start md:items-start md:gap-20 flex flex-row justify-start items-start gap-30 md:border-b md:border-black md:pb-15'>
              <div className=''>
                <p className='md:mb-3 mb-5 text-red-300 md:text-sm text-base'>Discover Quickly</p>

                {MenuItems.map(item => (
                  <>
                    <div>
                      <ul>
                        <li className='text-white md:leading-5 leading-6 font-light md:text-md text-base'>
                          {item.title}
                        </li>
                      </ul>
                    </div>
                  </>
                ))}
              </div>
              <div className='md:pt-0 pt-0'>
                <p className='md:mb-3 mb-5 text-red-300 md:text-sm text-base'>Social Links</p>
                {SocialLinks.map(item => (
                  <>
                    <div>
                      <ul>
                        <li className='text-white md:leading-5 leading-6 font-light md:text-md text-base'>
                          {item.title}
                        </li>
                      </ul>
                    </div>
                  </>
                ))}
              </div>
            </div>
            <div className='section_two md:pt-1 pt-5'>
              <p className='text-red-300 md:text-sm text-base py-3'>Get Started with Us</p>
              <h5 className='md:text-3xl text-2xl font-light text-white pb-3'>
                Let's solve your supply <br /> chain challenges together.
              </h5>
              <button className='text-white bg-[#ed3238] md:text-md text-base px-5 py-2 rounded-lg cursor-pointer'>
                Get Started
              </button>
              
            </div>
          </div>
          <div className='md:w-[30%] w-full md:border-l md:border-l-black p-3 flex flex-col justify-between md:pt-3 pt-5'>
            <div className='md:border-b md:border-black md:pb-12.5 pb-0'>
              <div>
                <p className='mb-3 text-red-300 md:text-sm text-base'>Our Solutions</p>
              </div>
              <div className='bg-[#ed3238] max-w-fit p-1 rounded-lg'>
                <MotionAnim />
              </div>
              <div className='py-4 md:text-sm text-base text-white'>
                <p>
                  Feel the performing products in Unimax cotton series, Unistar,
                  Unichrome, Unicarb, Stilo and Uno flat tops, Stilo stationary
                  flat tops and fillets
                </p>
              </div>
            </div>
            <div className='md:py-0 py-3 md:flex md:justify-start flex justify-center  md:bg-transparent bg-white  md:p-0 p-3'>
              <img src={Logo} alt="" className='md:w-20 w-30'/>
            </div>
          </div>
          <div className='md:w-[30%] w-full md:pl-0 pl-3 '>
            <AnimatedShape />

            <div className='md:pt-34 pt-0'>
                <p className='md:text-sm text-sm text-white/50 md:text-start text-center'>© 2026 Alrights reserved - Developed by Prism Adverto</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
