import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import CardConversationImg from '../assets/products/card-conversation/mote-kinfe.png'
import CardconversationTable from '@/components/cardconversation/CardconverationTable'

const Cardconversation = () => {
  return (
    <>
      <div>
        <Navbar />
        <div className='px-8 mt-5 '>
          <h4 className='bg-gray-600 py-5 px-10 text-white text-2xl'>
            Card Conversion C-System
          </h4>
        </div>

        <div className='grid grid-cols-2 gap-10 py-10 px-18'>
          <div>
            <div>
              <div className='py-4'>
                <h6 className='bg-[#ff681c] py-4 px-2 font-bold text-md'>
                  MOTE KNIFE
                </h6>
                <p className='mt-3'>
                  Under lickerin, above lickerin and above doffer C system mote
                  knives available for different make of cards. Made of high
                  grade steel with accuracy to endure longer.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className='grid grid-cols-1 gap-10'>
                <img src={CardConversationImg} alt="" />
            </div>
          </div>
        </div>

        <CardconversationTable />

        <Footer />
      </div>
    </>
  )
}

export default Cardconversation
