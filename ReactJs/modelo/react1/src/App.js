
import React, {useState, useEffect} from "react";
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


const Input = styled.input`

  width:400px;
  height:30px;
  font-size: 16px;
  padding: 10px;
  border: 1px solid black

`


function App(){

  //const [ contador, setContador  ] = useState(0);

 // const botaoAction = () =>{
   // setContador(contador+1);
 // }


 /*

 const [email, setEmail] = useState('');
 const handleEmailInput = (e) =>{

    setEmail(e.target.value);

 }

 const [senha, setSenha] = useState('');

 const handleSenhaInput = (e) =>{
   setSenha(e.target.value);
 }
  


 const handBotao = () =>{
   window.alert(`${email} - ${senha}`)
 }



 const [isLogged, setIsLogged] = useState(false);


 const [valorConta, setValorConta] = useState(10);

 const handleContaInput = (e) =>{
   setValorConta(parseFloat(e.target.value));
 }

 const [valorGorgeta, setValorGorgeta] = useState(0);

 const handleGorgetaInput = (e) =>{
   setValorGorgeta(parseInt(e.target.value))
 }

 */



 // dentro do return - projeto calculadora



 /*

 <Input type="email" placeholder="informe um email" value={email} onChange={handleEmailInput}></Input>
      
      <Input type="password" placeholder="informe uma senha" value={senha} onChange={handleSenhaInput}></Input>

      <button onClick={handBotao}> Mostrar</button>


      {email.length > 0 && 
      
      <p>{email.length} caractere{email.length != 1 ? 's' : ''}</p>
      
      }  

      {isLogged == true &&

        <button>Sair</button>
      
      }

      {isLogged == false &&

        <button>Fazer login</button>
      
      }



      {isLogged ? <button>Sair</button> : <button>fazer login</button>}

      <br/>

      <h1>Gorjetas</h1>

      <Input type="number" placeholder="informe o preço" value={valorConta} onChange={handleContaInput}></Input>

      <Input type="number" placeholder="informe a porcentagem da gorgeta" value={valorGorgeta} onChange={handleGorgetaInput}></Input>


      <br/>

      {valorConta > 0 &&

        <div>

          <h4>Conta Parcial: R${valorConta}</h4>
          <h4>Conta da gorgeta: {valorGorgeta} - R${(valorGorgeta/100) * valorConta} </h4>
          <h1>Total da conta: R${(valorGorgeta/100 ) * 100 + valorConta}</h1>
          
        </div>
      
      
      }


      */



  const [contagem, setContagem] = useState(0);

  useEffect(() =>{
    document.title = `contagem: ${contagem}`
  }, [contagem])

  function aumentarAction(){
    setContagem(contagem + 1);
  }

  return (
    <>

      <h1>Contagem: {contagem}</h1>
      <button onClick= {aumentarAction}>Aumentar numero</button>
      
      


    </>
  )

   
    
    
    
   

}

export default App;