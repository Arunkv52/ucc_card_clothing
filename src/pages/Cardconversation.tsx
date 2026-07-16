import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import CardConversationImg from '../assets/products/card-conversation/mote-knife-top.png'
import CardImg1 from '../assets/products/card-conversation/Untitled-2.png'

const Cardconversation = () => {
  return (
    <>
      <div>
        <Navbar />
        <div className='md:px-8 px-5 md:mt-5 mt-30'>
          <h4 className='bg-gray-600 py-5 px-10 text-white text-2xl'>
            Extended Stationery Flat System
          </h4>
        </div>

        <div className='md:grid grid md:grid-cols-2 grid-cols-1 gap-10 py-10 md:px-18 px-10'>
          <div>
            <div>
              <div className='py-4'>
                <div className='bg-black/20'>
                  <img src={CardImg1} alt='' />
                  <h1 className='text-center py-2 font-bold'>
                    Under Lickerin LMW LR/LC Cards
                  </h1>
                </div>
                <div className='py-10'>
                  <h5 className='text-[#ff681c] text-2xl'>
                    {' '}
                    Aluminium Combing segments for LR/LC cards
                  </h5>
                  <p className='mt-3'>
                    Replaceable strip type stationary flat combing segment
                    available for L * C * 1/2 C * 1/3 LC100, LC300, LC300A &
                    LC300A V3 cards
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div className='py-4'>
                <div className='bg-black/20'>
                  <img src={CardConversationImg} alt='' />
                </div>
                <div className='py-10'>
                  <h5 className='text-[#ff681c] text-2xl'>
                    Card conversion C- Systersm available for
                  </h5>
                  <ul className='mt-3 list-disc'>
                    <li>LC C1/1, C1/2, C1/3 & Textool TC 360</li>
                    <li>LMW LC300, LC300A, LC300A V3</li>
                    <li>Trumac DK 715, 740, 780 & 800</li>
                    <li>Trutzschler DK 760 & DK 803</li>
                    <li>Rieter C4 & C10</li>
                  </ul>
                 
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  )
}

export default Cardconversation
