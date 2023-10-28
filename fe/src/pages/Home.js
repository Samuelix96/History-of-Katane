import React from 'react'
import MainLayout from '../layout/MainLayout'
import Main from "../components/main/Main"
import Carousels from "../components/carousel/Carousel"
const Home = () =>
{
  return (

    <MainLayout>
      <Carousels />
      <Main />
    </MainLayout>

  )
}

export default Home
