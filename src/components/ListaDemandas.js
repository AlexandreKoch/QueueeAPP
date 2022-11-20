import React, { useState, useEffect } from 'react';
import api from '../api'
import ListaTarefas from './ListaTarefas'

const ListaDemandas = (props) => {

  const [demandas, setDemandas] = useState([]);

  useEffect(() => {
    api.get('/demanda')
    .then((response) => {
      setDemandas(response.data)
    })
    .catch(error => {
      console.log(error)
    })
    //incluir []?
  }, [])

  function handleClick(idDemanda) {
    console.log('Vai editar a demanda:' + idDemanda)
    props.defineDemanda(idDemanda)
    props.defineOpcao('taskInsert')
  }

  return (
    <div>
      <h1>Lista de Demandas</h1>
      {console.log( demandas)}
      <ul>
        {demandas.map(demanda => (
          <li key={ demanda.id } className='demanda'>
            <h2>Processo: {demanda.processo}</h2>
            <p>Área: {demanda.area}, {demanda.id}</p>

            <ListaTarefas cd_demanda={demanda.id} exibir='false'/>
            <button onClick={(e)=>{e.preventDefault();handleClick(demanda.id)}}>Editar Demanda</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ListaDemandas