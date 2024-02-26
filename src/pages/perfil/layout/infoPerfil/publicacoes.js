import React, { useState, useEffect } from 'react';

import './publicacoesCSS/publicacoes_1366px.css'
import './publicacoesCSS/publicacoes_1920px.css'

import Img_1 from '../../../../assets/img/publicacoes/img_1.png'
import Img_2 from '../../../../assets/img/publicacoes/img_2.jpg'
import Img_3 from '../../../../assets/img/publicacoes/img_3.png'
import Img_4 from '../../../../assets/img/publicacoes/img_4.jpg'
import Img_5 from '../../../../assets/img/publicacoes/img_5.jpg'
import Img_6 from '../../../../assets/img/publicacoes/img_6.png'

export const Publicacoes = () => {

    const [publicacoes, setPublicacoes] = useState([
        { titulo: 'HTML', url: Img_1 },
        { titulo: 'CSS', url: Img_2 },
        { titulo: 'JavaScript', url: Img_3 },    
        { titulo: 'React', url: Img_4 },
        { titulo: 'Python', url: Img_5 },
        { titulo: 'PostgreSQL', url: Img_6 }
    ]);

    useEffect(() => {
        document.getElementById('numeroPublicacoes').innerHTML = `Publicações: <strong>${publicacoes.length}</strong>`;
    }, [publicacoes.length]);

    return (
        <section className="publicacoes" id="publicacoes">
                {publicacoes.map((publicacao, index) => (
                    <img key={index} src={publicacao.url} alt={`Publicação ${index + 1} - ${publicacao.titulo}`} />
                ))}
        </section>
    )
}