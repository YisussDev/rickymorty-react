import React from 'react'
import styled from 'styled-components';


const PersonajeR = (props) => {
  return (
    <div>
        <Personaje>
            <Imagen src={props.url}/>
            <Datos>
                <h1>{props.name}</h1>
                <h2>{props.gender}</h2>
                <h2>{props.species}</h2>
                <h3>{props.created}</h3>
            </Datos>
        </Personaje>
    </div>
  )
}

export default PersonajeR

const Personaje = styled.div`
display:flex;
flex-direction:row;
width:600px;
height:400px;
justify-content:center;
align-items:center;
`
const Imagen = styled.img`
display: flex;
justify-content:center;
align-items:center;
height:200px;
width:300px;
`
const Datos = styled.div`
display: flex;
flex-direction: column;
padding: 40px 0px;
align-items:center;
height:200px;
width:300px;
`