import "./menu.css"

export const Menu = () => {
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