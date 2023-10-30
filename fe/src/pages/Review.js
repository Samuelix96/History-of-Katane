import React from 'react'
import { motion } from "framer-motion"

const Review = () =>
{
  return (
    <motion.div
      initial={ { width: 0 } }
      animate={ { width: "100%" } }
      exit={ { width: window.innerWidth, translate: { duration: 0.1}} }>
      <div>
        <h1>Review</h1>
      </div>
    </motion.div>
  )
}

export default Review
