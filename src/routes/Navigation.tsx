import About from '@/pages/About'
import Home from '@/pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router'

const Navigation = () => {
  return (
    <>
   
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default Navigation
