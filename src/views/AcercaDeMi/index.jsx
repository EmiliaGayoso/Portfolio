import React from 'react';
import { style } from './style';
import fotoPerfil from '../../imgs/miFoto.jpg'
const AcercaDeMi = () => {
    return(
        <section id='infoPersonal' style={style.flex}>
        <article style={style.article}>
            <div style={style.div}>
                
                <h2 style={style.h2}>Hola! Me llamo Maria Emilia Gayoso Martinez</h2><br />
                <p style={style.p}>Me llamo María Emilia Gayoso Martínez y soy alumna del instituto ORT, especializada en informática. Mis habilidades incluyen la programación frontend con dominio de CSS, HTML y React, así como conocimientos en el patrón de diseño MVC. Actualmente, estoy ampliando mi repertorio aprendiendo Node.js. Además, tengo experiencia en el uso de herramientas de diseño gráfico como Adobe Illustrator y Photoshop. Más allá de mi formación académica, he participado como voluntaria en la Fundación Pilares, donde he podido ayudar a niños en contextos vulnerables y expandir mis competencias en un areas social. También estudio francés y poseo un nivel avanzado de inglés. Mi pasión por el aprendizaje y mi curiosidad constante me impulsan a seguir desarrollándome tanto profesional como personalmente.</p><br></br>
                <p style={style.p}><b>Edad:</b> 17 años (tengo que hacer una funcion)</p>
                <p style={style.p}><b>Email:</b> meg.gayoso@gmail.com</p>
            </div>
            <img style={style.img} src={fotoPerfil} alt="fotoPerfil" />
        </article>
        </section>
    )
}

export default AcercaDeMi
/*<>
            <p>Bienvenido a mi pagina</p>
            <p>Blablabla aca explico cosas</p>
        </>*/