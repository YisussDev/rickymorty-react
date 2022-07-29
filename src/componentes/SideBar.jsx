import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const SideBar = () => {
  return (
    
      <BarraLateral
      initial={{x:'-100%'}}
      animate={{x:0}}
      transition={{duration:0.5, default: { ease: "linear" }}}
      >

      </BarraLateral>
  )
}

export default SideBar

const BarraLateral = styled(motion.div)`
position: fixed;
display: flex;
height: 100vh;
transform: translateX(-100%);
top: 0px;
left:0px;
width:400px;
background-color: white;
box-shadow: 1px 1px 1px 1px #AAAAAA;
`
