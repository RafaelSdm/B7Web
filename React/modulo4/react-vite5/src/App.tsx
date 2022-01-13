
import {useState, useEffect, ChangeEvent} from 'react'


/*

//CILCO DE VIDA DOS COMPONENTES

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

*/

const App = () =>{

  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('');
  const [fullName, setFullName] = useState('');



  useEffect(() => {
    setFullName(`${name} ${lastName}`)
  }, [name, lastName])


  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) =>{

    setName(e.target.value);

  }

  const handleLastChange = (e:ChangeEvent<HTMLInputElement>) =>{

    setLastName(e.target.value);

  }




  return(
    <div className='flex flex-col'>
      <input type="text" value={name} placeholder='Informe seu nome:' onChange={handleNameChange} />
      <input type="text" value={lastName} placeholder='Informe seu sobrenome' onChange={handleLastChange} />
      <p>Nome completo: {fullName}</p>
    </div>
  )
}

export default App;