import React from 'react'
import Header from './componentes/Header'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Inicio from './componentes/Inicio'
import Personajes from './componentes/Personajes'

const App = () => {
  return (
    <div className='App'>
        <BrowserRouter>
          <Header />
            <Routes>
                <Route Exact path="/" element={<Inicio />} />
                <Route path="/personajes" element={<Personajes />} />
            </Routes>
        </BrowserRouter>

    </div>
  )
}

export default App