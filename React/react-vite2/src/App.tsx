
import {useState} from 'react'


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

export default App;