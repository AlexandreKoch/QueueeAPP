import React, { useState } from 'react'
import api from '../api'

const FormularioTarefa = (props) => {

    const [tarefa, setTarefa] = useState({
        cd_tipo: '',
        cd_complexidade: 1,
        cd_demanda: props.cd_demanda,
        descricao: '',
    })

    const onChange = (e) => {
        setTarefa({...tarefa,[e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        api.post('/tarefa', tarefa, {headers: {"Content-Type": "application/json",},})
        .then((response) => {
            console.log(response.data.id)
            props.updateIdAtual(response.data.id)
            //acessa o resultado aqui
        })
        .catch(error => {
            console.log('Deu erro no POST da FormularioTarefa')
            console.log(error.response.data.erro)
        })
        
    }

  return (
    <div>
        <p>Informe as etapas do processo</p>
        <form className='formulario' onSubmit={handleSubmit}>
            <fieldset>
                <div className='input_box'>
                    <label htmlFor="descricao">Descrição da etapa: </label>
                    <input type="text" name="descricao" id="descricao" required onChange={onChange}/>
                </div>
            </fieldset>

            <fieldset>
                <div className='input_box'>
                    <label htmlFor="cd_tipo">Informe o tipo de tarefa desta etapa: </label>
                    <select name="cd_tipo" id="cd_tipo" onChange={onChange}>
                        <option defaultValue value="">Selecione</option>
                        <option value="1">Interação com telas</option>
                        <option value="2">Sites</option>
                        <option value="3">Regras</option>
                        <option value="4">Programas</option>
                        <option value="5">Serviços e API's</option>
                    </select>
                </div>
            </fieldset>

            <fieldset>
                <div className='input_box'>
                    <label htmlFor="cd_complexidade">Qual a complexidade desta etapa: </label>
                    <select name="cd_complexidade" id="cd_complexidade" onChange={onChange}>
                        <option defaultValue value="1">Muito baixa</option>
                        <option value="2">Baixa</option>
                        <option value="3">Média</option>
                        <option value="4">Alta</option>
                        <option value="5">Muito alta</option>
                    </select>
                </div>
            </fieldset>

            <button type='submit'>
                Salvar
              </button>
        </form>
    </div>
  )
}

export default FormularioTarefa