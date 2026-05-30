import HeroSection from '@/components/about/HeroSection'
import OurHistory from '@/components/about/OurHistory'
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
          <OurHistory/>
        </section>
        <Footer />
      </main>
    </>
  )
}

export default About
