
import {useState, useEffect, ChangeEvent} from 'react'

import {Movie} from './types/movie'



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



/*

// USEEFECT NA PRATICA

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

*/




/*

// REQUISIÇÕES GET

const App =() =>{

  const[movies, setMovies] = useState<Movie[]>([]);


  useEffect(() =>{
    loadMovies();
  }, [])

  const loadMovies = () =>{
    fetch('https://api.b7web.com.br/cinema/')
    .then((response) =>{

      return response.json();



    })

    .then((json) =>{
      setMovies(json)
    });
  }

  return(
    <div>
      <button className='block bg-blue-400 p-4 rounded' onClick={loadMovies}>Carregar filmes</button>
      Total de filmes: {movies.length}
      <div className='grid grid-cols-6 gap-3'>

        {movies.map((item, index) =>(
          <div key={index}>
            <img src={item.avatar} className='w-32 block' alt="" />
            {item.titulo}
          </div>
        ))}

      </div>
    </div>
  )

}

*/





/*
// Usando await e async

const App =() =>{

  const[movies, setMovies] = useState<Movie[]>([]);


  useEffect(() =>{
    loadMovies();
  }, [])

 

  const loadMovies = async () =>{
    let response = await fetch('https://api.b7web.com.br/cinema/')
    let json  = await response.json();

    setMovies(json)
    
  


    
  }

  return(
    <div>
      <button className='block bg-blue-400 p-4 rounded' onClick={loadMovies}>Carregar filmes</button>
      Total de filmes: {movies.length}
      <div className='grid grid-cols-6 gap-3'>

        {movies.map((item, index) =>(
          <div key={index}>
            <img src={item.avatar} className='w-32 block' alt="" />
            {item.titulo}
          </div>
        ))}

      </div>
    </div>
  )

}

*/




const App =() =>{

  const[movies, setMovies] = useState<Movie[]>([]);

  const [loading, setLoading] = useState(false)


  useEffect(() =>{
    loadMovies();
  }, [])

 

  const loadMovies = async () =>{
    setLoading(true);
    let response = await fetch('https://api.b7web.com.br/cinema/')
    let json  = await response.json();
    setLoading(false);

    setMovies(json)
    
  


    
  }

  return(
    <div>
      <button className='block bg-blue-400 p-4 rounded' onClick={loadMovies}>Carregar filmes</button>
     




      {loading && 
        <div>Carregando...</div>
      
      
      }


      {!loading &&
      
        <div>total de filmes: {movies.length}</div>
      
      }

      {!loading &&

        <>

                <div className='grid grid-cols-6 gap-3'>

                {movies.map((item, index) =>(
                  <div key={index}>
                    <img src={item.avatar} className='w-32 block' alt="" />
                    {item.titulo}
                  </div>
                ))}

                </div>
                
        
        
        
        </>
      
      
      
      }

    </div>

      
  )

}



export default App;


//https://api.b7web.com.br/cinema