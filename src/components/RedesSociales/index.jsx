import React from 'react';
import {style} from "./style.jsx"
import github from "./img/github.png"
import linkedin from "./img/linkedin.png"

const RedesSociales= ()=>{
    return(
        <div style={style.div}>
            <a style={style.a} href="https://github.com/EmiliaGayoso" ><img style={style.img} src={github} alt="github-profile"/></a>
            <a style={style.a} href="https://www.linkedin.com/in/maria-emilia-gayoso-martinez-44605b274/" ><img style={style.img} src={linkedin} alt="linkedin-profile"/></a>
        </div>
    );
}
export default RedesSociales;