import React from 'react';
import { style } from './style';
import ux from './img/ux-ui.png';
import database from './img/database.png';
import web from './img/desarrollo-web.png';
import agil from './img/met-agil.png';

const Conocimientos = () => {
    return(
        <section id='conocimientos' style={style.flex}>
            
        <h1>Conocimientos</h1>
        <article style={style.article}>

            <div style={style.div}>
                <img style={style.img} src={ux} alt="ux-ui"/>
                <h6 style={style.h6}>UX/UI</h6>
            </div>

            <div style={style.div}>
                <img style={style.img} src={web} alt="web"/>
                <h6 style={style.h6}>Desarrollo Web</h6>
            </div>

            <div style={style.div}>
                <img style={style.img} src={agil} alt="agil"/>
                <h6 style={style.h6}>Metodologias agiles</h6>
            </div>
            
            <div style={style.div}>
                <img style={style.img} src={database} alt="database"/>
                <h6 style={style.h6}>SQL</h6>
            </div>
           
        </article>
        
        </section>
    )
    
}

export default Conocimientos;
/*<>
    <p>Bienvenido a mi pagina</p>
    <p>Blablabla aca explico cosas</p>
</>*/