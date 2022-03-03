import { useState } from 'react';
import Modal from 'react-modal';
import logoImg from '../../assets/logo.svg'
import { Container, Content } from './styles'

//PROPRIEDADES QUE HEADER PODE RECEBER:
interface HeaderProps{
    onOpenNewTransactionModal: () => void;
}

export function Header({onOpenNewTransactionModal}: HeaderProps){

    return(
        <Container>
            <Content>
                <img src={logoImg} alt="Logo da aplicação DT Money" />
                <button type="button" onClick={onOpenNewTransactionModal}>
                    Nova transação
                </button>


            </Content>
        </Container>
    )
}