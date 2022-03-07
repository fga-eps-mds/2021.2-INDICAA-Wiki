import React from "react";
import { Filter } from "../Filter";
import { Header } from "../Header";
import { GraphicsButtons } from "../GraphicsButtons";
import { Graphics } from "../Graphics";
import '../../assets/stylesheets/PageResultado.css'

export function Resultado(){
    return(
        <>
          <Header />
          <div className="content">
            <Filter />
            <Graphics />
          </div>
          <GraphicsButtons link={"/"} buttonSelected={false}/>
        </>
    )
}