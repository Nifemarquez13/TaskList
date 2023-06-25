import ShowTaskList from "./ShowTaskList";
import Modal from 'react-modal';
import Formulario from "./Formulario";
import useModal from "./useModal";

function Task(props) {
  
  const {taskData, addTask, deleteTask, selectTaskUpdate, updateTask, completeTask}  = props;
  const { modalAbierto, handleAbrirModal, handleCerrarModal } = useModal();
    

  const handleClickComplete = (id) => {
    completeTask(id)
  }

  const handleClickDelete = (id) => {
    deleteTask(id)
  }

  const handleClickUpdate = (id) => {
    handleAbrirModal();
    selectTaskUpdate(id);
  }

  return (
    <div className="CardActivity">
      {taskData.map((data) => {
        return (
          <div key={data.id} className="CardList">
            <img src="./../src/images/listaTareas2.png" alt="lista de tareas" />
            <ShowTaskList
              Key={data.id}
              names={data.names}
              date={data.date}
              status={data.status}
              hour={data.hour}
            />
            <div className="icons">
            <img src="./../src/images/completed.png" alt="Completar tarea" onClick={() => handleClickComplete(data.id)}/>
            <img src="./../src/images/editTasks.png" alt="Editar tarea" onClick={() => handleClickUpdate(data.id)}/>
            <Modal isOpen={modalAbierto} onRequestClose={handleCerrarModal} ariaHideApp={false}>
            <button onClick={handleCerrarModal} id="Close">Cerrar</button>
             <Formulario onCloseModal={handleCerrarModal} updateTask={updateTask} />
             </Modal>
             
              
              <img
                src="./../src/images/deleted.png"
                name="deleted"
                alt="eliminar tareas"
                onClick={() => handleClickDelete(data.id)}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Task;
