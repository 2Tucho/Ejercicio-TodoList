import React, { useState } from 'react';
import ToDoCard from './ToDoCard'
import data from './data'
import './ToDoList.css'

function ToDoList() {
    const [list, setList] = useState(data)

    const clearCards = () => setList([]);

    const deleteCard = (pos) => {
        let remainingCards = list.filter((item, index) => index !== pos);
        setList(remainingCards);
    }

    const resetCards = () => setList(data);

    const paintCards = () => list.map((item, index) => <ToDoCard
        key={index}
        tarea={item.tarea}
        frec={item.frec}
        done={item.done}
        delete={() => deleteCard(index)}
    />);

    const createCard = (e) => {
        e.preventDefault();
        let tarea = e.target.tarea.value
        let frec = e.target.frecuencia.value
        const tareaHecha = e.target.tareaHecha.value
        let done = ""

        tareaHecha == "Sí"? done = true : done = false

        const item = { tarea, frec, done }; // Nuevo objeto destino
        setList([item, ...list]); // Añade el nuevo destino a la lista

        e.target.reset() // Vacía los input una vez creado el elemento
    }

    return (
        <section>
            <form onSubmit={createCard}>
                <label htmlFor="">Tarea: </label>
                <input type="text" name="tarea" />
                <label htmlFor="">Frecuencia: </label>
                <input type="text" name="frecuencia" />
                <label for="tareaHecha">¿Has hecho ya esta tarea?:</label>
                <select name="tareaHecha" id="tareaHecha">
                    <option value="Sí">Sí</option>
                    <option value="No">No</option>
                </select>
                <button type="submit">Add</button>
            </form>

            <br /><br />

            <button onClick={clearCards}>CLEAR</button>
            <button onClick={resetCards}>RESET</button>

            {paintCards()}
        </section>
    )
}

export default ToDoList