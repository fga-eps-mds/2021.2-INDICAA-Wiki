import React, { useState } from "react";
import '../assets/stylesheets/Graphics.css'

export function Graphics(){
    const modalidadesList = ["presencial", "remoto", "semipresencial"];
    const disponibilidadeList = ["disponível", "indisponível"];

    return(
        <>
            <div className="filter">
                <h4>MODALIDADE</h4>
                {modalidadesList.map((modalidade)=>(
                    <>
                    <label><input type={"checkbox"} />{modalidade}</label>
                    </> 
                ))}
                <h4>DISPONIBILIDADE</h4>
                {disponibilidadeList.map((disponibilidade)=>(
                    <>
                    <label> <input type={"checkbox"} />{disponibilidade}</label>
                    </> 
                ))}
            </div>
            <div className="graphics">
                
            </div>
        </>
    )
}