import Cottonseries from '@/pages/Cottonseries'
import Home from '@/pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router'

const Navigation = () => {
  return (
    <>
   
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cotton-series-clothing' element={<Cottonseries/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default Navigation
