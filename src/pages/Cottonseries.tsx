import CylinderWires from "@/components/cottonseries/CylinderWires"
import DofferWires from "@/components/cottonseries/DofferWires"
import Features from "@/components/cottonseries/Features"
import StilloSeries from "@/components/cottonseries/StilloSeries"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"

const Cottonseries = () => {
  return (
    <>
        <div>
            <Navbar />
            <div className="px-8 mt-5 ">
              <h4 className="bg-gray-600 py-5 px-10 text-white text-2xl">Cotton Series and Clothing</h4>
            </div>
    
            <CylinderWires />
            <DofferWires />
            <Features/>
            <StilloSeries />
            <Footer />
        </div>
    </>
  )
}

export default Cottonseries