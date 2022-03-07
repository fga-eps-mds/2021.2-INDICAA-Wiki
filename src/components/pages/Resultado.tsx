import React from "react";
import { Graphics } from "../Graphics";
import { Header } from "../Header";
import { GraphicsButtons } from "../GraphicsButtons";

export function Resultado(){
    return(
        <>
          <Header />
          <Graphics />
          <GraphicsButtons />
        </>
    )
}