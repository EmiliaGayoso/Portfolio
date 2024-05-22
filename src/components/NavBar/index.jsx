import {style} from "./style.jsx"
import './styles.css'
const NavBar= ()=>{
    return(
        <nav style={style.nav}>
            <ul style={style.ul}>
                <li style={style.li}><a href="#infoPersonal" style={style.a}>Acerca de mí</a></li>
                <li style={style.li}><a href="#conocimientos" style={style.a}>Conocimientos</a></li>
                <li style={style.li}><a href="#experiencia" style={style.a}>Experiencia</a></li>
                <li style={style.li}><a href="#educacion" style={style.a}>Educación</a></li>
                <li style={style.li}><a href="#contacto" style={style.a}>Contacto</a></li>
                
            </ul>
    </nav>  
    );

    
}
export default NavBar;