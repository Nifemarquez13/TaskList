import {useState} from 'react';


function useModal(){
    const [modalAbierto, setModalAbierto] = useState(false);

    const handleAbrirModal = () => {
      setModalAbierto(true);
    }
  
    const handleCerrarModal = () => {
      setModalAbierto(false);
      localStorage.removeItem("task");
    }
    
    return {modalAbierto, setModalAbierto, handleAbrirModal, handleCerrarModal} 
}

export default useModal;