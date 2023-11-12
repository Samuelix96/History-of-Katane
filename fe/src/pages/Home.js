
import Main from '../components/main/Main';
import Carousels from "../components/carousel/Carousel"
import { motion } from "framer-motion";
import Header from '../components/header/Header';
import Jumbotron from '../components/jumbotron/Jumbotron';
import MainLayout from '../layout/MainLayout';
import { useSession } from '../hooks/AuthSession';


const Home = () =>
{
  
  

  return (
    <>
      <MainLayout>
          <motion.div
        initial={ { width: 0 } }
        animate={ { width: "100%" } }
        exit={ { width: 0 } }
      >
          <Jumbotron />
          <Header />
          <Carousels />
          <Main />
          </motion.div> 
        </MainLayout>
    </>











  )
}

export default Home
