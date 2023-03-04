import { useEffect, useState } from "react";
import "./task-style.css";

export function TaskCard() {
  return (
    <div className="card">
      <h1> Cuestionario </h1>
    </div>
  );
}
export function Preguntas({ title }) {
  const[clientes, setClientes] = useState([]);

  const loadClientes=async() =>{
    try {
      const response= await fetch('');
      const data=await response.json();
      setClientes(data);
      } catch (error) {
        console.log(error);
      }
  }
  useEffect(() => {
    loadClientes();
  })
  return <p>{title}</p>;
}
export function Seccion({ name }) {
  return <p className="seccion"> {name} </p>;
}

export function CheckboxConTexto({pregunta}) {
  return (
    <div className="container">
      <label>
        <input type="checkbox"/>
        {pregunta}
      </label>
    </div>
  );
}

  
