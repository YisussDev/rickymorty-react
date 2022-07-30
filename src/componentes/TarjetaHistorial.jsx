import React from 'react'
import styled from 'styled-components'

const TarjetaHistorial = (props) => {
  return (
    <TarjetaH>
        <Imagen src={props.imagen}/>
        <Nombre>{props.nombre}</Nombre>
    </TarjetaH>
  )
}

export default TarjetaHistorial

const TarjetaH = styled.div`
display: flex;
flex-direction: row;
padding: 10px 20px;
align-items: center;
justify-content: space-around;
height:120px;
width:250px;
`
const Imagen = styled.img`
height:100px;
width:100px;
`
const Nombre = styled.h4`
height:30px;
width:100px;
`