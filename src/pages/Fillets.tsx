import FilletsItemTable from '@/components/filletsaccessories/FilletsItemTable'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'



const Fillets = () => {
  return (
    <>
      <div>
        <Navbar />
        <div className='px-8 mt-5 '>
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
