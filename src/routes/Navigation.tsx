import About from '@/pages/About'
import Cardconversation from '@/pages/Cardconversation'
import Contact from '@/pages/Contact'
import Cottonseries from '@/pages/Cottonseries'
import Fillets from '@/pages/Fillets'
import Flattops from '@/pages/Flattops'
import Home from '@/pages/Home'
import Metalicwires from '@/pages/Metallicwires'
import MoteKnife from '@/pages/MoteKnife'
import Nonowen from '@/pages/Nonowen'
import Oecomibing from '@/pages/Oecomibing'
import RaisingFillets from '@/pages/RaisingFillets'
import Recommendation from '@/pages/Recommendation'
import Safety from '@/pages/Safety'
import Schedule from '@/pages/Schedule'
import Selleragents from '@/pages/Selleragents'
import StationeryFlat from '@/pages/StationeryFlat'
import { BrowserRouter, Routes, Route } from 'react-router'

const Navigation = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/schedule' element={<Schedule />} />
          <Route path='/recommendation' element={<Recommendation />} />
          <Route path='/safety' element={<Safety />} />
          <Route path='/sellers' element={<Selleragents />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/cotton-series-clothing' element={<Cottonseries />} />
          <Route path='/metallic-wires' element={<Metalicwires />} />
          <Route path='/flat-tops' element={<Flattops />} />
          <Route path='/cardconversation' element={<Cardconversation />} />
          <Route path='/oecombing' element={<Oecomibing />} />
          <Route path='/stationeryflattops' element={<StationeryFlat />} />
          <Route path='/fillets' element={<Fillets />} />
          <Route path='/raisingfillets' element={<RaisingFillets />} />
          <Route path='/nonowen' element={<Nonowen />} />
          <Route path='/moteknife' element={<MoteKnife/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default Navigation
