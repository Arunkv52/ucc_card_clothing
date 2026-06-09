import Footer from '@/components/Footer'
import Header from '@/components/Header'
import WhyChoose from '@/components/home/Downloadbrochure'
import Abtproduct from '@/components/home/Abtproduct'
import Specialproducts from '@/components/home/Specialproducts'
import Productsticyscroll from '@/components/home/Productsticyscroll'
import Contactpreview from '@/components/home/Contactpreview'

const Home = () => {
  return (
    <>
      {/* Header */}
      <section>
        <Header />
      </section>

      {/* Intro */}
      <section className='md:py-10 py-10 px-5'>
        <Abtproduct />
      </section>

        {/* Intro */}
      
      
      {/* Download Brochure */}
      <section className='why-choose'>
        <WhyChoose />
      </section>

      {/* Product showcase */}
      <section className='our-products'>
        <Productsticyscroll />
      </section>


      {/* Contact */}
      <section className='home-contact'>
          <Contactpreview/>
      </section>

      {/* Footer */}
      <section>
        <Footer />
      </section>
    </>
  )
}

export default Home
