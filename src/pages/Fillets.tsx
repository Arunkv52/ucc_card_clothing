import FilletsTable from '@/components/filletsaccessories/filletsTable'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'



const StationeryFlat = () => {
  return (
    <>
      <div>
        <Navbar />
        <div className='px-8 mt-5 '>
          <h4 className='bg-gray-600 py-5 px-10 text-white text-2xl'>
            Fillets & Accessories
          </h4>
        </div>
        < FilletsTable />

        <Footer />
      </div>
    </>
  )
}

export default StationeryFlat
