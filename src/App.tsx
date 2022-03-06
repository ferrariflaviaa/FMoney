import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import {GlobalStyle} from "./styles/global"
import Modal from 'react-modal';
import { useState } from "react";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { TransactionsProvider } from "./TransactionsContext";

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
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>

      <Dashboard/>

      <NewTransactionModal isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseNewTransactionModal}/>

      <GlobalStyle/>

    </TransactionsProvider>
  );
}

export default App;
