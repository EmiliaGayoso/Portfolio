
import {style} from "./style.jsx"


const Boton = ({onClick}) => {
//   const clickear = () => console.log("click")
  return (
    <div>
      <button onClick={onClick} style={style}>boton</button>
    </div>
  );
}

export default Boton;