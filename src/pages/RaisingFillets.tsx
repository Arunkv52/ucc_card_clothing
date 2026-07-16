import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Image1 from "../assets/products/raising-fillets/Image-1.png"
import RaisingFilletsTable from '@/components/raisingfillets/RaisingFilletsTable'

const RaisingFillets = () => {
  return (
    <>
      <div>
        <Navbar />
        <div className='md:px-8 px-5 md:mt-5 mt-30'>
          <h4 className='bg-gray-600 py-5 px-10 text-white text-2xl'>
            RAISING FILLET
          </h4>
        </div>

        <div className='md:grid grid md:grid-cols-2 grid-cols-1 gap-10 py-10 md:px-18 px-5'>
          <div>
            <div>
              <div className='py-4'>
                <p>
                  Raising fillets continue to be increasingly important in
                  finishing. The foundation and steel wire used in manufacturing
                  of raising fillets are carefully selected from best in class
                  suppliers from Europe and the specially coated wires used in
                  manufacturing gives the best performance structure and life of
                  the fillet. The fillets are finally finished by perfect
                  grinding and processing thus giving fine and hardened points
                  to perform well on fabrics.
                </p>
              </div>
            </div>
          </div>
          <div>
            <img src={Image1} alt="" />
          </div>
        </div>
        <RaisingFilletsTable />
        <Footer />
      </div>
    </>
  )
}

export default RaisingFillets
