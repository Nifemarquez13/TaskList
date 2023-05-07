import {useState, useEffect, Fragment} from 'react';
import Modal from 'react-modal';
import Formulario from './Formulario';


function AddTask(){
    
    const [modalAbierto, setModalAbierto] = useState(false);

    const handleAbrirModal = () => {
      setModalAbierto(true);
    }
  
    const handleCerrarModal = () => {
      setModalAbierto(false);
    }
    return(
        <Fragment>
        <button type='submit' id="mybutton" onClick={handleAbrirModal}>Agregar</button>
        <Modal isOpen={modalAbierto} onRequestClose={handleCerrarModal} ariaHideApp={false}>
        <button onClick={handleCerrarModal} id="Close">Cerrar</button>
          <Formulario/>
       
        </Modal>
        </Fragment>
    )
}

export default AddTask;