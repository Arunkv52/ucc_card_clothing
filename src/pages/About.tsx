import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

const About = () => {
  return (
    <>
      <main>
        <Navbar />
        <section>
          <HeroSection />
        </section>
        <section>
          <OurHistory />
        </section>
        <section>
          <Infrastructure />
        </section>
        <section>
          <Contactsection />
        </section>
        <Footer />
      </main>
    </>
  )
}

export default About
