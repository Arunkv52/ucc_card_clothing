import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import CardClothingManMade from "@/components/recommendation/CardClothingManMade"
import CardClothingTable from "@/components/recommendation/CardClothingTable"

const Recommendation = () => {
  return (
    <>
        <main>
            <Navbar />
            <CardClothingTable />
            <CardClothingManMade />
            
            <Footer />
        </main>
    
    </>
  )
}

export default Recommendation