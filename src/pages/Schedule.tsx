import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import PremiumNotes from '@/components/schedule/PremiumNotes'
import ScheduleChart from '@/components/schedule/ScheduleChart'

const Schedule = () => {
  return (
    <>
      <main>
        <Navbar />
        <ScheduleChart />
        <PremiumNotes />
        <Footer />
      </main>
    </>
  )
}

export default Schedule
