import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';


const Header = () => {
  const[clicked, setClicked] = useState();
  let navigate = useNavigate();
  const irInicio = () => {
    navigate('/')
  }
  const irPersonajes = () => {
    navigate('/personajes')
    setClicked(true);
  }

  return (
    <>
        <Barra>
            <Imagen>
                RICK Y MORTY
            </Imagen>
            
            <Redes>
                git linkedin
            </Redes>
        </Barra>
        <BarraDireccion>
            <BotonPersonaje onClick={irInicio}>Personaje Aleatorio</BotonPersonaje>
            <BotonPersonaje onClick={irPersonajes}>Personajes</BotonPersonaje>
        </BarraDireccion>
    </>
  )
}

export default Header


const Barra = styled.div`
  display: flex;
  width: 100%;
  position: fix;
  background-color: #3B82F6;
  height: 70px;
  justify-content: space-between;
  padding: 0px 20px;
`
const Redes = styled.div`
  display:flex;
  height: 70px;
  width: 200px;
  justify-content: center;
  align-items: center;
`
const Imagen = styled.div`
  display:flex;
  height: 70px;
  width: 200px;
  justify-content: center;
  align-items: center;
`
const BarraDireccion = styled.div`
display: flex;
width: 100%;
position: fix;
background-color: #FFFFFF;
height: 70px;
`
const BotonPersonaje = styled.div`
display: flex;
text-align: center;
align-items: center;
height: 100%;
padding:0px 20px;
&:hover{
    cursor: pointer;
    border-bottom: 3px solid #888888
}
  
`