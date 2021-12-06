import React, { useEffect, createContext, useState } from "react";
import { informacion } from "../App.js";

export const ContextoArticulos = createContext({});
export const ArticulosContextProvider = (props) => {

        const contextoArticuloObject = {
        articulos,
        
    };

    return (
        <ContextoArticulos.Provider value={contextoArticuloObject}>
            {children}
        </ContextoArticulos.Provider>
    );
}