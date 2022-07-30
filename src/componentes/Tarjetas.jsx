import React from 'react'
import styled from 'styled-components';


const Tarjetas = (props) => {
  return (
    <TarjetasPersonajes>
      <Imagen src={props.url} alt="" />
      <Info>
        <h2>{props.name}</h2>
        <h4>Especie:{props.species}</h4>
      </Info>
    </TarjetasPersonajes>
  )
}

export default Tarjetas

const TarjetasPersonajes = styled.div`
  border-radius: 10px;
  margin: 10px 0px ;
  height: 300px;
  width: 250px;
  transition:0.2s;
  &:hover{
    transform: scale(1.04);
  }
`
const Imagen = styled.img`
border-radius: 10px;
height:100%;
width: 100%;
object-fit: cover;
`
const Info = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
border-radius: 10px;
opacity: 0;
transform: translateY(-304px);
height: 300px;
width: 250px;
background-color: rgba(255,255,255,0.6);
transition: 0.2s;
&:hover{
  cursor: pointer;
  opacity: 1;
}
`