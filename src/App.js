import React, {useState} from 'react'
import FormularioDemanda from './components/FormularioDemanda';
import InsereTarefa from './components/InsereTarefa';
import ListaDemandas from './components/ListaDemandas';

const App = () => {

  const [opcao, setOpcao] = useState('handleDemandas')
  const [idDemanda, setIdDemanda] = useState()

  function defineOpcao(retorno) {
    setOpcao(retorno)
  }

  function defineDemanda(id){
    setIdDemanda(id)
    console.log('Demanda definida: ' + id)
  }

  return (
    <div>
      <div>
        <button onClick={() => setOpcao('handleDemandas')}>Demandas</button>
        <button onClick={() => setOpcao('taskInsert')}>Solicitar Automação</button>
        <p>{opcao}</p>

        {opcao === 'handleDemandas' ? (
          <div>
            <FormularioDemanda defineDemanda={defineDemanda} defineOpcao={defineOpcao} />
            <ListaDemandas defineDemanda={defineDemanda} defineOpcao={defineOpcao}/>
          </div>
        ) : (
          <div>
            {opcao === 'taskInsert' ? (
              <div>
                <p>Tá na sessão TaskInsert</p>
                <InsereTarefa cd_demanda={idDemanda} defineDemanda={defineDemanda} defineOpcao={defineOpcao} />
              </div>
            ) : (
              <div>
                
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default App