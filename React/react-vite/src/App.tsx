import React from 'react'
import {Header} from './components/Header'


/*
function App(){
  return <div>HELLO WORLD!!</div>;
}

const App1 = () =>{
  return (
    <div>

      Hello World :)

    </div>
  );
  }


const App2 = () => {
  //return React.createElement('div', null, 'Meu nome é Rafael');
  return (
    <div>
      Meu nome é rafael damasceno!
      <a href="https://google.com">Clique aqui</a>
    </div>
  )
}


const App3 = () =>{
  let name: string = 'Rafael';
  let lastName: string = 'Damasceno';
  let n1: number = 10;
  let n2:number = 30;


  function somar( n1:number, n2: number):number{
    return n1 + n2;
  }

  return(
    //<div>Olá {name}!, tudo bem?</div>
    //<div>Multiplicação: {n1 * n2}</div>
    //<div>Soma: {somar(10,90)}</div>
    <div>Olá {`${name.toUpperCase()} ${lastName}`}</div>
  );
}

*/

/*
const Header =  () =>{
  return(
      <header>
        <h1>Título da pagina</h1>
        <hr />
      </header>
  );
}
*/

const App = () =>{
  return(

    <div>
      <Header title='Este é um exemplo'/>
      <Header title='outro exemplo'/>
      <Header/>

      
      Olá Mundo!
    </div>


  );
}

export default App;