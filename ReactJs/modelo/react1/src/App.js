
import React from "react";
//import './App.css'
import styled from 'styled-components'


/*
class App extends React.Component{

  render(){
    return <h1>testando</h1>
  }
}
*/

/*

function App(){
  return <h1>testando 2,3,4</h1>
}

*/


/*

let App = () =>{
  return <h1>testando 3 vez</h1>
}


*/


/*

function Avatar(props){
  return (
    <div style={{backgroundColor: '#FF0000', padding: 20, width: 400}}>
    
        <img src={props.url} alt={props.name}/>
        <br/>
        <span>{props.name}</span>
    </div>
  );
    

}

*/


/*


const Title = styled.h1`

  color: red;
  font-size:23px



`;

const Site = styled.div`

  width:400px;
  height: 500px;
  background-color: blue;


`;

const Botao = styled.button`

  font-size;19px;
  padding: 10px;
  background-color: ${props => props.ativo == true ? 'pink': 'red'};
  color: ${props => props.ativo == true ? 'blue': 'black'};
`;


*/



function App(){

  

  
  return (
    <Site>

      <Title>Titulo da web</Title>
      <Botao ativo={true}>Clique aqui</Botao>
      <Botao ativo={false}>Clique aqui</Botao>


    </Site>
  )

   
    
    
    
   

}

export default App;