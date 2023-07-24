import { Fragment } from "react";
import Modal from 'react-modal';
import useModal from "./useModal";
import Formulario from "./Formulario";
import { Button } from "@chakra-ui/react";

function AddTask (props){

    const {taskData, addTask} = props;
    const { modalAbierto, handleAbrirModal, handleCerrarModal } = useModal();
    
    return (
    
    <Fragment>
    <div className="addTask">
    <Button
          variant='outline'
          size='lg'
         onClick={handleAbrirModal}>Nueva Tarea</Button>
    </div>
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