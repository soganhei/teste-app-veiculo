import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {GlobalStyle} from './styles'

import {
  BrowserRouter as Router,
  Switch,
  Route,   
} from 'react-router-dom';

import SaidasVeiculo from './app/SaidasVeiculo/SaidasVeiculo'
import SaidasVeiculoFrom from './app/SaidasVeiculo/SaidasVeiculoForm'

import Motoristas from './app/Motorista/Motorista'
import MotoristasForm from './app/Motorista/MotoristaForm'

import Veiculos from './app/Veiculo/Veiculo'
import VeiculosForm from './app/Veiculo/VeiculoForm'

ReactDOM.render(
  <React.StrictMode>
    <Router>
        <App />
        <Switch>   
            
            <Route exact path="/saidas/form">
              <SaidasVeiculoFrom />
            </Route>
            <Route exact path="/saidas/form/:id">
              <SaidasVeiculoFrom />
            </Route>
            <Route exact path="/motoristas">
              <Motoristas />           
            </Route>
            <Route exact path="/motoristas/form">
                <MotoristasForm />
            </Route> 
            <Route exact path="/motoristas/form/:id">
                <MotoristasForm />
            </Route>
            <Route exact path="/veiculos">
              <Veiculos />
            </Route>
            <Route exact path="/veiculos/form">
              <VeiculosForm />
            </Route>  
            <Route exact path="/veiculos/form/:id">
              <VeiculosForm />
            </Route>      
            <Route path="/">
              <SaidasVeiculo />
            </Route>
          </Switch>
    </Router>
    <GlobalStyle />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
