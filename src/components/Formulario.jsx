import React, { useEffect } from 'react';
import { useState } from 'react';

function Formulario(props) {

      const {onCloseModal, addTask, updateTask } = props;
      
      const[taskSelected, setTaskSelected] = useState({
        id:null,
        names:"",
        date:"",
        hour:"",
        status:""
      });

      const[dataForm, setDataForm] = useState({
        id:null,
        names:"",
        date:"",
        hour:"",
        status:""
       });

      useEffect(()=>{
        const localStorageData = localStorage.getItem("task");
        const storedTask = JSON.parse(localStorageData);
        setTaskSelected(
          storedTask || {
            id:null,
            names:"",
            date:"",
            hour:"",
            status:""
           } );
      }, [])
      
      const [errors, setErrors] = useState({
        names:"",
        date:"",
        hour:"",
        status:""
      }); 

      const handleOnChangeNames = (event) => {
        const value = event.target.value;
        if(event.target.name === "names"){
          setErrors({
            ...errors,
            names : value === "" ? "Por favor digita la tarea" : value.length < 4 ? "Debe contener más caracteres" : ' '
          })  
        }
          setDataForm({
            ...dataForm,
            names: value
          })

      }

      const handleOnChangeDate = (event)=>{
        const value = event.target.value;
        if(event.target.name === "date"){
          setErrors({
            ...errors,
            date : value !== "" ? ' ' : "Por favor digita la fecha"
          })  
        }
          setDataForm({
            ...dataForm,
            date: value
          })

      }

      const handleOnChangeHour = (event) =>{
        const value = event.target.value;
        if(event.target.name === "hour"){
          setErrors({
            ...errors,
            hour : value !== "" ? " " : "Por favor digita la hora"
          })  
        }
          setDataForm({
            ...dataForm,
            hour: value
          })
      }
      const handleOnChangeStatus = (event) =>{
        const value = event.target.value;
        let ID = Number(Math.floor(Math.random() * (10**3)));
        if(event.target.name === "status"){
          setErrors({
            ...errors,
            status : value !== " " ? " " : "Por favor selecciona el estado de la tarea"
          })  
        }
          setDataForm({
            ...dataForm,
            id: ID,
            status: value
          })
      }
        
      const handleOnSubmit=(event)=>{
          event.preventDefault();
          if(taskSelected['id'] === null){
            addTask(dataForm);
          }
          else{
            updateTask(taskSelected['id'], dataForm);
          }
          onCloseModal();
        }
    
  const isFormValid = Object.keys(errors).every((key) => errors[key] === " ");
    
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
        defaultValue={taskSelected.names}
        onChange={handleOnChangeNames}
        autoComplete='off'
        />
      {errors.names && <p className='error'>{errors.names}</p>}
         <br/>
            <label>¿cuándo realizarás la actividad?:</label>
              <input type="date" 
              name="date" 
              defaultValue={taskSelected.date.replace(/(\d{2})\/(\d{2})\/(\d{4})/, "$3-$2-$1") || ""} 
              onChange={handleOnChangeDate} 
              />
            <br/>
            {errors.date && <p className='error'>{errors.date}</p>}
            <label>¿A qué horas debes culminarla?:</label>
              <input type="time" 
              name="hour" 
              defaultValue={taskSelected.hour} 
              onChange={handleOnChangeHour} 
              />
            {errors.hour && <p className='error'>{errors.hour}</p>}
            <br/>
            <label>Estado:</label>         
              <select name="status" onChange={handleOnChangeStatus} defaultChecked = {taskSelected.status}>
                <option value= "">Seleccione</option>
                <option value= "Pendiente">Pendiente</option>
                <option value= "En proceso">En proceso</option>                
            </select>        
            {errors.status && <p className='error'>{errors.status}</p>}
            <br/>
               <button type="submit" disabled={!isFormValid} >Guardar</button>
            </form>
     </div>
  );
}

export default Formulario;
