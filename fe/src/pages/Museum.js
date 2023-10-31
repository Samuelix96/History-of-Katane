import React from 'react'
import { motion } from "framer-motion"
import MainLayout from '../layout/MainLayout'

const Museum = () =>
{
  return (
    <MainLayout>
      <motion.div
        initial={ { width: 0 } }
        animate={ { width: "100%" } }
        exit={ { width: window.innerWidth, translate: { duration: 0.1 } } }
      >
        <div>

          <h1>Museum</h1>

        </div>
      </motion.div>
    </MainLayout>
  )
}

export default Museum
