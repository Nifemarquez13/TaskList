import React, { useState, useEffect } from 'react';

function Formulario() {
   
    const[add, setAdd] = useState({
        nameTask:"",
        date:"",
        hour:"",
        status:""
       });
    
       const handleOnChange = (event) => {
        setAdd({
          ...add,
          [event.target.name]:event.target.value, 
        }
          );    
        }
        
        const handleOnSubmit=(event)=>{
          event.preventDefault();
          console.log(add);
        }
  return (
    <div className="AddTasks">
    <form onSubmit={handleOnSubmit}>
    <h1>AGREGAR NUEVA TAREA</h1>
    <img src="./../src/images/listaTareas2.png" alt="lista de tareas" />
        <label>Actividad:</label>
         <input type="text" placeholder='Nueva Tarea' id="nameTask" name="nameTask" onChange={handleOnChange} autoComplete='off'/>
         <br/>
            <label>¿cuándo realizarás la actividad?:</label>
            <input type='date' name='date' onChange={handleOnChange} />
            <br/>
            <label>¿A qué horas debes culminarla?:</label>
            <input type='time' name='hour' onChange={handleOnChange} />
            <br/>
            <label>Estado:</label>
          
            <select name="status" onChange={handleOnChange}>
                <option>Seleccione</option>
                <option>Pendiente</option>
                <option>Completado</option>
                <option>En proceso</option>                
            </select>
                <h2>{add.nameTask}
                <br/>
                {add.date}
                <br/>
                {add.hour}
                <br/>
                {add.status}
                </h2>

                <button type="submit">Guardar</button>
            </form>

     </div>
  );
}

export default Formulario;
