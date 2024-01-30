import "./Header.css"

export default function Header() {
    return (
        <div className="centralize">
            <header>
                <img src="assets/logo.png" alt="Logo Óticas vida"></img>
                <nav className="links">
                    <a href="#productsSession">Produtos</a>
                    <a href="#sessionAbout">Sobre</a>
                    <a href="#contactSession">Contato</a>
                </nav>
            </header>
        </div>
    )
}