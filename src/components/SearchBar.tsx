import React from "react";
import './../assets/stylesheets/SearchBar.css';

export function SearchBar() {
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