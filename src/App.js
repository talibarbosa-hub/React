import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import Nav from './componentes/Nav'
import PaginaInicial from "./paginas/PaginaInicial"
import Contato from "./paginas/Contato"
import Chat from "./paginas/Chat"

function App () {
  return (
    <Switch>
      <div>
        <Nav/>
        <Route exact path='/' component={PaginaInicial} />
        <Route path='/contato' component={Contato} />
        <Route path='/chat' component={Chat} />
      </div>
    </Switch>
  )
}

export default App;
