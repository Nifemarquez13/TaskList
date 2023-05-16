import ShowTaskList from "./ShowTaskList";
import { useEffect, useState } from "react";


function Task(props) {
  const { list } = props;
  //Este estado es para guardar el array de la lista.
 const[dataTask, setDataTask] = useState(list);
 //Este estado es para guardar la confirmación de eliminar la tarea.
  const[deleted, setDeteled] = useState(false);

//Muestra la ventana que informa que se ha eliminado la tarea.
  useEffect(()=>{
      if(deleted){
        alert("has eliminado la tarea seleccionada");
        setDeteled(false);
      }
  })
  
  const handleClickDelete=(id)=>{
    //Ventana de confirmación para eliminar la tarea.
   const select = confirm("¿estas seguro que desea eliminar la tarea?");
   //Se actualiza el estado según la elección del usuario. 
   setDeteled(select);
   if (select){
    localStorage.removeItem("lista"); //Se limpia el localStorage.
   } 
   let newTaskList = [...dataTask]; //Se copia el array que contiene la lista.

   //Filtra los datos para excluir el elemento eliminado.
   const TaskActualizados = newTaskList.filter(item => item.id !== id);
   //Se actualiza el localStorage con la nueva lista.
   localStorage.setItem("lista",JSON.stringify(TaskActualizados));
   //Se actualiza el estado que contiene la lista de tareas.
  setDataTask(TaskActualizados);
  }

  //Se leen los datos del localStorage se actualiza el estado con la lista obtenida.
  //Con la librería JSON (.parse) transformamos los datos obtenidos con el localStorage.
  useEffect(()=>{
      const localStorageData = localStorage.getItem("lista");
        const storedTask = JSON.parse(localStorageData);
        setDataTask(storedTask);
  },[]);

//  useEffect(()=>{
//       var dataTasks = JSON.parse(localStorage.getItem("lista"));
//       if(dataTasks?.length > 0) {
//       setDataTask(dataTask)
//       } else {
// localStorage.setItem("lista", JSON.stringify(dataTask));
//       }
//   },[]);

  return (
    <div className="CardActivity">
       {dataTask.map((data) => {
        return (
          <div key={data.id} className="CardList">
            <img src="./../src/images/listaTareas2.png" alt="lista de tareas" />
            <ShowTaskList
              key={data.id}
              name={data.name}
              date={data.date}
              status={
              data.status ? (
                <strong>Realizado</strong>
              ) : (
                <strong>No Realizado</strong>
              )
            }
            hour = {data.hour}
            />
            <div className="icons">
              <img src="./../src/images/editTasks.png" alt="Editar tarea" />
              <img src="./../src/images/delete.png" name="deleted" alt="eliminar tareas" onClick={() => handleClickDelete(data.id)}/>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Task;