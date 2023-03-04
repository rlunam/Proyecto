/* import React from "react";
import ReactDOM from "react-dom/client";
import { Saludar, Usuario } from "./Saludar";
import Producto from "./Producto";
import { Boton } from "./Boton";
import { TaskCard } from "./Task";
import { Post } from "./post";

const root = ReactDOM.createRoot(document.getElementById("root"));

const handleChange = (e) => {
  console.log(e.target.value); //muestra en consola lo que el usuario escribe
};

root.render(
  <>
    <TaskCard ready={true} />
    <input onChange={handleChange} />
    <TaskCard ready={false} />
    <input onChange={handleChange} />
    <Post />

    <form onSubmit={(e) => {
      e.preventDefault()
      alert('Enviado')
    }}>
      <button>Enviar</button>
    </form>
  </>
); */

//las llaves sirven para interpretar codigo
//<> </> contenedor vacio
//jsx: retorna porciona html y se convierte en JS
//shift + alt + f acomodar codigo