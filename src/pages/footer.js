import React, { useEffect } from 'react'
import {contrairMenu} from './expancaoMenu';

import './footerCSS/footer_1366px.css'
import './footerCSS/footer_1920px.css'

export const Footer = () => {

    useEffect(() => {
        const footer = document.getElementById('footer');

        // Adicione os ouvintes de evento dentro de useEffect
        footer.addEventListener('mouseleave', contrairMenu);

        // Remova os ouvintes de evento quando o componente for desmontado
        return () => {
            footer.removeEventListener('mouseleave', contrairMenu);
        };
    }, []);

    return(
        <footer id="footer">
        Criado por Guilherme Betsa - 2024
        <nav>
            <a href="https://www.instagram.com/_gbetsa/" target="_blank"><i class="bx bxl-instagram"></i> Instagram</a>
            <a href="https://github.com/yBtyZa" target="_blank"><i class="bx bxl-github"></i>GitHub</a>
            <a href="https://www.linkedin.com/in/gbetsa/" target="_blank"><i class="bx bxl-linkedin-square"></i>LinkedIn</a>
        </nav>
    </footer>
    )
}