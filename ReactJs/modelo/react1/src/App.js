/* eslint-disable jsx-a11y/alt-text */
import React from "react";


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


function formatarNome(user){
  return user.nome +' '+user.sobrenome;
}



function App(){

  let nome = 'Rafael';
  let user = {
    nome: 'joao',
    sobrenome:'silva'
  }

  let imagem = 'https:/www.google.com.br/google.jpg';

  
  return <>
    
    
    <img src={imagem}/>

  </>
}

export default App;