import * as React from "react";
import './assets/stylesheets/App.css';
import { Pesquisa } from './components/pages/Pesquisa';
import { Resultado } from './components/pages/Resultado';
import { Detalhe } from './components/pages/Detalhe';
import { Routes, Route } from "react-router-dom";

export function App() {
  return (
    <div className="div">
      <div className="Container">
        <Routes>
          <Route path="/" element={ <Pesquisa /> } />
          <Route path="Resultado" element={ <Resultado />} />
          <Route path="Detalhe" element={ <Detalhe /> } />
        </Routes>
      </div>
    </div>
  )
}
