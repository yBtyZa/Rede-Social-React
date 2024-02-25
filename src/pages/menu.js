import React, { useEffect } from 'react'
import {expandirMenu, contrairMenu} from './expancaoMenu';

import "./menu.css"

export const Menu = () => {

    // Use o useEffect para chamar as funções no momento apropriado
    useEffect(() => {
        const header = document.getElementById('header');

        // Adicione os ouvintes de evento dentro de useEffect
        header.addEventListener('mouseover', expandirMenu);
        header.addEventListener('mouseleave', contrairMenu);

        // Remova os ouvintes de evento quando o componente for desmontado
        return () => {
            header.removeEventListener('mouseover', expandirMenu);
            header.removeEventListener('mouseleave', contrairMenu);
        };
    }, []);

    return (
        <header className="header" id="header">
            <nav>
                <ul>
                    <li>
                        <a href="#"><i className='bx bx-user'><span className="dplNone">Perfil</span></i></a>
                    </li>
                    <li>
                        <a href="#"><i className='bx bx-code-alt'><span className="dplNone">Feed</span></i></a>
                    </li>
                    <li>
                        <a href="#"><i className='bx bx-message-square-dots'><span
                                    className="dplNone">Mensagens</span></i></a>
                    </li>
                    <li>
                        <a href="#"><i className='bx bx-plus'><span className="dplNone">Criar</span></i></a>
                    </li>
                    <li>
                        <a href="#"><i className='bx bx-cog'><span
                                    className="dplNone">Configurações</span></i></a>
                    </li>
                    <li>
                        <a href="#"><i className='bx bx-exit'><span className="dplNone">Sair</span></i></a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}