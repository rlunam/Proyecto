import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { TaskCard } from "./Task";
import { Preguntas, CheckboxConTexto } from "./Task";
import { Seccion } from "./Task";

const root = ReactDOM.createRoot(document.getElementById("root"));

const handleChange = (e) => {
  console.log(e.target.value); //muestra en consola lo que el usuario escribe
};
const handleOptionChange = (event) => {
  console.log(event.target.value);
};

root.render(
  <>
    <>
      <></>
      <TaskCard />
      <Seccion name="Dominio de la asignatura" />
      <Preguntas title="1. Demuestra dominio de los contenidos del programa de estudios." />
      <select onChange={handleOptionChange}>
        <option value="option1">Nunca</option>
        <option value="option2">A veces</option>
        <option value="option3">Casi siempre</option>
        <option value="option3">siempre</option>
      </select>
      <Preguntas title="2. Vincula los contenidos de la asignatura (unidad de aprendizaje) con el de otras." />
      <select onChange={handleOptionChange}>
        <option value="option1">Nunca</option>
        <option value="option2">A veces</option>
        <option value="option3">Casi siempre</option>
        <option value="option3">siempre</option>
      </select>
      <Preguntas title="3. Utiliza ejemplos reales para facilitar el aprendizaje de los contenidos." />
      <select onChange={handleOptionChange}>
        <option value="option1">Nunca</option>
        <option value="option2">A veces</option>
        <option value="option3">Casi siempre</option>
        <option value="option3">siempre</option>
      </select>
      <Preguntas title="4.Promueve actividades para facilitar el aprendizaje significativo (selecciona cuales):" />
      <CheckboxConTexto pregunta="Analisis de casos" />
      <CheckboxConTexto pregunta="Debate" />
      <CheckboxConTexto pregunta="Mesa redonda" />
      <CheckboxConTexto pregunta="Solucion de ejercicios" />
      <CheckboxConTexto pregunta="Indagacion de ejercios " />
      <CheckboxConTexto pregunta="Practicas" />
      <CheckboxConTexto pregunta="otras" />
      <Preguntas title="5. Utiliza tecnologías de la información y comunicación para facilitar tu aprendizaje:" />
      <CheckboxConTexto pregunta="Blogs" />
      <CheckboxConTexto pregunta="Chats" />
      <CheckboxConTexto pregunta="Foros" />
      <CheckboxConTexto pregunta="Redes sociales" />
      <CheckboxConTexto pregunta="Videoconferencias" />
      <CheckboxConTexto pregunta="Simuladores" />
      <CheckboxConTexto pregunta="Otras" />
      <Preguntas title="6. Utiliza recursos didácticos para facilitar tu aprendizaje:" />
      <CheckboxConTexto pregunta="Articulos cientificos" />
      <CheckboxConTexto pregunta="Cibergrafia" />
      <CheckboxConTexto pregunta="Diapositivas" />
      <CheckboxConTexto pregunta="Textos" />
      <CheckboxConTexto pregunta="Tutoriales" />
      <CheckboxConTexto pregunta="Libros de consultas" />
      <CheckboxConTexto pregunta="Otros" />
      <Seccion name="Programa de estudios" />
      <Preguntas title="7. Proporciona el programa de la asignatura (unidad de aprendizaje) al inicio del semestre." />
      <select onChange={handleOptionChange}>
        <option value="option1">Nunca</option>
        <option value="option2">A veces</option>
        <option value="option3">Casi siempre</option>
        <option value="option3">siempre</option>
      </select>
      <Preguntas title="8. Cumple con los objetivos establecidos en el programa." />
      <select onChange={handleOptionChange}>
        <option value="option1">Nunca</option>
        <option value="option2">A veces</option>
        <option value="option3">Casi siempre</option>
        <option value="option3">siempre</option>
      </select>
      <Seccion name="Programa de estudios" />
      <Preguntas title="9. Realizó examen diagnóstico al inicio del semestre." />
      <select onChange={handleOptionChange}>
        <option value="option1">Nunca</option>
        <option value="option2">A veces</option>
        <option value="option3">Casi siempre</option>
        <option value="option3">siempre</option>
      </select>
      <Preguntas title="10. Informó los criterios de evaluación el inicio del semestre." />
      <select onChange={handleOptionChange}>
        <option value="option1">Nunca</option>
        <option value="option2">A veces</option>
        <option value="option3">Casi siempre</option>
        <option value="option3">siempre</option>
      </select>
      <Preguntas title="11. Evalúa de acuerdo con los criterios y contenidos vistos en clase." />
      <select onChange={handleOptionChange}>
        <option value="option1">Nunca</option>
        <option value="option2">A veces</option>
        <option value="option3">Casi siempre</option>
        <option value="option3">siempre</option>
      </select>
      <Preguntas title="12. Comunica oportunamente los resultados de las evaluaciones." />
      <select onChange={handleOptionChange}>
        <option value="option1">Nunca</option>
        <option value="option2">A veces</option>
        <option value="option3">Casi siempre</option>
        <option value="option3">siempre</option>
      </select>
      <Seccion name="Actitud" />
      <Preguntas title="13. Muestra disponibilidad para resolver las dudas en clase." />
      <select onChange={handleOptionChange}>
        <option value="option1">Nunca</option>
        <option value="option2">A veces</option>
        <option value="option3">Casi siempre</option>
        <option value="option3">siempre</option>
      </select>
      <Preguntas title="14. Muestra interés en tu nivel de aprovechamiento." />
      <select onChange={handleOptionChange}>
        <option value="option1">Nunca</option>
        <option value="option2">A veces</option>
        <option value="option3">Casi siempre</option>
        <option value="option3">siempre</option>
      </select>
      <Preguntas title="15. Promueve un ambiente de respeto y confianza en el aula." />
      <select onChange={handleOptionChange}>
        <option value="option1">Nunca</option>
        <option value="option2">A veces</option>
        <option value="option3">Casi siempre</option>
        <option value="option3">siempre</option>
      </select>
      <Seccion name="Puntualidad" />
      <Preguntas title="16. Acude regularmente a clase." />
      <select onChange={handleOptionChange}>
        <option value="option1">Nunca</option>
        <option value="option2">A veces</option>
        <option value="option3">Casi siempre</option>
        <option value="option3">siempre</option>
      </select>
      <Preguntas title="17. Cumple con los horarios establecidos." />
      <select onChange={handleOptionChange}>
        <option value="option1">Nunca</option>
        <option value="option2">A veces</option>
        <option value="option3">Casi siempre</option>
        <option value="option3">siempre</option>
      </select>
      <Seccion name="Variacion" />
      <Seccion name="Dominio de la asignatura" />
      <Preguntas title="1.Demuestra dominio de los temas en el programa de estudio a lo largo de las clases." />
      <select onChange={handleOptionChange}>
        <option value="option1">Nunca</option>
        <option value="option2">A veces</option>
        <option value="option3">Casi siempre</option>
        <option value="option3">siempre</option>
      </select>
      <Preguntas title="2. Relaciona los contenidos de la materia (unidad de aprendizaje) con el de otras materias." />
      <select onChange={handleOptionChange}>
        <option value="option1">Nunca</option>
        <option value="option2">A veces</option>
        <option value="option3">Casi siempre</option>
        <option value="option3">siempre</option>
      </select>
      <Preguntas title="3. Usa ejemplos de la vida real para facilitar el aprendizaje de los temas." />
      <CheckboxConTexto pregunta="Analisis de casos" />
      <CheckboxConTexto pregunta="Debate" />
      <CheckboxConTexto pregunta="Mesa redonda" />
      <CheckboxConTexto pregunta="Solucion de ejercicios" />
      <CheckboxConTexto pregunta="Indagacion de ejercios " />
      <CheckboxConTexto pregunta="Practicas" />
      <CheckboxConTexto pregunta="otras" />
      <Preguntas title="5. Emplea TIC para mejorar tu aprendizaje: " />
      <CheckboxConTexto pregunta="Blogs" />
      <CheckboxConTexto pregunta="Chats" />
      <CheckboxConTexto pregunta="Foros" />
      <CheckboxConTexto pregunta="Redes sociales" />
      <CheckboxConTexto pregunta="Videoconferencias" />
      <CheckboxConTexto pregunta="Simuladores" />
      <CheckboxConTexto pregunta="Otras" />
      <Preguntas title="6. Hace uso de materiales didácticos para favorecer tu aprendizaje:" />
      <CheckboxConTexto pregunta="Articulos cientificos" />
      <CheckboxConTexto pregunta="Cibergrafia" />
      <CheckboxConTexto pregunta="Diapositivas" />
      <CheckboxConTexto pregunta="Textos" />
      <CheckboxConTexto pregunta="Tutoriales" />
      <CheckboxConTexto pregunta="Libros de consultas" />
      <CheckboxConTexto pregunta="Otros" />
      <Seccion name="Programa de estudios" />
      <Preguntas title="7. Da a conocer el programa de la materia (unidad de aprendizaje) al principio del curso" />
      <select onChange={handleOptionChange}>
        <option value="option1">Nunca</option>
        <option value="option2">A veces</option>
        <option value="option3">Casi siempre</option>
        <option value="option3">siempre</option>
      </select>
      <Preguntas title="8. Cumple con los fines señalados en el programa" />
      <select onChange={handleOptionChange}>
        <option value="option1">Nunca</option>
        <option value="option2">A veces</option>
        <option value="option3">Casi siempre</option>
        <option value="option3">siempre</option>
      </select>
      <Seccion name="Evaluacion" />
      <Preguntas title="9. Aplicó una evaluación diagnostica al principio del curso." />
      <select onChange={handleOptionChange}>
        <option value="option1">Nunca</option>
        <option value="option2">A veces</option>
        <option value="option3">Casi siempre</option>
        <option value="option3">siempre</option>
      </select>
      <Preguntas title="10. Indicó la forma de evaluación al principio del curso" />
      <select onChange={handleOptionChange}>
        <option value="option1">Nunca</option>
        <option value="option2">A veces</option>
        <option value="option3">Casi siempre</option>
        <option value="option3">siempre</option>
      </select>
      <Preguntas title="11. Califica conforme a los temas vistos en clase." />
      <select onChange={handleOptionChange}>
        <option value="option1">Nunca</option>
        <option value="option2">A veces</option>
        <option value="option3">Casi siempre</option>
        <option value="option3">siempre</option>
      </select>
      <Preguntas title="12. Notifica acertadamente las calificaciones de las evaluaciones para su cotejo." />
      <select onChange={handleOptionChange}>
        <option value="option1">Nunca</option>
        <option value="option2">A veces</option>
        <option value="option3">Casi siempre</option>
        <option value="option3">siempre</option>
      </select>
      <Seccion name="Actitud" />
      <Preguntas title="13. Resuelve las dudas de forma adecuada en clase." />
      <select onChange={handleOptionChange}>
        <option value="option1">Nunca</option>
        <option value="option2">A veces</option>
        <option value="option3">Casi siempre</option>
        <option value="option3">siempre</option>
      </select>
      <Preguntas title="14. Muestra atencion en tu rango de aprovechamiento." />
      <select onChange={handleOptionChange}>
        <option value="option1">Nunca</option>
        <option value="option2">A veces</option>
        <option value="option3">Casi siempre</option>
        <option value="option3">siempre</option>
      </select>
      <Preguntas title="15. Fomenta un entorno de respeto y confianza en el salon de clases." />
      <select onChange={handleOptionChange}>
        <option value="option1">Nunca</option>
        <option value="option2">A veces</option>
        <option value="option3">Casi siempre</option>
        <option value="option3">siempre</option>
      </select>
      <Seccion name="Puntualidad" />
      <Preguntas title="16. Se presenta generalmente a clase cumpliendo con el 80% de asistencia" />
      <select onChange={handleOptionChange}>
        <option value="option1">Nunca</option>
        <option value="option2">A veces</option>
        <option value="option3">Casi siempre</option>
        <option value="option3">siempre</option>
      </select>
      <Preguntas title="17. Cumple con los horarios fijados para las clases." />
      <select onChange={handleOptionChange}>
        <option value="option1">Nunca</option>
        <option value="option2">A veces</option>
        <option value="option3">Casi siempre</option>
        <option value="option3">siempre</option>
      </select>
    </>
    <form
      onSubmit={(e) => {
        e.preventDefault();
        alert("Enviado");
      }}
    >
      <button className="boton">Enviar</button>
    </form>
  </>
);
