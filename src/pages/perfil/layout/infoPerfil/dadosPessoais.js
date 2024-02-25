import "./dadosPessoais.css"
import ImgPerfil from '../../../../assets/img/img_perfil.jpg'

export const DadosPessoais = () => {
    return(
        <section className="sectionPerfil" id="sectionPerfil">
            <img src={ImgPerfil} alt="Guilherme Betsa"></img>

                <div className="infoPerfil">
                    <h2>Guilherme Betsa</h2>
                    <p>21 anos</p>
                    <p>Florianópolis - SC</p>
                    <p>bet.sa@hotmail.com</p>
                    <p>+55 (48) 9 9154-5226</p>
                    <h4>Biografia:</h4>
                    <p><strong>
                             Desenvolvedor Full Stack:
                        </strong> Estudante do Floripa Mais Tec no curso FuturoDev. Atualmente cursando Análise e
                        Desenvolvimento de Sistemas pela faculdade Anhanguera.</p>
                    <div className="divEditarPerfil">
                        <button>Editar perfil</button>
                        <button>Alterar foto de capa</button>
                    </div>
                </div>
            </section>
    )
}