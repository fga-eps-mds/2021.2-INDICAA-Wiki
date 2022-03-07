import React from "react";
import '../assets/stylesheets/Filter.css'

export function Filter(){
    const modalidadesList = ["presencial", "remoto", "semipresencial"];
    const disponibilidadeList = ["disponível", "indisponível"];

    return(
        <>
            <div className="filter">
                <h4><b>MODALIDADE</b></h4>
                {modalidadesList.map((modalidade, index)=>(
                    <label key={index}><input  type={"checkbox"} />{modalidade}</label>
                ))}
                <h4>DISPONIBILIDADE</h4>
                {disponibilidadeList.map((disponibilidade, index)=>(
                    <label key={index}><input  type={"checkbox"} />{disponibilidade}</label>
                ))}
            </div>
        </>
    )
}