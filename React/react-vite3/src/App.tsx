

import {useState} from 'react'
import './styles.css';
import {Botao} from './components/Botao'


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
    <div>
      
    </div>
  )
}




export default App;
