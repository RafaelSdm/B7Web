
import {useState} from 'react'
import './styles.css';
import {Botao} from './components/Botao'
import styled from 'styled-components';

import {Container} from './components/Container'

import {Botao1} from './components/Botao1'


import {Container1, Botao11} from './AppStyles'

import * as C from './AppStyles'

/*


// Aplicando css INLINE


const App = () =>{

  const [clicked, setClicked] = useState(false)

  const [padding, setPadding] = useState(0)


  const handleClick = () =>{
    setClicked(true);
    setPadding(20);
  }

  return(

    <div>

      <button style={{
        
       backgroundColor: clicked ?'gold' : 'red',
       color:'blue',
       border: 'none',
       width: '40rem',
       height:'4rem',
       padding: padding ? '5rem' : '2rem',
       
       
       }} onClick={handleClick} >Clique Aqui</button>

    </div>


  );



}


*/



/*


// Primeiro exemplo usando stylessett


const App = () =>{

  const handleClick = () =>{

  }

  return(

    <div>

      <button className='botao' onClick={handleClick}>Clique aqui</button>

    </div>


  )

}


*/


/*


// estilizando com stylesshet

const App = () => {

  return(

    <div>

      <Botao/>

    </div>
  );




}


*/



/*


// COMPONENTS COM STYLE COMPONENTS

const App = () =>{
  return(
    <Container>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui eveniet minima, error exercitationem dolores in possimus quidem recusandae eius quas ipsum quaerat asperiores, eaque illo dolorem harum iure inventore vero.
      <C.Botao11>clique aqui</C.Botao11>
    </Container>
  )
}


*/



/*

// Passansdo props dinamicas ao styled

const App = () => {

  return(
    <C.Container1 bgColor='green'>

      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum, quas. Commodi suscipit laborum, quis aliquid architecto asperiores totam iure, voluptatem a, natus adipisci ea error alias magnam. Architecto, vel possimus.
      
      <br />

      <C.Botao11 bg='#ff0000'>Botao grande</C.Botao11>
      <C.Botao11 bg='gold' small={true}>Botao pequeno</C.Botao11>


    </C.Container1>


  );


}

*/




const App = () => {
  return(
    <C.Container1 bgColor='green'>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod fugiat corporis harum quae, ad rerum ducimus itaque cumque velit eum, exercitationem sequi temporibus quaerat aliquam impedit inventore voluptates. Placeat, dicta.
      <hr />
      <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit eveniet voluptatibus <a href="#">link dentro do span</a> nostrum et obcaecati aspernatur minus ipsam repellat totam nulla accusamus amet, fugit aliquam sed rerum consectetur. Quasi, consequuntur omnis.</span>

      <a href="#" className='link'>link de exemplo</a>

      <br />

      <C.Botao11 bg='#ff0000'>Botao grande</C.Botao11>
      <C.Botao11 bg='gold' small={true}>Botao pequeno</C.Botao11>


    </C.Container1>
  )
}



export default App;
