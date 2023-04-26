import ShowTaskList from "./ShowTaskList";

function Task(props) {
  const { List } = props;

  return (
    <div className="CardActivity">
       {List.map((data) => {
        return (
          <div className="CardList">
            <img src="./../src/images/listaTareas2.png" alt="lista de tareas" />
            <ShowTaskList
          key = {data.id}
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
              <img src="./../src/images/delete.png" alt="eliminar tareas" />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Task;