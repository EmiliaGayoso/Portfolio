import React from 'react';
import {style} from "./style.jsx"

const Formulario= ()=>{
    return(
        <div>
                <form action="" method="POST" style={style.form}>
                    <div>
                        <label for="nombre" class="form-label fw-bolder">Nombre</label>
                        <input class="form-control" type="text" id="nombre" name="nombre" required=""></input>
                    </div>

                  <div>
                    <label for="email" class="form-label fw-bolder">Email</label>
                    <input class="form-control" type="email" id="email" name="_replyto" required=""></input>
                  </div>

                  <div>
                    <label for="mensaje" class="form-label fw-bolder">Mensaje</label>
                    <textarea class="form-control" style="resize: none;" id="mensaje" name="mensaje" rows="4" required=""></textarea>
                  </div>

                  <button class="btn btn-primary mt-2" type="submit">Enviar</button>
                
                </form>
            </div>
        );
    }
          

export default Formulario;