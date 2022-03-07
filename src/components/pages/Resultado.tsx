import React from "react";
import { Filter } from "../Filter";
import { Header } from "../Header";
import { GraphicsButtons } from "../GraphicsButtons";

export function Resultado(){
    return(
        <>
          <Header />
          <Filter />
          <GraphicsButtons />
        </>
    )
}