import React, { useEffect } from 'react';
import useLocalStorageData from '../hooks/useLocalStorageData';

function Formulario({onCloseModal}) {
   
  const {taskData, add, setAdd, adds, setAdds, selected, addTask}  = useLocalStorageData();

      useEffect(()=>{
        const localStorageData = localStorage.getItem("task");
        const storedTask = JSON.parse(localStorageData);
        if(storedTask===null){
          window.localStorage.setItem("task",JSON.stringify(add));
          setAdds(add)
        }else{
        window.localStorage.setItem("task",JSON.stringify(storedTask));
        setAdds(storedTask)
        }
      }, [])


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
            onCloseModal();
        }


  return (
    <div className="AddTasks">
    <form onSubmit={handleOnSubmit}>
    <h1>AGREGAR NUEVA TAREA</h1>
    <img src="./../src/images/listaTareas2.png" alt="lista de tareas" />
        <label>Actividad:</label>
        <input type="text" 
        placeholder='Nueva Tarea' 
        id="name" 
        name="names" 
        defaultValue={adds.names}
        onChange={handleOnChange} 
        autoComplete='off'
        />
     
         <br/>
            <label>¿cuándo realizarás la actividad?:</label>
              <input type="date" 
              name="date" 
              defaultValue={adds.date.replace(/(\d{2})\/(\d{2})\/(\d{4})/, "$3-$2-$1") || ""} 
              onChange={handleOnChange} 
              />
            <br/>
            <label>¿A qué horas debes culminarla?:</label>
            
              <input type="time" 
              name="hour" 
              defaultValue={adds.hour} 
              onChange={handleOnChange} 
              />
      
            <br/>
            <label>Estado:</label>           
              <select name="status" defaultValue={adds.status} onChange={handleOnChange}>
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
