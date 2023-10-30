import React from 'react'
import Footer from '../components/footer/Footer'
import Hero from '../components/navbar/Hero'
import NavigationHome from '../components/navbar/NavigationHome'
const MainLayout = ({children}) => {
  return (
    <>
    <Hero />
      <NavigationHome />
      {children}
      <Footer />
    </>
  )
}

export default MainLayout
