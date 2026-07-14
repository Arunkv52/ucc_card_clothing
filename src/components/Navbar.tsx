import { useState } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'
import Logo from '../assets/logo/Logo.png'
import { Link } from 'react-router'

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false)
  const [productOpen, setProductOpen] = useState(false)


  const MenuItems = [
    { title: 'Home', link: '/' },
    { title: 'About us', link: '/about' },
    {
      title: 'Products',
      submenu: [
        {
          title: 'Cotton Series Card Clothing',
          link: '/cotton-series-clothing'
        },
        { title: 'Metallic Wires', link: '/metallic-wires'  },
        { title: 'Flat Tops', link: '/flat-tops' },
        { title: 'Stationary Flat Tops', link: '/stationeryflattops'},
        { title: 'Card Conversion C-System', link: '/cardconversation' },
        { title: 'Fillets & Accessories', link: '/fillets' },
        { title: 'OE Combing Roller', link: '/oecombing' },
        { title: 'Raising Fillet', link: '/raisingfillets' },
        { title: 'Nonwoven Metallic Wires', link: '/nonowen' }
      ]
    },
    {
      title: 'Services',
      submenu: [
        {
          title: 'Schedule Maintenance',
          link: '/schedule'
        },
        {
          title: 'Recommendation Chart',
          link: '/recommendation'
        },
        {
          title: 'Safety First',
          link: '/safety'
        }
      ]
    },
    { title: 'Selling Agents', link: '/sellers' }
  ]

  return (
    <>
      {/* Spacer so content doesn't hide behind fixed navbar */}
      <div className='h-[72px] hidden md:block' />

      <nav className='w-full fixed top-0 left-0 z-50 '>
        <div className='max-w-full mx-auto px-5 md:px-6 lg:px-8'>
          <div className='flex items-center justify-between h-[72px]'>
            {/* ── Logo ── */}
            <a href='/' className='flex-shrink-0'>
              {Logo ? (
                <img src={Logo} alt='logo' className='h-15 w-auto' />
              ) : (
                <span className='text-xl font-bold text-[#e67f33] tracking-tight'>
                  BRAND
                </span>
              )}
            </a>

            {/* ── Desktop Nav ── */}
            <div className='hidden lg:flex items-center gap-1'>
              {MenuItems.map(item => (
                <div key={item.title} className='relative group'>
                  {!item.submenu ? (
                    <Link
                      to={item.link}
                      className='px-3 py-2 rounded-md text-base font-medium text-black hover:text-[#e67f33] hover:bg-red-50 transition-all duration-200'
                    >
                      {item.title}
                    </Link>
                  ) : (
                    <>
                      {/* Products trigger */}
                      <button className='flex items-center gap-1 px-3 py-2 rounded-md text-base font-medium text-black hover:text-[#e67f33] hover:bg-red-50 transition-all duration-200 cursor-pointer'>
                        {item.title}
                        <ChevronDown
                          size={14}
                          className='mt-0.5 transition-transform duration-300 group-hover:rotate-180'
                        />
                      </button>

                      {/* Dropdown */}
                      <div className='absolute top-full left-1/2 -translate-x-1/2 mt-1 bg-white border border-gray-100 shadow-xl rounded-xl w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 origin-top scale-95 group-hover:scale-100 p-1.5 z-50'>
                        {item.submenu.map(sub => (
                          <Link
                            key={sub.title}
                            to={sub.link}
                            className='flex items-center px-3 py-2.5 rounded-lg text-sm text-gray-600 hover:text-[#e67f33] hover:bg-red-50 transition-all duration-150'
                          >
                            {sub.title}
                          </Link>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>

            {/* ── Mobile Hamburger ── */}
            <button
              className='lg:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 bg-white py-3 px-5 transition-colors duration-200'
              onClick={() => setMobileMenu(!mobileMenu)}
              aria-label='Toggle menu'
            >
              {mobileMenu ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* ── Mobile Menu ── */}
        <div
          className={`lg:hidden border-t border-gray-100 overflow-hidden transition-all duration-400 ease-in-out ${
            mobileMenu ? 'max-h-[85vh] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className='bg-white px-4 py-3 flex flex-col gap-1 overflow-y-auto max-h-[80vh]'>
            {MenuItems.map(item => (
              <div key={item.title}>
                {!item.submenu ? (
                  <Link
                    to={item.link}
                    onClick={() => setMobileMenu(false)}
                    className='flex items-center px-3 py-3 rounded-lg text-sm font-medium text-gray-700 hover:text-[#e67f33] hover:bg-red-50 transition-all duration-150'
                  >
                    {item.title}
                  </Link>
                ) : (
                  <div>
                    <button
                      onClick={() => setProductOpen(!productOpen)}
                      className='w-full flex items-center justify-between px-3 py-3 rounded-lg text-sm font-medium text-gray-700 hover:text-[#e67f33] hover:bg-red-50 transition-all duration-150'
                    >
                      <span>{item.title}</span>
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-300 ${
                          productOpen ? 'rotate-180 text-[#e67f33]' : ''
                        }`}
                      />
                    </button>

                    {/* Mobile Submenu */}
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        productOpen ? 'max-h-[500px] mt-1 mb-2' : 'max-h-0'
                      }`}
                    >
                      <div className='ml-3 pl-3 border-l-2 border-red-100 flex flex-col gap-0.5'>
                        {item.submenu.map(sub => (
                          <Link
                            key={sub.title}
                            to={sub.link}
                            onClick={() => setMobileMenu(false)}
                            className='px-3 py-2.5 rounded-lg text-sm text-gray-500 hover:text-[#e67f33] hover:bg-red-50 transition-all duration-150'
                          >
                            {sub.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* Mobile CTA */}
            <div className='pt-2 pb-1 border-t border-gray-100 mt-1'>
              <Link
               to='/contact'
                onClick={() => setMobileMenu(false)}
                className='flex items-center justify-center w-full px-4 py-3 bg-red-600 text-white text-sm font-semibold rounded-xl hover:bg-red-700 active:scale-95 transition-all duration-200'
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
