import React, { useEffect}  from 'react'
import {  Routes, Route, useLocation } from 'react-router-dom'
import Home from '../../pages/Home'
import Museum from '../../pages/Museum'
import Review from '../../pages/Review'
import Travel from '../../pages/Travel'
import { AnimatePresence} from "framer-motion"
import Contact from '../../pages/Contact'

const AnimatedRoutes = () => {

  const location = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [location.pathname]);

  return(

    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
          <Route exact path='/home' element={ <Home />} />
          <Route  path='/contact' element={ <Contact />} />
          <Route  path='/museum' element={ <Museum />} />
          <Route  path='/travel' element={ <Travel />} />
          <Route  path='/review' element={ <Review />} />
        </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes
