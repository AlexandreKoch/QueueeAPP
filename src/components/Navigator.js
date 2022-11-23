import React from 'react'

const Navigator = (props) => {
  return (
    <div className='aside'>
        <ul className='menu'>
            <li><button className='navButton' onClick={() => props.defineOpcao('taskInsert')}>Home</button></li>
            <li><button className='navButton' onClick={() => props.defineOpcao('handleDemandas')}>Solicitar automação</button></li>
            <li><button className='navButton' onClick={() => props.defineOpcao('')}>Backlog</button></li>
            <li><button className='navButton'>Orientações</button></li>
            <li><button className='navButton'>O que é RPA?</button></li>
        </ul>
    </div>
  )
}

export default Navigator