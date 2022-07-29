import React, { useState } from 'react'
import styled from 'styled-components';
import { useQuery, gql } from '@apollo/client';
import Tarjetas from './Tarjetas';


const Personajes = () => {
  const[paginado, setPaginado] = useState(0);
  
  const GET_CHARACTERS = gql `
  query {
    characters(page: ${paginado}) {
      info {
        count
      }
      results {
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

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <>
    <ListaPersonajes>
      {
        data.characters.results.map((dato)=>{
           return <Tarjetas 
          url={dato.image}
          />
        })
      }

    </ListaPersonajes>
    <button onClick={() => setPaginado(paginado + 1)}>Aumentar</button>
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
  background-color: #333333;
  min-height: 100%;
  width: 100%;
`
