import React from 'react'
import { motion } from 'framer-motion'


const Contact = () => {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ width: 0 }}
    >
      <h1 className='text-center my-4'>If you want to contact me, these are my addresses</h1>
      
    </motion.div>
  );
}

export default Contact;
