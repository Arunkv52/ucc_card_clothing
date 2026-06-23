import { GoDotFill } from "react-icons/go";


const notes = [
  'Initial grinding is recommended for Doffer Wire.',
  'Chart values are indicative guidelines only.',
  'Intervals may vary based on mill operating conditions.',
   'Viscose processing: up to 10% additional service life.',
  '100% Polyester / dyed synthetic: approximately 15% life reduction.',
  'SFL1 = Bottom Beam, SFL2 = Middle & Top Beam.',
]



const PremiumNotes = () => {
  return (
    <>
      <div className="md:px-50 px-5 py-20">
            <div className="note">
              <h3 className="bg-red-400 px-10 py-2 max-w-fit">Note</h3>
            </div>
            <div>
              {notes.map((item) => (
                <>
                    <div className="md:mt-3 mt-2">
                      <p className="flex justify-start items-center gap-2"><GoDotFill /> {item}</p>
                    </div>
                </>
              ))}
            </div>
      </div>
    
    </>
  )
}

export default PremiumNotes