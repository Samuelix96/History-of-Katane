import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home"
import AboutUs from "./pages/AboutUs"
import Travel from "./pages/Travel"
import Museum from "./pages/Museum"
import Review from "./pages/Review"
const App = () => {
  return (
    
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={ <Home />} />
          <Route  path='/aboutus' element={ <AboutUs />} />
          <Route  path='/museum' element={ <Museum />} />
          <Route  path='/travel' element={ <Travel />} />
          <Route  path='/review' element={ <Review />} />
        </Routes>
      </BrowserRouter>
    
  )
}

export default App
