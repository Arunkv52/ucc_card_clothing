import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Prod2 from '../assets/products/oe-combing/prod-2.png'
import OeCombingTable from '@/components/oecombing/OeCombingTable'
import OeCombingTableTwo from '@/components/oecombing/OeCombingTableTwo'

const Oecomibing = () => {
  return (
    <>
      <div>
        <Navbar />
        <div className='md:px-8 px-5 md:mt-5 mt-30'>
          <h4 className='bg-gray-600 py-5 px-10 text-white text-2xl'>
            OE COMBING ROLLER & COMBING ROLLER WIRES
          </h4>
          <div className='grid grid-cols-2 gap-10 py-10 px-18'>
         
          <div>
            <img src={Prod2} alt='' />
          </div>
        </div>
        </div>
        <OeCombingTable />
        <OeCombingTableTwo />

        

        

        <Footer />
      </div>
    </>
  )
}

export default Oecomibing
