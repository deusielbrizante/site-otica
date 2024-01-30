import CoverSession from "../CoverSession/CoverSession"
import ProductSession from "../ProductSession/ProductSession"
import SessionAbout from "../SessionAbout/SessionAbout"
import ContactSession from "../ContactSession/ContactSession"
import "./Content.css"

export default function Content (){
    return(
        <main id="content">
            <CoverSession/>
            <ProductSession/>
            <SessionAbout/>
            <ContactSession/>
        </main>
    )
}