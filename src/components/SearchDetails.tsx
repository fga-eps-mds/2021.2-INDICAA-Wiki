import React from "react";
import '../assets/stylesheets/Content.css'
import DetalhePesquisa from '../assets/images/DetalhePesquisa.png'

export function SearchDetails(){
    return(
        <div className="container-graphics">
            <div className="inputResult">
                <span>Faculdade de Educação Física</span>    
            </div>
            <span>
                 <img src={DetalhePesquisa} className="details" alt="Detalhe Pesquisa"></img>    
            </span>
        </div>
    )
}