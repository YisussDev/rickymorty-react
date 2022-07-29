import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';


const Header = () => {
  const[clicked, setClicked] = useState(true);
  const[clickedP, setClickedP] = useState(true);
  let navigate = useNavigate();
  const irInicio = () => {
    navigate('/')
    setClicked(false);
    setClickedP(true);
  }
  const irPersonajes = () => {
    navigate('/personajes')
    setClickedP(false);
    setClicked(true);
  }

  return (
    <>
        <Barra>
            <Imagen>
              <Logo src='https://www.pngmart.com/files/3/Rick-And-Morty-PNG-Pic.png'/>
                Rick Y Morty
            </Imagen>
            
            <Redes>
                git linkedin
            </Redes>
        </Barra>
        <BarraDireccion>
            {clicked?(<BotonPersonaje onClick={irInicio}>Personaje Aleatorio</BotonPersonaje>):
            (<BotonPersonajeC onClick={irInicio}>Personaje Aleatorio</BotonPersonajeC>)}
            {clickedP?(<BotonPersonaje onClick={irPersonajes}>Personajes</BotonPersonaje>):
            (<BotonPersonajeC onClick={irPersonajes}>Personajes</BotonPersonajeC>)}
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
  box-shadow: 1px 1px 2px 2px #AAAAAA;
  z-index:100;
`
const Redes = styled.div`
  display:flex;
  height: 70px;
  width: 200px;
  justify-content: center;
  align-items: center;
`
const Imagen = styled.div`
  font-weight: bold;  
  font-family: 'Russo One', sans-serif;
  font-size:20px;
  color:white;
  display:flex;
  height: 70px;
  width: 300px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`
const BarraDireccion = styled.div`
display: flex;
width: 100%;
position: fix;
background-color: #FFFFFF;
height: 70px;
box-shadow: 0px 1px 1px 1px #AAAAAA;
z-index: 10;
`
const BotonPersonaje = styled.button`
display: block;
text-align: center;
background-color: #FFFFFF;
align-items: center;
height: 100%;
padding:0px 20px;
border: none ;
&:hover{
    cursor: pointer;
    border-bottom: 3px solid #888888
}
  
`
const BotonPersonajeC = styled.div`
display: flex;
text-align: center;
align-items: center;
height: 100%;
padding:0px 20px;
border-bottom: 3px solid #555555;
&:hover{
    cursor: pointer;
    border-bottom: 3px solid #888888
}
  
`
const Logo = styled.img`
display: flex;
justify-content: center;
align-items: center;
height: 100%;
width:auto;
`