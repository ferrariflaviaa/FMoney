import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model} from 'miragejs'
import App from './App';

///FUNÇÃO QUE FAZ AS CHAMADAS API:
createServer({

  models:{
    transaction: Model,
  },
  routes() {
    //AQUI FAZENDO DIRECIONAMOS TODAS CHAMADAS QUE TEM API:
    this.namespace = 'api';
    this.get('/transactions', () => {
    return this.schema.all('transaction');
      
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('transition', data )
    })
  }
})
ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);



