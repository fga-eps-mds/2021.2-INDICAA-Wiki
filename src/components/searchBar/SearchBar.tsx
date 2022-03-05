import React from "react";
import './SearchBar.css';

export default (_ :any) => {
    return (
        <div className="searchInput">
            <span className="material-icons">
                search
            </span>
            <input type={"text"} placeholder={"Pesquise departamento/curso/disciplina"}/>
            <div className="button">
                <span className="material-icons-round">
                    arrow_forward
                </span>    
            </div>
        </div>
    );
}