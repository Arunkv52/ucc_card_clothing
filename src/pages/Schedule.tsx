import CommonLinkPage from "@/components/CommonLinkPage"
import Footer from "@/components/Footer"
import Herosection from "@/components/schedule/Herosection"
import PremiumNotes from "@/components/schedule/PremiumNotes"
import ScheduleChart from "@/components/schedule/ScheduleChart"

const Schedule = () => {
  return (
    <>
        <main>
            <Herosection/>
            <ScheduleChart/>
            <PremiumNotes />
            <CommonLinkPage />
            <Footer />
        </main>
    </>
  )
}

export default Schedule