import React, { Component } from 'react';
import api from '../api'
import ListaTarefas from './ListaTarefas'

class ListaDemandas extends Component {

  state = {
    demandas: [],
  }

  async componentDidMount(){
    const response = await api.get('/demanda')
    // const response = await api.get('/tarefasDaDemanda/2')
    this.setState({ demandas: response.data})
  }

  render () {

    const { demandas } = this.state;

    return (
      <div>
        <h1>Lista de Demandas</h1>
        {console.log(demandas)}
        {demandas.map(demanda => (
          <div key={ demanda.id } className='demanda'>
            <ul>
              <li>
                <h2>Processo: {demanda.processo}</h2>
                <p>Área: {demanda.area}, {demanda.id}</p>

                <ListaTarefas cd_demanda={demanda.id} />

              </li>
            </ul>
          </div>
        ))}
      </div>
    )
  }
}

export default ListaDemandas;