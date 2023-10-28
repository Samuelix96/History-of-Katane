import React from 'react'
import Footer from '../components/footer/Footer'
import NavigationHome from '../components/navbar/NavigationHome'
const MainLayout = ({children}) => {
  return (
    <>
      <NavigationHome />
      {children}
      <Footer />
    </>
  )
}

export default MainLayout
