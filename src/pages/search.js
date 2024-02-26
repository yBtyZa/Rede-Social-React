import React, { useState, useEffect } from 'react';
import "./searchCSS/search_1366px.css"
import "./searchCSS/search_1920px.css"
import  LogoA from '../assets/img/image-logo.png'
import './expancaoMenu'

export const Search = () => {

    const [currentDateTime, setCurrentDateTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentDateTime(new Date());
        }, 1000); // Atualiza a cada segundo
        return () => clearInterval(interval); // Limpa o intervalo ao desmontar o componente
    }, []);

    return (
        <>
            <form className="form">
                <a href="#"><img src={LogoA} alt="Logo" style={{width: '30px', height: '30px'}}></img></a>
                <input type="text" placeholder="Pesquisar"></input>
                <i className='bx bx-search-alt'></i>
            <p id="horaAtual">{currentDateTime.toLocaleString()}</p>
            </form>
            </>
    )
}