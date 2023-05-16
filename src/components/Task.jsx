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
  
  const handleDeleteTask=()=>{
   const select = confirm("¿estas seguro que desea eliminar la tarea?");
   //Se actualiza el estado según la elección del usuario. 
   setDeteled(select);
  }

  // const [favourites, setFavourites] = useState(List);

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
              Key={data.id}
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