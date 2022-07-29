import React from 'react'
import styled from 'styled-components';


const PersonajeR = (props) => {
  return (
    <div>
        <Personaje>
            <Imagen src={props.url}/>
            <Datos>
                <Name>{props.name}</Name>
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
margin-top:30px;
border-radius:5px;
width:700px;
height:400px;
justify-content:center;
align-items:center;
background-color: white;
box-shadow: 2px 2px 1px 1px #AAAAAA;
`
const Imagen = styled.img`
display: flex;
justify-content:center;
align-items:center;
height:auto;
width:300px;
`
const Datos = styled.div`
display: flex;
flex-direction: column;
padding: 40px 20px;
align-items:center;
height:200px;
width:300px;
`
const Name = styled.span`
padding: 10px 20px;
text-align: center;
background-color:#3B82F6;
font-size: 20px;
font-weight: bold;
color: white;
border-radius:10px;
`