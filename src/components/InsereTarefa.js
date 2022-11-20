import React, { useState } from 'react'
import FormularioEdicaoDemanda from './FormularioEdicaoDemanda';
import FormularioTarefa from './FormularioTarefa';
import ListaTarefas from './ListaTarefas';
// import api from '../api'

const InsereTarefa = (props) => {

    const [idAtual, setIdAtual] = useState()

    function updateIdAtual(id) {
        setIdAtual(id)
    }

   return (
        <div>
            <button>Fechar</button>
            <p>ID atual: {idAtual}</p>
            <FormularioEdicaoDemanda 
                defineDemanda={props.defineDemanda} 
                defineOpcao={props.defineOpcao}/>
            <FormularioTarefa 
                cd_demanda={props.cd_demanda}
                updateIdAtual={updateIdAtual} />
            <p>Props.cd_demanda: </p>
            <p>{props.cd_demanda}</p>
            <ListaTarefas 
                cd_demanda={props.cd_demanda}
                idAtual = {idAtual}
                exibir='true'/>
        </div>
  )
}

export default InsereTarefa