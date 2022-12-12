import React, { useState, useEffect } from 'react';
import api from '../api'
import ListaTarefas from './ListaTarefas'

const ListaDemandas = (props) => {

  const [demandas, setDemandas] = useState([]);
  const [orderBy, setOrderBy] = useState(['1'])

  useEffect(() => {
    // api.get('/demanda')
    api.get('/listaDemanda/' + orderBy)
    .then((response) => {
      setDemandas(response.data)
    })
    .catch(error => {
      console.log(error)
    })
    //incluir []?
  }, [orderBy])

  function handleClick(idDemanda) {
    console.log('Vai editar a demanda:' + idDemanda)
    props.defineDemanda(idDemanda)
    props.defineOpcao('taskInsert')
  }

  return (
    <div className='listaDemandas'>
      {/* <button onClick={(e)=>{e.preventDefault();props.defineOpcao('handleDemandas')}}>Solicitar demanda</button> */}
      <div>
          <h1 className='tituloSessao'>Backlog</h1>
          <div className='form_box'>
              <label htmlFor="order_by">Ordenar por:<br/></label>
              <select name="order_by" id="order_by" onChange={(e)=>{setOrderBy(e.target.value);console.log(orderBy)}}>
                  <option defaultValue value="1">Saving</option>
		              <option value="2">Criticidade</option>
              </select>
          </div>
      </div>
      {console.log( demandas)}
      <ul>
        {demandas.map(demanda => (
          <li key={ demanda.id } className='demanda'>
            <div className='nomeProcessoEStatus'>
                <div className='subDiv'>
                    <h2 className='nomeProcesso'>{demanda.processo}</h2>
                    {demanda.status === 'Indeferido' ? (
                        <p className='statusProcessoIndeferido'><br/><strong>{demanda.status}</strong></p>    
                    ) : (
                        <p className='statusProcesso'><br/><strong>{demanda.status}</strong></p>
                    )}
                </div>
            </div>
            
            <div className='infosDemanda'>
                <p><strong>Solicitante: </strong><br/>{demanda.solicitante}</p>
                <p><strong>Área: </strong><br/>{demanda.area}</p>
                <p><strong>Saving: </strong><br/>{demanda.saving}h/mês</p>
                <p><strong>Criticidade: </strong><br/>{demanda.criticidade}</p>
            </div>            
            <div className='opcoesDemanda'>
                <ListaTarefas cd_demanda={demanda.id} exibir='false'/>
                <div><button className='editarDemanda' onClick={(e)=>{e.preventDefault();handleClick(demanda.id)}}>Editar Demanda</button></div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ListaDemandas