import React from 'react';
import ReactDOM from 'react-dom';
import { createServer} from 'miragejs'
import App from './App';

///FUNÇÃO QUE FAZ AS CHAMADAS API:
createServer({
  routes() {
    //AQUI FAZENDO DIRECIONAMOS TODAS CHAMADAS QUE TEM API:
    this.namespace = 'api';
    this.get('/transactions', () => {
      return [
        {
          id: 1,
          title: 'Transactions 1',
          amount: 400,
          type: 'deposit',
          category: 'Food',
        }
      ]
    })
  }
})
ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

