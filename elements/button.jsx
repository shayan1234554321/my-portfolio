import React from 'react'
import "./button.css"
import { motion } from 'framer-motion'
import { initial, whileInView } from '@/utility/constants'

const CustomButton = ({children, ...rest}) => {
  return (
    <motion.div initial={initial} whileInView={whileInView} {...rest} className="customButton" >{children}</motion.div>
  )
}

export default CustomButton