//import './App.css';
import React, { useState, Component } from 'react'
import api from './api'

function ListarDemandas() {
    
    // const [demandas, setDemandas] = useState();
    // let demandas = []

    const demandas = api.get('/demanda')
        .then(response => {
            const data = response.data;
            console.log(data);
            console.log(data[0]);
        })
        .catch(
            error => console.log(error)
        );

        render() {
            const { data } = this.state;
            console.log(data)
            return (
              <div>
              <p> test </p>
              </div>
            );
          }
        
        // return(
        //     <div>
        //         {console.log(demandas)}
        //         {console.log(resDemandas)}
        //         {/* <h1>Lista de Demandas</h1> */}
        //         {/* <button onClick={() => setDemandas(resDemandas)}>Listar</button> */}
        //         {/* <h2>{resDemandas}</h2> */}
        //         {/* {resDemandas.map(demanda => (
        //             <div className='demanda'>
        //                 <ul>
        //                     <li key={demanda.id}>
        //                         <h2>Processo: {demanda.processo}</h2>
        //                         <p>Área: {demanda.area}</p>
        //                     </li>
        //                 </ul>
        //             </div>
        //         ))} */}
        //     </div>
        // )
}

// class App extends Component {

//   state = {
//     demandas: [],
//   }

//   async componentDidMount(){
//     const response = await api.get('/demanda')
//     this.setState({ demandas: response.data})
//   }

//   render () {

//     const { demandas } = this.state;

//     return (
//       <div>
//         <h1>Lista de Demandas</h1>
//         {console.log(demandas)}
//         {demandas.map(demanda => (
//           <div className='demanda'>
//             <ul>
//               <li key={demanda.id}>
//                 <h2>Processo: {demanda.processo}</h2>
//                 <p>Área: {demanda.area}</p>
//               </li>
//             </ul>
//           </div>
//         ))}
//       </div>
//     )
//   }
// }

// ListarDemandas();

export default ListarDemandas;
