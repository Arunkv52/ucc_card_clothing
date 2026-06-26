import CommonLinkPage from "@/components/CommonLinkPage"
import Footer from "@/components/Footer"
import Dealers from "@/components/sellerslists/DealerList"
import Herosection from "@/components/sellerslists/Herosection"

const Selleragents = () => {
  return (
    <>
       <main>
        <Herosection/>
        <Dealers />
        <CommonLinkPage />
        <Footer />
       </main>
    </>
  )
}

export default Selleragents