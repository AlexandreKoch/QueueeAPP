import React, {useState} from 'react'
import FormularioDemanda from './components/FormularioDemanda';
import InsereTarefa from './components/InsereTarefa';
import ListaDemandas from './components/ListaDemandas';
import Navigator from './components/Navigator';

const App = () => {

  const [opcao, setOpcao] = useState('listaDemandas')
  const [idDemanda, setIdDemanda] = useState()

  function defineOpcao(retorno) {
    setOpcao(retorno)
  }

  function defineDemanda(id){
    setIdDemanda(id)
    console.log('Demanda definida: ' + id)
  }

  return (
    <div className='body'>
      <div className='navigator'>
        <Navigator defineOpcao={defineOpcao}/>
      </div>
      <div className='core_body'>
        {/* <button onClick={() => setOpcao('handleDemandas')}>Demandas</button> */}
        {/* <button onClick={() => setOpcao('taskInsert')}>Solicitar Automação</button> */}
        {/* <p>{opcao}</p> */}

        {opcao === 'handleDemandas' ? (
          <div>
            <FormularioDemanda 
              defineDemanda={defineDemanda}
              defineOpcao={defineOpcao} />
            {/* <ListaDemandas defineDemanda={defineDemanda} defineOpcao={defineOpcao}/> */}
          </div>
        ) : (
          <div>
            {opcao === 'taskInsert' ? (
              <div>
                <InsereTarefa 
                  cd_demanda={idDemanda} 
                  defineDemanda={defineDemanda} 
                  defineOpcao={defineOpcao} />
              </div>
            ) : (
              <div>
                <ListaDemandas 
                  defineDemanda={defineDemanda} 
                  defineOpcao={defineOpcao}/>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default App