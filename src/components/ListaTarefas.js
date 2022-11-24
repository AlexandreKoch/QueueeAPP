import React, {useState} from 'react'
import { useEffect } from 'react';
import api from '../api'

const ListaTarefas = (props) => {

    const [tarefas, setTarefas] = useState([]);
    const [exibir, setExibir] = useState(props.exibir);

    useEffect(() => {        
        api.get('/tarefasDaDemanda/' + props.cd_demanda)
        .then((response) => {
            setTarefas(response.data)
            // console.log(tarefas)
        })
        .catch(error => {
            console.log(error)
        })
    }, [props.idAtual, props.cd_demanda])

  return (
    <div>
        {exibir === 'false' ? (
            <div className='listaTarefas'>
                <button className='exibirTarefas' onClick={() => setExibir('true')}>Exibir etapas</button>
            </div>
        ) : (
            <div className='listaTarefas'>
                <button className='exibirTarefas' onClick={() => setExibir('false')}>Ocultar etapas</button>
                {console.log('Vai listar as tarefas da demandas com ID ' + props.cd_demanda)}
                <h2>Etapas do processo:</h2>
                {console.log(tarefas)}
                <ul>
                    {tarefas.map(tarefa => (
                        <li key={tarefa.id} className='tarefa'>
                            <p>Etapa: {tarefa.descricao}</p>
                        </li>
                    ))}   
                </ul>
            </div>
        )}
    </div>
  )
}

export default ListaTarefas