import React, { useState } from 'react'
// import FormularioEdicaoDemanda from './FormularioEdicaoDemanda';
import FormularioTarefa from './FormularioTarefa';
import ListaTarefas from './ListaTarefas';
// import api from '../api'

const InsereTarefa = (props) => {

    const [idAtual, setIdAtual] = useState()

    function updateIdAtual(id) {
        setIdAtual(id)
    }

   return (
        <div className='tarefasDemanda'>
            <h1 className='tituloSessao'>Dados da demanda</h1>
            
            {/* <p>ID atual: {idAtual}</p> */}
            {/* <FormularioEdicaoDemanda 
                cd_demanda={props.cd_demanda}
                defineDemanda={props.defineDemanda} 
                defineOpcao={props.defineOpcao}/> */}
            <FormularioTarefa 
                cd_demanda={props.cd_demanda}
                updateIdAtual={updateIdAtual} />
            <div className='editaListaTarefas'>
                <ListaTarefas 
                    cd_demanda={props.cd_demanda}
                    idAtual = {idAtual}
                    exibir='true'/>
                <button className='finalizar' onClick={(e)=>{e.preventDefault();alert('A sua demanda foi cadastrada e encontra-se no Backlog');props.defineOpcao('')}}>
                    Finalizar
                </button>
            </div>
        </div>
  )
}

export default InsereTarefa