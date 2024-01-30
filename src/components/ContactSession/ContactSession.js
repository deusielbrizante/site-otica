import "./ContactSession.css"

export default function ContactSession() {
    return (
        <section id="contactSession">
            <div className="centralize">
                <h2>Fale Conosco</h2>
                <p>Não perca tempo, venha conhecer uma de nossas lojas ou entre em contato através de nossas redes sociais ou da central de atendimento.</p>
                <div className="contactList">
                    <div className="contactInfo">
                        <h3>Contato</h3>
                        <div className="generalInfo">
                            <img src="assets/local.png" alt="logo local"></img>
                            <p>Nova Iguaçu, RJ</p>
                        </div>
                        <div className="generalInfo">
                            <img src="assets/telefone.png" alt="logo telefone"></img>
                            <p>(21) 9999-9999</p>
                        </div>
                        <div className="generalInfo">
                            <img src="assets/email.png" alt="logo email"></img>
                            <p>contato@oticavida.com</p>
                        </div>
                    </div>
                    <div className="contactInfo">
                        <h3>Contato</h3>
                        <div className="generalInfo">
                            <img src="assets/fb.png" alt="logo facebook"></img>
                            <p>/OticaVida</p>
                        </div>
                        <div className="generalInfo">
                            <img src="assets/ig.png" alt="logo instagram"></img>
                            <p>@oticavidarj</p>
                        </div>
                        <div className="generalInfo">
                            <img src="assets/tt.png" alt="logo twitter"></img>
                            <p>@oticavidarj</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}