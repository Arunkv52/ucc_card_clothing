import Aboutdata from '@/components/about/Aboutdata'
import Herosection from '@/components/about/Herosection'
import CommonLinkPage from '@/components/CommonLinkPage'
import Footer from '@/components/Footer'

const About = () => {
  return (
    <>
      <main>
        <Herosection/>
        <Aboutdata/>
        <CommonLinkPage/>
        <Footer />
      </main>
    </>
  )
}

export default About
