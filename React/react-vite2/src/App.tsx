
import React , {useState} from 'react'

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

export default App;