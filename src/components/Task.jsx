import ShowTaskList from "./ShowTaskList";
import Modal from 'react-modal';
import Formulario from "./Formulario";
import  useLocalStorageData from "../hooks/useLocalStorageData";
import useModal from "./useModal";

function Task() {
  
  //se importa el hook personalizado.
  const {taskData, deleteTask, updateTask}  = useLocalStorageData();
  const {modalAbierto, handleAbrirModal, handleCerrarModal} = useModal();
    

  const handleClickDelete = (id) => {
    deleteTask(id)
  }

  const handleClickUpdate = (id) => {
    handleAbrirModal();
    updateTask(id)
  }

  return (
    <div className="CardActivity">
      {taskData.map((data) => {
        return (
          <div key={data.id} className="CardList">
            <img src="./../src/images/listaTareas2.png" alt="lista de tareas" />
            <ShowTaskList
              Key={data.id}
              name={data.name}
              date={data.date}
              status={data.status}
              hour={data.hour}
            />
            <div className="icons">
            <img src="./../src/images/editTasks.png" alt="Editar tarea" onClick={() => handleClickUpdate(data.id)}/>
            <Modal isOpen={modalAbierto} onRequestClose={handleCerrarModal} ariaHideApp={false}>
            <button onClick={handleCerrarModal} id="Close">Cerrar</button>
             <Formulario onCloseModal={handleCerrarModal} />
             </Modal>
             
              
              <img
                src="./../src/images/delete.png"
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
