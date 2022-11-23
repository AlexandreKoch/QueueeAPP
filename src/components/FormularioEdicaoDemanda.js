import React from 'react'
import { useState } from 'react';
import api from '../api'

//Precisa de: cd_demanda, 
const FormularioEdicaoDemanda = (props) => {
    //Buscar dados originais da demanda - ALTERAR PARA GET VIA API
      //Define o objeto demanda com o Hook useState já atribuindo um valor pré-determinado
      const [demanda, setDemanda] = useState({
        solicitante: '',
        processo: '',
        area: '',
        departamento: '',
        usuario_chave: '',
        dono_do_processo: '',
        patrocinador: '',
        cd_status: 1,
        cd_input: '',
        saving: '',
        gravidade: 1,
        urgencia: 1,
        tendencia: 1,
        cd_ativo: '',
      })


    //API para atualizar demanda

    //Funções para o formulário de demanda
    const onChange = (e) => {
      setDemanda({...demanda, [e.target.name]: e.target.value})
    };

    //////////////////////////////////////////////////
    //onsome a API (metodo POST) ALTERAR PARA UPDATE//
    //////////////////////////////////////////////////
  const onSubmit = (e) => {
    //comando para que a página não atualize ao submeter
    e.preventDefault()

    let idDemanda

    console.log(demanda)
    api.post('/demanda', demanda, {headers: {"Content-Type": "application/json",},})
      .then((response) => {
        idDemanda = response.data.cd_demanda
        console.log(response.data.cd_demanda)
        props.defineDemanda(idDemanda)
        props.defineOpcao('taskInsert')
        console.log('FOI!')
        //acessa o resultado aqui
      })
      .catch(error => {
        console.log(error.response.data.erro)
      })
  }

  return (
    <div className='formDemanda'>
      {/* <button onClick={(e)=>{e.preventDefault();defineOpcao('backlog')}}>Backlog</button> */}
      <h1 className='tituloSessao'>Solicitação</h1>
          {/* <button onClick={handleClick}>Clique no filho</button> */}
          <div className='form'>
              <div className='form_box'>
                  <form className='formulario' onSubmit={onSubmit}>
                    <fieldset>
                      <p>Sobre a Solicitação</p>
                      <div className='input_box'>
                        <label htmlFor="solicitante">Solicitante:<br/></label>
                        <input type="text" name="solicitante" id="solicitante" required onChange={onChange}/>
                      </div>

                      <div className='input_box'>
                        <label htmlFor="processo">Processo:<br/></label>
                        <input type="text" name="processo" id="processo" required onChange={onChange}/>
                      </div>

                      <div className='input_box'>
                        <label htmlFor="area">Área:<br/></label>
                        <select name="area" id="area"  required onChange={onChange}>
                          <option defaultValue value="">Selecione</option>
                          <option value="Tecnologia da Informação">Tecnologia da Informação</option>
                          <option value="Engenharia">Engenharia</option>
                          <option value="Controladoria">Controladoria</option>
                          <option value="Financeiro">Financeiro</option>
                          <option value="Suprimentos">Suprimentos</option>
                          <option value="Recursos Humanos">Recursos Humanos</option>
                          <option value="Vendas">Vendas</option>
                          <option value="Gestão de Design">Gestão de Design</option>
                          <option value="Gestão de Negócios">Gestão de Negócios</option>
                          <option value="Digital Commerce">Digital Commerce</option>
                          <option value="Fábrica">Fábrica</option>
                          <option value="Jurídico">Jurídico</option>
                        </select>
                      </div>

                      <div className='input_box'>
                        <label htmlFor="departamento">Departamento:<br/></label>
                        <input type="text" name="departamento" id="departamento" onChange={onChange}/>
                      </div>
                    </fieldset>  

                    <fieldset>
                      <p>Sobre os stakeholders</p>
                      <div className='input_box'>
                        <label htmlFor="usuario_chave">Usuário Chave:<br/></label>
                        <input type="text" name="usuario_chave" id="usuario_chave" onChange={onChange}/>
                      </div>

                      <div className='input_box'>
                        <label htmlFor="dono_do_processo">Dono do processo:<br/></label>
                        <input type="text" name="dono_do_processo" id="dono_do_processo" onChange={onChange}/>
                      </div>

                      <div className='input_box'>
                        <label htmlFor="patrocinador">Patrocinador:<br/></label>
                        <input type="text" name="patrocinador" id="patrocinador" onChange={onChange}/>
                      </div>
                    </fieldset>
                    
                    <fieldset>
                      <p>Sobre o processo</p>

                      <div className='input_box'>
                        <label htmlFor="saving">Tempo de execução (h/mês):<br/></label>
                        <input type="number" name="saving" id="saving" onChange={onChange}/>
                      </div>

                      <div className='input_box'>
                        <label htmlFor="cd_input">Entrada de dados:<br/></label>
                        <select name="cd_input" id="cd_input" onChange={onChange}>
                          <option defaultValue value="">Não possui</option>
                          <option value="1">Arquivo CSV</option>
                          <option value="2">Arquivo de texto</option>
                          <option value="3">Planilha Excel</option>
                          <option value="4">E-mail</option>
                          <option value="5">PDF</option>
                          <option value="6">Documento impresso</option>
                          <option value="7">Imagem</option>
                        </select>
                      </div>

                      <div className='input_box'>
                        {/* <label><br/>Defina os seguintes indicadores de criticidades deste processo:</label> */}
                        <br />
                        <label className='gutLabel' htmlFor="criticidade"><strong>Gravidade:</strong><br/></label>
                        <label className='gutLabel'><input defaultChecked type="radio" name="gravidade" value="1" onClick={onChange}/>Muito baixo</label>
                        <label className='gutLabel'><input type="radio" name="gravidade" value="2" onClick={onChange}/>Baixo</label>
                        <label className='gutLabel'><input type="radio" name="gravidade" value="3" onClick={onChange}/>Médio</label>
                        <label className='gutLabel'><input type="radio" name="gravidade" value="4" onClick={onChange}/>Alto</label>
                        <label className='gutLabel'><input type="radio" name="gravidade" value="5" onClick={onChange}/>Muito alto</label>
                        <br />
                        <label className='gutLabel' htmlFor="urgencia"><strong><br/>Urgência:</strong><br/></label>
                        <label className='gutLabel'><input defaultChecked type="radio" name="urgencia" value="1" onClick={onChange}/>Muito baixo</label>
                        <label className='gutLabel'><input type="radio" name="urgencia" value="2" onClick={onChange}/>Baixo</label>
                        <label className='gutLabel'><input type="radio" name="urgencia" value="3" onClick={onChange}/>Médio</label>
                        <label className='gutLabel'><input type="radio" name="urgencia" value="4" onClick={onChange}/>Alto</label>
                        <label className='gutLabel'><input type="radio" name="urgencia" value="5" onClick={onChange}/>Muito alto</label>
                        <br />
                        <label className='gutLabel' htmlFor="tendencia"><strong><br/>Tendência:</strong><br/></label>
                        <label className='gutLabel'><input defaultChecked type="radio" name="tendencia" value="1" onClick={onChange}/>Muito baixo</label>
                        <label className='gutLabel'><input type="radio" name="tendencia" value="2" onClick={onChange}/>Baixo</label>
                        <label className='gutLabel'><input type="radio" name="tendencia" value="3" onClick={onChange}/>Médio</label>
                        <label className='gutLabel'><input type="radio" name="tendencia" value="4" onClick={onChange}/>Alto</label>
                        <label className='gutLabel'><input type="radio" name="tendencia" value="5" onClick={onChange}/>Muito alto</label>
                      </div>

                      <div className='input_box'>
                        <label htmlFor="cd_ativo"><br/>Este processo utiliza algum sistema? Se sim, qual?<br/></label>
                        <select name="cd_ativo" id="cd_ativo" onChange={onChange}>
                          <option defaultValue value="">Não utiliza</option>
                          <option value="1">Contas a receber - Remessa</option>
                          <option value="2">Contas a receber - Retorno</option>
                          <option value="3">WGEN200 - Cockpit de engenharia</option>
                          <option value="4">Ajuste de ponto</option>
                          <option value="5">Lançamento de outras bases</option>
                          <option value="6">eSocial</option>
                          <option value="7">Barberan</option>
                          <option value="8">Envio de e-mail</option>
                          <option value="9">Leitura de e-mail</option>
                        </select>
                      </div>
                    </fieldset>

                    <button id='submit' type='submit'>
                      Solicitar demanda
                    </button>

                  </form>
              </div>
          </div>
          
    </div>
  )
}

export default FormularioEdicaoDemanda