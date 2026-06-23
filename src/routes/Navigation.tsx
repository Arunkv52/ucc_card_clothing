import About from '@/pages/About'
import Cottonseries from '@/pages/Cottonseries'
import Home from '@/pages/Home'
import Recommendation from '@/pages/Recommendation'
import Safety from '@/pages/Safety'
import Schedule from '@/pages/Schedule'
import { BrowserRouter, Routes, Route } from 'react-router'

const Navigation = () => {
  return (
    <>
   
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About/>} />
          <Route path='/cotton-series-clothing' element={<Cottonseries/>}/>
          <Route path='/schedule' element={<Schedule/>} />
          <Route path='/recommendation' element={<Recommendation />} />
          <Route path='/safety' element={<Safety />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default Navigation
