import React from 'react';
import { style } from './style';
import Formulario from '../../components/Formulario'

const Contacto = () => {
    return(
    <section id='contacto' style={{display:"flex", flexDirection:"column", justifyContent:"center"}}>
        <h1>Contactame</h1>
        
        <Formulario/>
        
        
    </section>
)
    
}

export default Contacto