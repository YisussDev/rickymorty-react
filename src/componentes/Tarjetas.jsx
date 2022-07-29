import React from 'react'
import styled from 'styled-components';


const Tarjetas = (props) => {
  const TarjetasPersonajes = styled.div`
    background: url(${props.url}) no-repeat center;
    background-size: auto 300px;
    border-radius: 10px;
    margin: 10px 0px ;
    height: 300px;
    width: 250px;
  `
  return (
    <TarjetasPersonajes>
    </TarjetasPersonajes>
  )
}

export default Tarjetas
