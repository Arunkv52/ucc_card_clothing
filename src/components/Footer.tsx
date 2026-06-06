import SocialLinks from '@/data/SocialLinks'
import Logo from '@/assets/logo/Logo.png'

const Footer = () => {
  return (
    <>
      <footer className='bg-black md:pb-2 pb-8 md:px-10 px-5 md:text-sm text-base'>
        <div className='py-20'>
          <img src={Logo} alt='' className='w-20' />
        </div>
        <div className='md:flex flex md:flex-row flex-col justify-between md:items-end items-start gap-5 text-white border-t border-white pt-3'>
          <div className='md:flex md:flex-row flex flex-col md:justify-start justify-start md:items-end items-start gap-30'>
            <h6>
              Experience the accomplished sales and service <br /> team backed by
              regional selling agents
            </h6>
             <div className=''>
            <ul className='flex justify-start items-center gap-4'>
                {SocialLinks.map(item => (
                  <>
                    <li>{item.title}</li>
                  </>
                ))}
            </ul>
          </div>
          </div>
         
          <div className=''>
            <h6>
              Developed by Prism Adverto Pvt Ltd
            </h6>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
