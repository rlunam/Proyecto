export function Saludar({ titulo }) {
  return <h1> {titulo} </h1>;
}

export function Usuario({nombre, cuenta, novia, direccion, puntos}) {
  return (
    <div>
      <h1>{nombre}</h1>
      <p>${cuenta}</p>
      <p>{novia ? "con novia" : "soltero"}</p>
      <ul>
        <li>direccion: {direccion.calle}</li>
        <li>ciudad: {direccion.ciudad}</li>
      </ul>
    </div>
  );
}

//props: muestra un valor diferente en pantalla
//tambien se puede function Saludar({title}) sin el props
