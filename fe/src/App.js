import React from 'react'
import { BrowserRouter as Router} from 'react-router-dom'
import AnimatedRoutes from './components/animated/AnimatedRoutes'
import MainLayout from './layout/MainLayout'
import AOS from 'aos'

const App = () => {

  AOS.init();
  return (
    
      <Router>
        <MainLayout>
      <AnimatedRoutes />
        </MainLayout>
      </Router>
    
  )
}

export default App
