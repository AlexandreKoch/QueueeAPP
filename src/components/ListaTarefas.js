import React, { Component } from 'react';
import api from '../api'

class ListaTarefas extends Component {

    state = {
        tarefas: [],
    }

    async componentDidMount(){
        const response = await api.get('/tarefasDaDemanda/' + this.props.cd_demanda)
        this.setState({ tarefas: response.data})
    }

    render () {

        const {tarefas} = this.state;

        return (
            <div>
                {console.log('Vai listar as tarefas da demandas com ID ' + this.props.cd_demanda)}
                <h2>Etapa {this.props.cd_demanda}</h2>
                {console.log(tarefas)}
                {tarefas.map(tarefa => (
                    <div key={tarefa.id} className='tarefa'>
                        <ul>
                            <li>
                                <h3>Etapa: {tarefa.descricao}</h3>
                            </li>
                        </ul>
                    </div>
                ))}
            </div>
        )
    }
}

export default ListaTarefas;