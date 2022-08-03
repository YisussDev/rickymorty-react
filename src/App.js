import React, { useState } from 'react'
import Header from './componentes/Header'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Inicio from './componentes/Inicio';
import Personajes from './componentes/Personajes';
import SideBar from './componentes/SideBar';

const App = () => {
  const[historial, setHistorial] = useState([]);
  const[historialAbierto, setHistorialAbierto] = useState(false);

  const generarPersonaje = (historialHijo) => {
    setHistorial(historialHijo);
  }

  const abrirHistorial = recibeH => {
    setHistorialAbierto(recibeH);
  }

  return (
    <div className='App'>
        <BrowserRouter>
          <Header />
          {historialAbierto?(<SideBar data={historial}/>):null}
            <Routes>
                <Route Exact path="/" element={<Inicio generarPersonaje ={generarPersonaje} abrirHistorial = {abrirHistorial}/>} />
                <Route path="/personajes" element={<Personajes />} />
            </Routes>
        </BrowserRouter>

    </div>
  )
}

export default App