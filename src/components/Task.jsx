import ShowTaskList from "./ShowTaskList";
import { useEffect, useState } from "react";


function Task(props) {
  const { List } = props;
 
  const[deleted, setDeteled] = useState(false);

  useEffect(()=>{
      if(deleted){
        alert("has eliminado la tarea seleccionada");
        setDeteled(false);
      }
  })
  
  const handleClickDelete=(id)=>{
   const select = confirm("¿estas seguro que desea eliminar la tarea?");
   setDeteled(select);
   console.log(`Clicked on element with id ${id}`);
  }
  // const [favourites, setFavourites] = useState(List);

  // const handleFavouriteClick = (name) => {
  //   console.log(`favourite clicked from ${name}`);
  // }
  // //   let newFavourites = [...favourites];

  //   if (!favourites.includes(movieName)) {
  //     newFavourites = [...newFavourites, movieName];
  //   } else {
  //     newFavourites = newFavourites.filter((movie) => movieName != movie);
  //   }

  //   setFavourites(newFavourites);

  //   localStorage.setItem("favourites", JSON.stringify(newFavourites));
  // };

  // useEffect(() => {
  //   const localStorageData = localStorage.getItem("favourites");
  //   if(localStorageData){
  //     try{
  //       const storedFavourites = JSON.parse(localStorageData);

  //       setFavourites(storedFavourites);
  //     }catch(err){
  //       console.err("Error parsing favourite items from localStorage")
  //     }
  //   }
  // }, []);

  return (
    <div className="CardActivity">
       {List.map((data) => {
        return (
          <div className="CardList">
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