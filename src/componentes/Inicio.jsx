import React, { useEffect, useState } from 'react';
import styled,{keyframes} from 'styled-components';
import { useQuery, gql } from '@apollo/client';
import PersonajeR from './PersonajeR';




const Inicio = (props) => {
  
  const [historial, setHistorial] = useState(false);
  const [historialPers, setHistorialPers] = useState([]);

  useEffect(() => {
    props.generarPersonaje(historialPers);
    props.abrirHistorial(historial);
  })
  
  const[aleatorio, setAleatorio] = useState(Math.floor(Math.random()*826));
  const generarPersonaje = ()=>{
  setHistorialPers([data.character, ...historialPers]);
  setAleatorio(Math.floor(Math.random()*826))
}
  const abrirHistorial = () => {
  setHistorial(!historial)
}
  const GET_CHARACTERS = gql `
  query {
    character(id:${aleatorio}) {
      name
      species
      id
      gender
      created
      image
    }
  }
  `
  const { loading, error, data } = useQuery(GET_CHARACTERS);  
  
   
    if (loading) return <Spinner> </Spinner>;
    if (error) return <p>Error :(</p>;

  return (
    <ContenedorRamdon>
      <BotonesRamdon>
          <BotonGenerar onClick={generarPersonaje}>Generar Personaje</BotonGenerar>
          <BotonGenerar onClick={abrirHistorial}>Historial</BotonGenerar>
      </BotonesRamdon>
    {<PersonajeR
    url = {data.character.image}
    name = {data.character.name}
    created = {data.character.created.toString()}
    species = {data.character.species}
    gender = {data.character.gender}
    />}
    </ContenedorRamdon>
  )
}

export default Inicio

const ContenedorRamdon = styled.div`
display:flex;
justify-content:center;
flex-direction:column;
align-items:center;
height:80%;
`
const BotonGenerar = styled.button`
padding: 10px 20px;
border-radius:10px;
border-color:  #3B82F6;
margin-right:10px;


&:hover{
  cursor:pointer;
  background-color: #3B82F6;
  color: #FFFFFF;
  border-color:  #3B82F6;
  border-radius:10px;
}
`
const spinEffect = keyframes`
0% {
  -webkit-transform: rotate(0deg);
  -ms-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
 }

 100% {
  -webkit-transform: rotate(360deg);
  -ms-transform: rotate(360deg);
  -o-transform: rotate(360deg);
  transform: rotate(360deg);
 }
`
const Spinner = styled.div`
  --clr: #3498db;
  width: 50px;
  height: 50px;
  position: absolute;
  top: calc((100vh - 50px )/2);
  left: calc((100vw - 50px )/2);
 
 
 &:before, &:after {
  content: "";
  position: absolute;
  top: -10px;
  left: -10px;
  width: 100%;
  height: 100%;
  border-radius: 100%;
  border: 10px solid transparent;
  border-top-color: var(--clr);
 }
 
 &:before {
  z-index: 100;
  animation: ${spinEffect} 1s infinite;
 }
 
 &:after {
  border: 10px solid #ccc;
 }
`
const BotonesRamdon = styled.div`
display: flex;
flex-direction:row;
`
