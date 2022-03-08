import React from "react";
import { Filter } from "../Filter";
import { GraphicsButtons } from "../GraphicsButtons";
import { Header } from "../Header";
import { SearchDetails } from "../SearchDetails";

export function Detalhe(){
    return(
        <>
            <Header />
            <div className="content">
                <Filter />
                <SearchDetails />
            </div>
            <GraphicsButtons link={"/Resultado"} buttonSelected={true} />
        </>
    )
}