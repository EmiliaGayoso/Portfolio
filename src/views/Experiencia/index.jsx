import React from 'react';
import { style } from './style';
import './styles.css'
const Experiencia = () => {
    return(
        <section id='experiencia' style={style.flex}>
            <h1>Experiencia</h1>
             <div class="container experience">
                <div class="cards">
                    <div class="card card-one">
                        <h2 class="card-title">Voluntaria</h2>
                        <p class="date">2023</p>
                        <p class="description">Dentro del programa "Apoyo Escolar" de la Fundación Pilares, participe como maestra de refuerzo para niños en contexto vulnerables</p>
                    </div>
      
                    <div class="card card-two">
                        <h2 class="card-title">Abuelos 3.0</h2>
                        <p class="date">2023-2024</p>
                        <p class="description">Taller de informatica, que tiene como objetivo guiar a personas mayores en el ámbito tecnologico de una manera divertidad y clara. Fomentando la comunicación clara y contruyendo cada encuentro experiencias enriquecedoras</p>
                    </div>
                    
                    <div class="card card-three">
                        <h2 class="card-title">Estudiante de Informatica</h2>
                        <p class="date">2022-2024</p>
                        <p class="description">Hace 3 años que día a día aprendo conceptos nuevos sobre el mundo IT, proyectos donde se ponen en juego habilidades Backend y Frontend. La orientación es muy completa y aprendemos en espacios semejantes a los que enfrentaremos fuera del secundario</p>
                    </div>
                    
                    <div class="card card-four">
                        <h2 class="card-title">Taller Onu</h2>
                        <p class="date">2022-2024</p>
                        <p class="description">Participo con mucho entusiasmo en Modelos Simulacro de las Naciones Unidas fuera de la escuela, ponga aprueba mi hábilidad de resolución de problemas y oratoria. Pero a su vez, aprendo sobre problemáticas actuales y desarrollo mis sentidos de empatía y conciencia sobre los problemas a nivel mundial</p>
                    </div>
                </div>
         </div>
        
        </section>
    )
}

export default Experiencia;