import React from "react";
import '../assets/stylesheets/Content.css';
import Graficos from '../assets/images/Graficos.png';

export function Graphics() {
    return(
        <div className="container-graphics">
            <div className="inputResult">
                <span>Faculdade de Educação Física</span>
            </div>
             <span>
                 <img src={Graficos} className="graphics" alt="Exemplo Gráficos"></img>    
            </span>
        </div>
    )
}