import CommonLinkPage from "@/components/CommonLinkPage"
import Footer from "@/components/Footer"
import Herosection from "@/components/safety/Herosection"
import ProductShowcase from "@/components/safety/ProductShowcase"

const Safety = () => {
  return (
    <>
       <main>
        <Herosection/>
        <ProductShowcase />
        <CommonLinkPage />
        <Footer />
       </main>
    </>
  )
}

export default Safety