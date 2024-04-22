import React from 'react'

function ToDoCard(props) {
  return (
    <article>
      <h3>{props.tarea}</h3>
      <p>{props.frec}</p>
      {props.done == true? <p>Tarea realizada</p> : <p>Tarea por hacer</p>}
      <button onClick={() => props.delete()}>BORRAR</button>
      <br />
    </article>
  )
} // El hijo puede modificar el estado del padre pero solo mediante funciones

export default ToDoCard