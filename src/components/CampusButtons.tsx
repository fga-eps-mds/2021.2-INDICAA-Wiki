import React, { useState } from "react";
import './../assets/stylesheets/Bottom.css';

export function CampusButtons() {
    {/*Criação de um Array com os Campus*/}
    const campusList = ["DARCY", "GAMA", "CEILÂNDIA", "PLANALTINA"];

    {/*Uso do useState, para setar qual campus foi selecionado de acordo com a numeração*/}
    const [selected, setSelected] = useState(0)
     
    {/*Criação de uma função que a partir do click feito pelo usuário, é setado no selected qual id foi clicado*/}
    function handleClick(id: number) {
        if(selected==id)
            setSelected(0);
        else
            setSelected(id);
    }


    return (
        <div className="Bottom">
            <div className="container-buttons">
                {/*Criação de um map para economizar código, é passado os campus e um id para cada campus*/}
                {campusList.map((campus, index)=>(
                    <span key={index+1} className={selected == index+1 ? "button-campus selected" : "button-campus"} onClick={() => handleClick(index+1)} >{campus}</span> 
                ))}
            </div>
        </div>
    );
}