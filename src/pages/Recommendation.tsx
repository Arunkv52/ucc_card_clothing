import CommonLinkPage from "@/components/CommonLinkPage"
import Footer from "@/components/Footer"
import CardClothingManMade from "@/components/recommendation/CardClothingManMade"
import CardClothingTable from "@/components/recommendation/CardClothingTable"
import Herosection from "@/components/recommendation/Herosection"

const Recommendation = () => {
  return (
    <>
        <main>
            <Herosection/>
            <CardClothingTable />
            <CardClothingManMade />
            <CommonLinkPage />
            <Footer />
        </main>
    
    </>
  )
}

export default Recommendation