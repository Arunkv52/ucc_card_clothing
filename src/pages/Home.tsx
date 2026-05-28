import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { SmoothScrollHero } from '@/components/home/SmoothScrollHero'
import Button from '@/components/Button'
import StickyScroll from '@/components/home/StickyScroll'
import WhyChoose from '@/components/home/WhyChoose'
import ExplainProd from '@/components/home/ExplainProd'
import DealerList from '@/components/home/DealerList'

const Home = () => {
  return (
    <>
      {/* Header */}
      <section>
        <Header />
      </section>

      {/* Hero */}
      <section>
        <SmoothScrollHero />
      </section>

      {/* Intro */}
      <section className='md:py-30 py-10 px-3'>
        <div className='md:px-70 px-2'>
          <h1 className='md:text-4xl text-2xl font-semibold leading-tight'>
            Welcome to Unispin card clothing India pvt ltd. Meet the emerging
            Indian brand in card clothing. Feel the performing products in
            Unimax cotton series, Unistar Plus, Unistar, Unichrome, Unicarb,
            Stilo and Uno flat tops, Stilo stationary flat tops and fillets.
            Experience the accomplished sales and service team backed by
            regional selling agents. Products to cater medium, high & super high
            production cards, priced competitively. Backed by 20 years of
            manufacturing expertise.
          </h1>

          <div className='mt-10'>
            <Button text='Know about us' />
          </div>
        </div>
      </section>

      {/* Products */}
      <section className='min-h-screen px-3 py-20'>
        <StickyScroll />
      </section>

      {/* Why Choose */}
      <section className='why-choose'>
        <WhyChoose />
      </section>

      {/* Grid Section */}
      <section className='bg-black'>
        <ExplainProd />
      </section>

      {/* Dealers List */}
      <section>
        <DealerList />
      </section>

      {/* Contact */}
      <section className='py-30 px-3'>
        <div className='text-center text-black'>
          <h6 className='font-bold md:text-6xl text-3xl md:leading-15 leading-8'>
            Ready to Transform Your <br /> Textile Performance?
          </h6>

          <p className='py-8 text-base leading-4'>
            With decades of expertise in card clothing solutions, we understand
            the evolving <br /> demands of spinning mills and textile industries
            across the globe.
          </p>

          <Button text='Connect with us' />
        </div>
      </section>

      {/* Footer */}
      <section>
        <Footer />
      </section>
    </>
  )
}

export default Home
