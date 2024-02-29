import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';

import './publicacoesCSS/publicacoes_1366px.css';
import './publicacoesCSS/publicacoes_1920px.css';

import { descricao_img } from './descriçãoPublicações';

import Img_1 from '../../../../assets/img/publicacoes/img_1.png';
import Img_2 from '../../../../assets/img/publicacoes/img_2.jpg';
import Img_3 from '../../../../assets/img/publicacoes/img_3.png';
import Img_4 from '../../../../assets/img/publicacoes/img_4.jpg';
import Img_5 from '../../../../assets/img/publicacoes/img_5.jpg';
import Img_6 from '../../../../assets/img/publicacoes/img_6.png';

export const Publicacoes = () => {
    const [publicacoes] = useState([
        { titulo: 'HTML', url: Img_1 },
        { titulo: 'CSS', url: Img_2 },
        { titulo: 'JavaScript', url: Img_3 },
        { titulo: 'React', url: Img_4 },
        { titulo: 'Python', url: Img_5 },
        { titulo: 'PostgreSQL', url: Img_6 }
    ]);

    const [modalIsOpen, setModalIsOpen] = useState(false); // Estado para controlar a abertura/fechamento do modal
    const [selectedImage, setSelectedImage] = useState(null); // Estado para armazenar a imagem selecionada

    useEffect(() => {
        document.getElementById('numeroPublicacoes').innerHTML = `Publicações: <strong>${publicacoes.length}</strong>`;
    }, [publicacoes.length]);

    // Função para abrir o modal com a imagem selecionada
    const openModal = (image) => {
        setSelectedImage(image);
        setModalIsOpen(true);
    };

    // Função para fechar o modal
    const closeModal = () => {
        setSelectedImage(null);
        setModalIsOpen(false);
    };

    return (
        <section className="publicacoes" id="publicacoes">
            {/* Mapeamento das publicações */}
            {publicacoes.map((publicacao, index) => (
                <img
                    key={index}
                    src={publicacao.url}
                    alt={`Publicação ${index + 1} - ${publicacao.titulo}`}
                    onClick={() => openModal(publicacao)} // Ao clicar na imagem, abre o modal com a imagem selecionada
                />
            ))}

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Visualização da Publicação"
                className='modal'
            >
                {/* Conteúdo do modal */}
                <div className='conteudoModal'>
                    <img src={selectedImage?.url} alt={selectedImage?.titulo} />
                    <div className='encapsulamento'>
                        <h3>{selectedImage?.titulo}:</h3>
                        {/* Acessando a descrição correta para a imagem selecionada */}
                        {selectedImage && descricao_img[selectedImage.titulo] && (
                            <div className='descricaoSkills'>
                                {Object.keys(descricao_img[selectedImage.titulo]).map((key, index) => (
                                    <p key={index}>{descricao_img[selectedImage.titulo][key]}</p>
                                ))}
                                <div className='modalComents'>
                                    <input placeholder='Comentar'></input>
                                    <i className='bx bxs-send'></i>
                                    <div className='bx-i'>
                                        <i className='bx bx-heart'></i>
                                        <i className='bx bx-share-alt' ></i>
                                        <i className='bx bx-bookmark'></i>
                                    </div>
                                </div>
                            </div>
                            
                        )}
                        <div className='comentarios'>
                                    <p>Sem comentários...</p>
                                </div>
                        <button onClick={closeModal}><i className='bx bx-x'></i></button>
                    </div>
                </div>
            </Modal>
        </section>
    )
}
