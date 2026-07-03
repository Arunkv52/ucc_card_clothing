import Footer from "@/components/Footer"
import Blowroom from "@/components/metalicwires/Blowroom"
import CylinderSeries from "@/components/metalicwires/CylinderSeries"
import DofferWires from "@/components/metalicwires/DofferWires"
import Navbar from "@/components/Navbar"

const Metalicwires = () => {
  return (
    <>
        <div>
            <Navbar />
            <div className="px-8 mt-5 ">
              <h4 className="bg-gray-600 py-5 px-10 text-white text-2xl">Metalic Wires</h4>
            </div>

            <CylinderSeries/>
            <DofferWires />
            <Blowroom />

            <Footer />
            
        </div>
    </>
  )
}

export default Metalicwires