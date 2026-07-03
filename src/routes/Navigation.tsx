import About from '@/pages/About'
import Contact from '@/pages/Contact'
import Cottonseries from '@/pages/Cottonseries'
import Flattops from '@/pages/Flattops'
import Home from '@/pages/Home'
import Metalicwires from '@/pages/Metallicwires'
import Recommendation from '@/pages/Recommendation'
import Safety from '@/pages/Safety'
import Schedule from '@/pages/Schedule'
import Selleragents from '@/pages/Selleragents'
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
          <Route path='/metallic-wires' element={<Metalicwires/>} />
          <Route path='/flat-tops' element={<Flattops />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default Navigation
