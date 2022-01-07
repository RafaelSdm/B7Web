
import React , {useState} from 'react'

import {Botao} from './components/Botao'

/*
1 ------- INTRODUCAO ---------

const App = () =>{

  const [numero,  setNumero] = useState(0)
  const[name, setName] = useState('Joao');


  const handleButtonClick = () => {

    window.alert("o botao foi clicado!")
    setNumero(numero + 10);

  }


  const changeName = () => {

    setName('Rafael');

  }

  return(

    <div>
      O numero é: {numero}
      <br />
      <button onClick={handleButtonClick} >Clique Aqui</button>
      <button onClick={changeName}>Clique aqui para alterar o nome</button>
      Meu nome é: {name}
    </div>

  );
}

*/



/*


2 ----- PROJETO CONTADOR --------------

const App = () =>{

  const [n, setN] = useState(0);

  const henadleMinus =  () =>{
    if(n >0){
      setN(n - 1)
    }
  }


  const handleMore = () =>{
    setN(n+1)
  }
  return (

    <div>
      <button onClick={henadleMinus}>-</button>
      {n}
      <button onClick={handleMore}>+</button>

    </div>

  );
}

*/



/*

3 ---- Usando inputs  --------


const App = () => {


  const [name, setName] = useState('');

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) =>{
    setName(event.target.value);
    
    
  }


  return(

    <div>
      Nome:
      <input type="text" value={name} onChange={handleInput} name="" id="" />
      <hr />
      Seu nome é: {name}
    </div>

  );



}


*/

const App = () =>{


  const botaoEventAction = () =>{
    alert('frase do app');
  }
  return(

    <div>

      <Botao clickFn={botaoEventAction} text="Clicar no botao"/>
    
    
    </div>


  )
}

export default App;