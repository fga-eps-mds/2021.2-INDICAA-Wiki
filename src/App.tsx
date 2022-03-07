import * as React from "react";
import './assets/stylesheets/App.css';
import { Pesquisa, Resultado, Detalhe } from './components/pages/PagesFile';
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
