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
            <div>
                <button onClick={() => setExibir('true')}>Exibir tarefas</button>
            </div>
        ) : (
            <div>
                <button onClick={() => setExibir('false')}>Ocultar tarefas</button>
                {console.log('Vai listar as tarefas da demandas com ID ' + props.cd_demanda)}
                <h2>Etapas da demanda {props.cd_demanda}</h2>
                {console.log(tarefas)}
                <ul>
                    {tarefas.map(tarefa => (
                        <li key={tarefa.id} className='tarefa'>
                            <h3>Etapa: {tarefa.descricao}</h3>
                        </li>
                    ))}   
                </ul>
            </div>
        )}
    </div>
  )
}

export default ListaTarefas