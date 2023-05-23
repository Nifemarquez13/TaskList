import { useEffect, useState } from "react";
import { taskLists } from "../taskLists";

function useLocalStorageData(){

    const [taskData, setTaskData] = useState(taskLists);          
    const [deleted, setDeteled] = useState(false);
    const[selected, setSelected] = useState(false);

    const[add, setAdd] = useState({
      id:null,
        name:"",
        date:"",
        hour:"",
        status:""
       }); 

  //Muestra la ventana que informa que se ha eliminado la tarea.
  useEffect(() => {
    if (deleted) {
      alert("has eliminado la tarea seleccionada");
      setDeteled(false);
    }
  });

    useEffect(()=>{
      const localStorageData = localStorage.getItem("lista");
      const storedTask = JSON.parse(localStorageData);
      if(storedTask===null){
        localStorage.setItem("lista",JSON.stringify(taskData));
      }else{
      setTaskData(storedTask);
      }
  },[]);

  useEffect(()=>{
    if(selected){
      alert("has agregado la tarea exitosamente");
      setSelected(false);  
    }
})

  const deleteTask = (id) => {
    const select = confirm("¿estas seguro que desea eliminar la tarea?");
    //Se actualiza el estado según la elección del usuario.
    setDeteled(select);
   if (select){
    localStorage.removeItem("lista"); //Se limpia el localStorage.
    let newTaskList = [...taskData]; //Se copia el array que contiene la lista.
 
    //Filtra los datos para excluir el elemento eliminado.
    const taskActualizados = newTaskList.filter(item => item.id !== id);
    //Se actualiza el localStorage con la nueva lista.
    localStorage.setItem("lista",JSON.stringify(taskActualizados));
    //Se actualiza el estado que contiene la lista de tareas.
   setTaskData(taskActualizados);
   } 
  }

  const addTask=(newtask)=>{
    const select = confirm("¿estas seguro que desea agregar la tarea?");
    //Se actualiza el estado según la elección del usuario. 
    setSelected(select);
      let newTaskList = [...taskData, add]; //Se agrega el objeto
      localStorage.setItem("lista",JSON.stringify(newTaskList));
      //Se actualiza el estado que contiene la lista de tareas.
      setTaskData(newTaskList);
  }

  const updateTask=(newtask)=>{
    // Obtén el valor de la clave principal desde el almacenamiento local
      var almacenamientoLocal = localStorage.getItem('lista');

      // Convierte el valor obtenido en un objeto o diccionario
      var diccionarios = JSON.parse(almacenamientoLocal);

      // Supongamos que el ID del diccionario que deseas acceder es 'id_deseado'
      if (diccionarios.hasOwnProperty(newtask)) {
        var diccionarioDeseado = diccionarios[newtask];
        // Realiza las operaciones necesarias con el diccionario deseado
        console.log(diccionarioDeseado);
        console.log(diccionarioDeseado.name);
        console.log(diccionarioDeseado.date);
        console.log(diccionarioDeseado.hour);
        console.log(diccionarioDeseado.status);


        setAdd({
          ...add,
          id:diccionarioDeseado.id,
          name: diccionarioDeseado.name,
          date: diccionarioDeseado.date,
          hour: diccionarioDeseado.hour,
          status: diccionarioDeseado.status
        });
        console.log("estado");
        console.log(add);


      
      } else {
        console.log('No se encontró el diccionario con el ID deseado');
      }
  }

  return {taskData, setTaskData, deleteTask, selected, setSelected, add, setAdd, addTask, updateTask};
}

export default useLocalStorageData;

