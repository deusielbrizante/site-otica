import "./ProductSession.css"

export default function ProductSession() {
    return (
        <section id="productsSession">
            <div className="centralize">
                <h2>Nossos Produtos</h2>
                <p>Trabalhamos com óculos de grau, óculos de sol, lentes transition nos modelos masculino, feminino e infantil.</p>
                <p>Todos os nossos preços são acessíveis e contam com a melhor qualidade do mercado.</p>
                <div className="glasses">
                    <div>
                        <h3>Óculos de grau</h3>
                        <img src="assets/oculos01.png" alt="óculos 1"></img>
                        <p>R$ 500,00</p>
                    </div>
                    <div>
                        <h3>Óculos transition</h3>
                        <img src="assets/oculos02.png" alt="óculos 2"></img>
                        <p>R$ 750,00</p>
                    </div>
                    <div>
                        <h3>Óculos de sol</h3>
                        <img src="assets/oculos03.png" alt="óculos 3"></img>
                        <p>R$ 700,00</p>
                    </div>
                    <div>
                        <h3>Óculos infantil</h3>
                        <img src="assets/oculos04.png" alt="óculos 4"></img>
                        <p>R$ 500,00</p>
                    </div>
                </div>
                <div className="list">
                    <p>Todos os nossos produtos incluem:</p>
                    <ul>
                        <li>Garantia de 1 ano</li>
                        <li>Manutenção preventiva</li>
                        <li>Descontos especiais na compra da segunda unidade</li>
                        <li>Flexibilidade de pagamento</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}