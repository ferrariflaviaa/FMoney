import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import {GlobalStyle} from "./styles/global"
import Modal from 'react-modal';
import { useState } from "react";

Modal.setAppElement('#root');

function App() {
  //CRIANDO A MODAL
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  //USUARIO ABRINDO:
  function handleOpenNewTransactionModal(){
    setIsNewTransactionModalOpen(true);
  }
  
  //USARIO FECHANDO:
  function handleCloseNewTransactionModal(){
    setIsNewTransactionModalOpen(false);
  }
  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      <Dashboard/>

      <Modal isOpen={isNewTransactionModalOpen}
      onRequestClose={handleCloseNewTransactionModal}>
        <h2>Cadastrar transação</h2>
      </Modal>

      <GlobalStyle/>
    </>
  );
}

export default App;
