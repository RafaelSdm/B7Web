

import {useState} from 'react'


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

export default App;
