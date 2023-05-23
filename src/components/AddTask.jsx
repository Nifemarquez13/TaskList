import Modal from 'react-modal';
import Formulario from './Formulario';
import useModal from './useModal';
import { Fragment } from 'react';


function AddTask(){
    const {modalAbierto, handleAbrirModal, handleCerrarModal} = useModal();
    
    return(
        <Fragment>
        <button type='submit' id="mybutton" onClick={handleAbrirModal}>Nueva Tarea</button>
      
        <Modal isOpen={modalAbierto} onRequestClose={handleCerrarModal} ariaHideApp={false}>
        <button onClick={handleCerrarModal} id="Close">Cerrar</button>
          <Formulario onCloseModal={handleCerrarModal} />
        </Modal>
        
        </Fragment>
    )
}

export default AddTask;