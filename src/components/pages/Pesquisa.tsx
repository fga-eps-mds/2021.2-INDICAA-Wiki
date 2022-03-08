import React from "react";
import {Header} from '../Header';
import {CampusButtons} from '../CampusButtons';
import { SearchBar } from "../SearchBar";


export function Pesquisa() {
    return(
        <>
            <Header />
            <SearchBar />
            <CampusButtons />
        </>
        )
}