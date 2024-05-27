import React from 'react';
import { style } from './style';
import Card from '../../components/cardEducacion'

const Educacion = () => {
    return(
        
    <section id='educacion' style={{display:"flex",flexDirection:"column"}}>
        
     <h1>Educación</h1>
        <div style={{width:"100%",display:"flex",flexDirection:"row", justifyContent:"center"}}>
            <Card
                name= "Intituto Santa Cruz"
                photo="https://tallerrecursosdigitales.wordpress.com/wp-content/uploads/2014/03/imagen-008.jpg"
                address=" 24 de Noviembre 1000"
                years="2010-2019"
            />
            
            <Card
                name= "ORT Argentina"
                photo="https://lh3.googleusercontent.com/p/AF1QipMRe8xVF-1Qe298wuaVgLnzQfXWWKvhvFeVp4yQ=s680-w680-h510"
                address=" Yatay 240"
                years="2020-2024"
            />
        
        </div>
    <p style={{color:"white", fontSize:"1.2rem"}}>Toca <a href="https://www.linkedin.com/in/maria-emilia-gayoso-martinez-44605b274/details/certifications/" style={{color:"white", fontSize:"1.2rem"}}><b>aquí</b></a> para ver mis Licencias y Certificaciones</p>
        
    </section>
    )
}

export default Educacion
