import React, { Component } from 'react';
import FormularioDemanda from './components/FormularioDemanda';
import ListaDemandas from './components/ListaDemandas';

class App extends Component {

  constructor(props){
    super(props)
    //Estado inicial
    this.state = {opcao : 'consultar'}
  }

  render () {

    return (
      <div>
        <button onClick={() => this.setState({opcao : 'consultar'})}>Consultar Backlog</button>
        <button onClick={() => this.setState({opcao : 'solicitar'})}>Solicitar Automação</button>
        <p>{this.state.opcao}</p>

        {this.state.opcao === "consultar" ? (
          <ListaDemandas />
        ) : (
          <FormularioDemanda />
        )}
      </div>
    )
  }
}

export default App;