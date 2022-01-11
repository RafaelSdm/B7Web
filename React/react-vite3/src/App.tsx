
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






const App = () =>{
  return(
    <Container>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui eveniet minima, error exercitationem dolores in possimus quidem recusandae eius quas ipsum quaerat asperiores, eaque illo dolorem harum iure inventore vero.
      <C.Botao11>clique aqui</C.Botao11>
    </Container>
  )
}





export default App;
