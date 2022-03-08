import React from "react";
import './../assets/stylesheets/SearchBar.css';
import { Link } from "react-router-dom"

export function SearchBar() {
    return (
        <div className="searchInput">
            <span className="material-icons" id="search">
                search
            </span>
            <input type={"text"} placeholder={"Pesquise departamento/curso/disciplina"}/>
            <Link to={"/Resultado"} style={{textDecoration: "none"}}>
                <div className="button">
                    <span className="material-icons-round">
                        arrow_forward
                    </span>
                </div>
            </Link>
        </div>
    );
}