
import {useState, useEffect} from 'react'



const App = () =>{

  //let nome: string = 'Rafael';

  const [name, setName] = useState('Rafael')


  useEffect(()=>{
    alert("executou")
  }, [name])


  const handleClick = () =>{
    setName('Pedro')
  }


  return(
    <div className="bg-red-500">
      Nome: {name} <br />
      <button onClick={handleClick}>Clique aqui</button>
    </div>
  )

}

export default App;