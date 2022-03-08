import React, { useState } from "react";
import './../assets/stylesheets/Bottom.css';
import { Link } from "react-router-dom"

export function GraphicsButtons(props: any) {

    return (
        <div className="Bottom">
            <div className="container-buttons">
                <Link to={props.link} style={{textDecoration: "none"}}>
                    <span className="button-campus">VOLTAR</span>
                </Link>
                <Link to={"/Detalhe"} style={{textDecoration: "none"}}>
                    <span className={props.buttonSelected ? "button-campus selected" : "button-campus"}>DETALHAR</span>
                </Link>
            </div>
        </div>
    );
}