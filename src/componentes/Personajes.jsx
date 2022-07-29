import React, { useState } from 'react'
import styled, {keyframes} from 'styled-components';
import { useQuery, gql } from '@apollo/client';
import Tarjetas from './Tarjetas';


const Personajes = () => {
  const[pag, setPag] = useState(1);

  
  const GET_CHARACTERS = gql `
  query {
    characters(page: ${pag}) {
      info {
        count
      }
      results {
        id
        name
        species
        image
      }
    }
    location(id: 1) {
      id
    }
  }
  `
  const { loading, error, data } = useQuery(GET_CHARACTERS);
  if (loading) return <Spinner></Spinner>;
  if (error) return <p>Error :(</p>;
  
  let paginasActuales = parseInt(data.characters.info.count / 20) + 1;

  const paginaSiguiente = () => {
    if(pag<paginasActuales){
      setPag(pag + 1)
    }
  }

  const paginaAnterior = () => {
    if(pag>1){
      setPag(pag - 1)
    }
  }


  return (
    <>
    <ListaPersonajes>
      <Paginado>
          <BotonPaginado onClick={paginaAnterior}>-</BotonPaginado>
          <Paginas> {pag} de {paginasActuales}</Paginas>
          <BotonPaginado onClick={paginaSiguiente}>+</BotonPaginado>
      </Paginado>
      {
        data.characters.results.map((dato)=>{
           return <Tarjetas 
          url={dato.image}
          name={dato.name}
          key={dato.id}
          species = {dato.species}
          />
        })
      }

    </ListaPersonajes>
    </>
  )
}

export default Personajes


const ListaPersonajes = styled.div`
  padding: 20px;
  display:flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  min-height: 100vh;
  width: 100%;
`
const Paginado = styled.div`
  display: flex;
  justify-content:center;
  width: 100%;
  height: 50px;
`
const BotonPaginado = styled.button`
display: flex;
color:#3B82F6;  
font-size: 20px;
justify-content: center;
align-items: center;
  background-color: #FFFFFF;
  border: 2px solid #3B82F6;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  transition: 0.2s;
  &:hover{
    cursor: pointer;
    transform: scale(1.1);
  }
`
const Paginas = styled.div`
  display: flex;
  justify-content:center;
  align-items:center;
  color: #3B82F6;
  width: 200px;
  height: 50px;
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
