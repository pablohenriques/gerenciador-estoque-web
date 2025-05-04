import './Nav.css'

export default function Nav() {
    return(
        <nav className="menu">
            <ul>
                <li className="line"><a href="#" className="botao">Início</a></li>
                <li className="divisao"><span>Departamentos</span></li>
                <li>
                    <ul>
                        <li className="line"><a href="#" className="botao">Criar</a></li>
                        <li className="line"><a href="#" className="botao">Listar</a></li>
                    </ul>
                </li>
                <li className="divisao"><span>Equipamentos</span></li>
                <li>
                    <ul>
                        <li className="line"><a href="#" className="botao">Criar</a></li>
                        <li className="line"><a href="#" className="botao">Listar</a></li>
                    </ul>
                </li>
                <li className="divisao"><span>Insumos</span></li>
                <li>
                    <ul>
                        <li className="line"><a href="#" className="botao">Criar</a></li>
                        <li className="line"><a href="#" className="botao">Listar</a></li>
                    </ul>
                </li>
            </ul>
        </nav>
    );
}