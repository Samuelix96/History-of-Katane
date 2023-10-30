import React, { useEffect } from 'react'
import Main from '../components/main/Main';
import Carousels from "../components/carousel/Carousel"
import { motion } from "framer-motion";
import Header from '../components/header/Header';
import Jumbotron from '../components/jumbotron/Jumbotron';




const Home = () =>
{



  return (
    <motion.div
      initial={ { width: 0 } }
      animate={ { width: "100%" } }
      exit={ { width: window.innerWidth, translate: { duration: 0.5 } } }

    >
      <div>
        <Jumbotron />
        <Carousels />
        <Header />
        <Main />
      </div>

    </motion.div>
  )
}

export default Home
