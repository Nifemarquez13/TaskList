import React, { useState, useEffect } from 'react';
import useLocalStorageData from '../hooks/useLocalStorageData';

function Formulario({onCloseModal}) {
   
  const {taskData, add, setAdd, selected, setSelected, addTask}  = useLocalStorageData();

    
      useEffect(()=>{
          if(selected){
            onCloseModal(); 
          }
      })
      
       const handleOnChange = (event) => {        
          let ID = ((taskData[taskData.length - 1].id));
            if(ID == null){
              setAdd({
                ...add,
                id:0,
                [event.target.name]:event.target.value, 
              }
                ); 
            }else{
              setAdd({
                ...add,
                id:ID + 1,
                [event.target.name]:event.target.value, 
              }
            ); 
          } 
        }
        
        const handleOnSubmit=(event)=>{
          event.preventDefault();
          addTask();
        }

        // 
  return (
    <div className="AddTasks">
    <form onSubmit={handleOnSubmit}>
    <h1>AGREGAR NUEVA TAREA</h1>
    <img src="./../src/images/listaTareas2.png" alt="lista de tareas" />
        <label>Actividad:</label>
         <input type="text" placeholder='Nueva Tarea' value={add.name} id="name" name="name" onChange={handleOnChange} autoComplete='off'/>
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
                <option>En proceso</option>                
            </select>
            <br/>
               <button type="submit">Guardar</button>
            </form>

     </div>
  );
}

export default Formulario;
