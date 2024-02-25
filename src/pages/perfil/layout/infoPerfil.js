import React, { useEffect } from 'react'
import {contrairMenu} from '../../expancaoMenu';

import { Search } from "../../search"

import "./infoPerfil.css"
import { DadosPessoais } from "./infoPerfil/dadosPessoais"
import { DadosPessoaisDois } from "./infoPerfil/dadosPessoaisDois"

export const InfoPerfil = () => {

    useEffect(() => {
        const main = document.getElementById('main');

        // Adicione os ouvintes de evento dentro de useEffect
        main.addEventListener('mouseleave', contrairMenu);

        // Remova os ouvintes de evento quando o componente for desmontado
        return () => {
            main.removeEventListener('mouseleave', contrairMenu);
        };
    }, []);

    return (
        <>
        <main id='main'>
            <Search/>
            <DadosPessoais/>
            <DadosPessoaisDois/>
        </main>
        </>
    )
}