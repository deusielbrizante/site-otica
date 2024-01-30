import "./SessionAbout.css"

export default function SessionAbout() {
    return (
        <section id="sessionAbout">
            <div className="centralize">
                <h2>Quem somos nós ?</h2>
                <p>Fundada em 2001, em Nova Iguaçu - Rio de Janeiro, a Óticas vida iniciou suas atividades focada no atendimento ao público de renda mais baixa, sempre com o objetivo de proporcionar ao cliente bom atendimento, qualidade e preço baixo.
                </p>
                <div className="info">
                    <div className="group">
                        <img src="assets/loja.png" alt="imagem da loja"></img>
                        <div className="info-text">
                            <h3>Nossas Filiais</h3>
                            <p>Hoje temos mais de 20 filiais pelo Brasil e na América</p>
                        </div>
                    </div>
                    <div className="group">
                        <div className="info-text">
                            <h3>Atendimento flexível</h3>
                            <p>Nossa equipe possui é treinada para te atender</p>
                        </div>
                        <img src="assets/atendimento.png" alt="imagem do atendimento"></img>
                    </div>
                </div>
            </div>
        </section>
    )
}