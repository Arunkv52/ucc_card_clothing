import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import CardconversationTable from '@/components/cardconversation/CardconverationTable'
import Prod1 from '../assets/products/oe-combing/prod-1.png'
import Prod2 from '../assets/products/oe-combing/prod-2.png'
import OeCombingTable from '@/components/oecombing/OeCombingTable'
import OeCombingTableTwo from '@/components/oecombing/OeCombingTableTwo'

const Oecomibing = () => {
  return (
    <>
      <div>
        <Navbar />
        <div className='px-8 mt-5 '>
          <h4 className='bg-gray-600 py-5 px-10 text-white text-2xl'>
            OE COMBING ROLLER / OPENING ROLLER WIRES
          </h4>
        </div>
        <OeCombingTable />
        <OeCombingTableTwo />

        <div className='grid grid-cols-4 gap-10 py-10 px-18'>
          <div>
            <img src={Prod1} alt='' />
          </div>
          <div>
            <img src={Prod2} alt='' />
          </div>
        </div>

        

        <Footer />
      </div>
    </>
  )
}

export default Oecomibing
