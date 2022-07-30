import React, { useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import TarjetaHistorial from './TarjetaHistorial'

const SideBar = (props) => {
const datos = props.data;

  return (
    
      <BarraLateral
      initial={{x:'-100%'}}
      animate={{x:0}}
      transition={{duration:0.5, default: { ease: "linear" }}}
      >
        <Contenedor>
      {
        datos.map((data, ind, arr)=>{
          if(ind!==arr.length-1){
            return <TarjetaHistorial 
            key={data.image}
            nombre={data.name}
            imagen={data.image}
            />
          }
          else{
            return null;
          }
        })
      }
      </Contenedor>
      </BarraLateral>
  )
}

export default SideBar

const BarraLateral = styled(motion.div)`
position: fixed;
display: flex;
align-items: center;
flex-direction: column;
height: 100vh;
transform: translateX(-100%);
top: 0px;
left:0px;
width:400px;
padding: 50px 20px;
background-color: white;
box-shadow: 1px 1px 1px 1px #AAAAAA;
`
const Contenedor = styled(motion.div)`
display: flex;
align-items: center;
flex-direction: column;
height: 100%;
width:100%;
overflow: auto;
`
