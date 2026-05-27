import { useState } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'

import Logo from '../assets/logo/Logo.jpeg'
import Button from '../components/Button'

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false)
  const [productOpen, setProductOpen] = useState(false)

  const MenuItems = [
    {
      title: 'Home',
      link: '/'
    },
    {
      title: 'About us',
      link: '/about'
    },
    {
      title: 'Products',
      submenu: [
        {
          title: 'Cotton Series Card Clothing',
          link: '/products/coffee-dryer'
        },
        {
          title: 'Metallic Wires',
          link: '/products/paddy-dryer'
        },
        {
          title: 'Flat Tops',
          link: '/products/spices-dryer'
        },
        {
          title: 'Stationary Flat Tops',
          link: '/products/coffee-dryer'
        },
        {
          title: 'Card Conversion C-System',
          link: '/products/paddy-dryer'
        },
        {
          title: 'Fillets &amp; Accessories',
          link: '/products/spices-dryer'
        },
        {
          title: 'OE Combing Roller',
          link: '/products/coffee-dryer'
        },
        {
          title: 'Raising Fillet',
          link: '/products/paddy-dryer'
        },
        {
          title: 'Nonwoven Metalic Wires',
          link: '/products/spices-dryer'
        }
      ]
    },
    {
      title: 'Services',
      link: '/services'
    },
    {
      title: 'Gallery',
      link: '/gallery'
    },

    {
      title: 'Contact',
      link: '/contact'
    }
  ]

  return (
    <>
      <nav className='w-full fixed top-0 left-0 z-50 px-4 md:px-3 py-4'>
        <div className='px-0 py-0 flex items-center justify-between'>
          <div className='md:flex justify-start items-center gap-10'>
            {/* Logo */}
            <div className=''>
              <img src={Logo} alt='logo' className='w-18' />
            </div>

            {/* Desktop Menu */}
            <div className='hidden md:flex justify-start gap-5 text-md font-medium bg-white/65 md:py-2 md:px-5'>
              {MenuItems.map(item => (
                <div key={item.title} className='relative group'>
                  {/* Normal Menu */}
                  {!item.submenu ? (
                    <a
                      href={item.link}
                      className='hover:text-red-600 transition-all duration-300'
                    >
                      {item.title}
                    </a>
                  ) : (
                    <>
                      {/* Products Menu */}
                      <div className='flex items-center gap-1 cursor-pointer hover:text-red-600 transition-all duration-300'>
                        <p>{item.title}</p>
                      </div>

                      {/* Dropdown */}
                      <div className='absolute top-10 left-0 bg-white shadow-xl rounded-xl min-w-[350px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 p-2'>
                        {item.submenu.map(sub => (
                          <a
                            key={sub.title}
                            href={sub.link}
                            className='block px-4 py-3 rounded-lg hover:bg-gray-100 transition-all duration-300'
                          >
                            {sub.title}
                          </a>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Desktop Button */}
          <div className='hidden lg:block'>
            <Button text='Get Started'/>
          </div>

          {/* Mobile Menu Button */}
          <button
            className='lg:hidden bg-white py-2 px-3 shadow-lg rounded-lg'
            onClick={() => setMobileMenu(!mobileMenu)}
          >
            {mobileMenu ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ${
            mobileMenu ? 'max-h-[700px] mt-4' : 'max-h-0'
          }`}
        >
          <div className='bg-[var(--light)] rounded-2xl shadow-lg p-5 flex flex-col gap-4'>
            {MenuItems.map(item => (
              <div key={item.title}>
                {!item.submenu ? (
                  <a
                    href={item.link}
                    className='block py-2 border-b border-gray-100'
                  >
                    {item.title}
                  </a>
                ) : (
                  <>
                    {/* Mobile Products */}
                    <button
                      onClick={() => setProductOpen(!productOpen)}
                      className='w-full flex items-center justify-between py-2 border-b border-gray-100'
                    >
                      <span>{item.title}</span>
                      <ChevronDown
                        size={18}
                        className={`transition-all duration-300 ${
                          productOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        productOpen ? 'max-h-60 mt-2' : 'max-h-0'
                      }`}
                    >
                      <div className='pl-4 flex flex-col gap-2'>
                        {item.submenu.map(sub => (
                          <a
                            key={sub.title}
                            href={sub.link}
                            className='py-2 text-sm text-gray-600'
                          >
                            {sub.title}
                          </a>
                        ))}
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}

            {/* Mobile Button */}
            <button className='bg-[var(--primary-color)] text-white px-5 py-3 rounded-xl mt-3'>
              Get Started
            </button>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
