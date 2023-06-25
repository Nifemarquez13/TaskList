import { Fragment } from "react";
import Modal from 'react-modal';
import useModal from "./useModal";
import Formulario from "./Formulario";

function AddTask (props){

    const {taskData, addTask} = props;
    const { modalAbierto, handleAbrirModal, handleCerrarModal } = useModal();
    
    return (
    
    <Fragment>
    <button type='submit' id="mybutton" onClick={handleAbrirModal}>Nueva Tarea</button>
    
    <Modal isOpen={modalAbierto} onRequestClose={handleCerrarModal} ariaHideApp={false}>
    <button onClick={handleCerrarModal} id="Close">Cerrar</button>
      <Formulario 
        onCloseModal={handleCerrarModal} 
        taskData = {taskData}
        addTask = {addTask} 
      />
    </Modal>
    </Fragment>
    );
}

export default AddTask;