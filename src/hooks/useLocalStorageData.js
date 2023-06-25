import { useEffect, useState } from "react";
import { taskLists } from "../taskLists";

function useLocalStorageData(){

    const [taskData, setTaskData] = useState(taskLists);          

    useEffect(()=>{
      const localStorageData = localStorage.getItem("lista");
      const storedTask = JSON.parse(localStorageData);
      if(storedTask===null){
        localStorage.setItem("lista",JSON.stringify(taskData));
      }else{
      setTaskData(storedTask);
      }
  },[]);

  const deleteTask = (id) => {
    const select = confirm("¿estas seguro que desea eliminar la tarea?");
    //Se actualiza el estado según la elección del usuario.
    if(select){
      window.localStorage.removeItem("lista"); //Se limpia el localStorage.
      let newTaskList = [...taskData]; //Se copia el array que contiene la lista.
   
      //Filtra los datos para excluir el elemento eliminado.
      const taskActualizados = newTaskList.filter(item => item.id !== id);
      //Se actualiza el localStorage con la nueva lista.
      window.localStorage.setItem("lista",JSON.stringify(taskActualizados));
      //Se actualiza el estado que contiene la lista de tareas.
      setTaskData(taskActualizados);
      alert("has eliminado la tarea seleccionada");
    }
  }

  const completeTask = (id) => {
    const select = confirm("¿Completaste la tarea?");
    //Se actualiza el estado según la elección del usuario.
    if(select){
      let data = getDataLocalStorage();
      //Filtra los datos para excluir el elemento eliminado.
      const completed = data.find(item => item.id === id);
      completed.status = "Completado";
      window.localStorage.setItem("lista",JSON.stringify(data));
      setTaskData(data);
      alert("Felicidades por tu cumplimiento");
    }
  }

  const addTask=(dataForm)=>{
    const select = confirm("¿estas seguro que desea agregar la tarea?");
    //Se actualiza el estado según la elección del usuario. 
    // setSelected(select);
    if (select){
      let newTaskList = [...taskData, dataForm]; //Se agrega el objeto
      window.localStorage.setItem("lista",JSON.stringify(newTaskList));
      //Se actualiza el estado que contiene la lista de tareas.
      setTaskData(newTaskList);
      alert("has agregado la tarea exitosamente");
      
     }
  }

  const getDataLocalStorage = () =>{
    let almacenamientoLocal = localStorage.getItem('lista');
    return  JSON.parse(almacenamientoLocal);
    
  }
  const selectTaskUpdate=(id)=>{
      let dictionaries = getDataLocalStorage();
      const taskUpdate = dictionaries.filter(item => item.id === id);
      window.localStorage.setItem("task",JSON.stringify(taskUpdate[0]));
  }

  const updateTask=(Id, dataForm)=>{
    let dictionaries = getDataLocalStorage();
    const taskUpdate = dictionaries.find(item => item.id === Id);
    taskUpdate.names = dataForm['names'];
    taskUpdate.hour = dataForm['hour'];
    taskUpdate.status = dataForm['status'];
    taskUpdate.date = dataForm['date'];
   
    window.localStorage.setItem("lista",JSON.stringify(dictionaries));
    setTaskData(dictionaries);
    alert("has actualizado la tarea seleccionada");
}
  return {taskData, setTaskData, deleteTask, addTask, selectTaskUpdate, updateTask, completeTask};
}

export default useLocalStorageData;

