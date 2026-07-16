import FilletsItemTable from '@/components/filletsaccessories/FilletsItemTable'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'



const Fillets = () => {
  return (
    <>
      <div>
        <Navbar />
        <div className='md:px-8 px-5 md:mt-5 mt-30'>
          <h4 className='bg-gray-600 py-5 px-10 text-white text-2xl'>
            Fillets & Accessories
          </h4>
        </div>
        < FilletsItemTable />

        <Footer />
      </div>
    </>
  )
}

export default Fillets
