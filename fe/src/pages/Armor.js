import React from 'react'
import MainLayout from '../layout/MainLayout'
import { motion } from "framer-motion";

const Armor = () => {

  return (
    <div> 
      <MainLayout>
        <motion.div
        initial={ { width: 0 } }
        animate={ { width: "100%" } }
        exit={ { width: 0 } }
      >
        <div>
          Armor
        </div>
      </motion.div>
      </MainLayout>
    </div>
    
  )
}

export default Armor
