
import './dadosPessoaisDois.css'
import { Publicacoes } from './publicacoes.js'


export const DadosPessoaisDois = () => {


    return (
        <>
            <section className="sectionPerfilDois">
                <p id="numeroPublicacoes"></p>
                <p>Amigos: <strong>1.479</strong></p>
                <p><a href=""><strong>Sobre</strong></a></p>
            </section>
            <Publicacoes />
        </>
    )
}