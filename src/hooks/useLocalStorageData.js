import { useEffect, useState } from "react";
import { taskLists } from "../taskLists";

function useLocalStorageData(){

    const [taskData, setTaskData] = useState(taskLists);          
    const [deleted, setDeteled] = useState(false);
    const[selected, setSelected] = useState(false);
    const[refresh, setRefresh] = useState(false);

    const[add, setAdd] = useState({
        id:null,
        names:"",
        date:"",
        hour:"",
        status:""
       }); 

    const[adds, setAdds] = useState({
        id:null,
        names:"",
        date:"",
        hour:"",
        status:""
       }); 

    useEffect(()=>{
      const localStorageData = window.localStorage.getItem("lista");
      const storedTask = JSON.parse(localStorageData);
      if(storedTask===null){
        window.localStorage.setItem("lista",JSON.stringify(taskData));
      }else{
       setTaskData(storedTask);
      }
      console.log("hola");
}, []);


  const deleteTask = (id) => {
    const select = confirm("¿estas seguro que desea eliminar la tarea?");
    //Se actualiza el estado según la elección del usuario.
    setDeteled(select);
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

  const addTask=()=>{
    const select = confirm("¿estas seguro que desea agregar la tarea?");
    //Se actualiza el estado según la elección del usuario. 
    // setSelected(select);
    if (select){
      let newTaskList = [...taskData, add]; //Se agrega el objeto
      window.localStorage.setItem("lista",JSON.stringify(newTaskList));
      //Se actualiza el estado que contiene la lista de tareas.
      setTaskData(newTaskList);
      alert("has agregado la tarea exitosamente");
      setRefresh(true);
     }
  }

  const updateTask=(id)=>{
      var almacenamientoLocal = localStorage.getItem('lista');
      var diccionario = JSON.parse(almacenamientoLocal);

      // Se pasa por parámetro el valor del ID que se quiere actualizar
      if (diccionario.hasOwnProperty(id)) {
        var taskselected = diccionario[id];
        window.localStorage.setItem("task",JSON.stringify(taskselected));
      //Se actualiza el estado que contiene la lista de tareas.
        setAdds(taskselected);
      } else {
        console.log('No se encontró el diccionario con el ID deseado');
      }
  }

  return {taskData, setTaskData, deleteTask, selected, setSelected, add, setAdd,  adds, setAdds, addTask, updateTask};
}

export default useLocalStorageData;


