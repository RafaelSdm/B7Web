
import {useState, useEffect, ChangeEvent} from 'react'

import {Movie} from './types/movie'

import { Post } from './types/Post'

import {PostForm} from './components/PostForm'

import {PostItem} from './components/PostItem'


import {api} from './api'



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



/*


// lIDANDO COM O LOADING

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

*/


/*


// lidando com erros de requisição

const App =() =>{

  const[movies, setMovies] = useState<Movie[]>([]);

  const [loading, setLoading] = useState(false)


  useEffect(() =>{
    loadMovies();
  }, [])

 

  const loadMovies = async () =>{
    try{
    setLoading(true);
    let response = await fetch('https://apddi.b7web.com.br/cinema/')
    let json  = await response.json();
    setLoading(false);

    setMovies(json)

    }catch(e){

      setLoading(false)
      window.alert("ERROR AO CARREGAR A PAGINA")
      console.log(e);

    }
    
  


    
  }

  return(
    <div>
      <button className='block bg-blue-400 p-4 rounded' onClick={loadMovies}>Carregar filmes</button>
     




      {loading && 
        <div>Carregando...</div>
      
      
      }


      {!loading && movies.length>0 &&
      
        <div>total de filmes: {movies.length}</div>
      
      }

      {!loading && movies.length > 0 &&

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


      {!loading && movies.length ===0 &&

        <div>
          Tente novamente mais tarde
        </div>        
      
      
      
      }

    </div>

      
  )

}

*/




/*


// LENDO INFORMAÕES COM JSONPLACEHOLDER


const App =() =>{

  const [posts, setPosts] = useState<Post[]>([])

  const [loading, setLoading] = useState(false)


  useEffect(() =>{
    loadPost();
  }, [])


  const loadPost = async () => {
      let response = await fetch('https://jsonplaceholder.typicode.com/posts')
      let json = await response.json();

      setPosts(json)
  }

 

 

  return(
    <div className='p-5'>
      
     




      {loading && 
        <div>Carregando...</div>
      
      
      }


     

      {!loading && posts.length > 0 &&

        <>

                <div >

                {posts.map((item, index) =>(
                  <div key={index} className=' my-4'>

                    <h4 className='font-bold'>{item.title}</h4>
                    <small>#{item.id} - Usuário : {item.userId} </small>
                    <p>{item.body}</p>
                    
                  </div>
                ))}

                </div>
                
        
        
        
        </>
      
      
      
      }


      {!loading && posts.length === 0 &&


          <div>Nao ha posts para exibir</div>
      
      
      
      }

    </div>

      
  )

}


*/






const App =() =>{

  const [posts, setPosts] = useState<Post[]>([])

  const [loading, setLoading] = useState(false)


  


  useEffect(() =>{
    loadPost();
  }, [])


  const loadPost = async () => {
      setLoading(true)
      let json = await api.getAllPosts()

      setLoading(false)
      setPosts(json)

      
      
  }


  



  const handleAddPost  = async (title:string, body:string) =>{

    let json = await api.addNewPost(title, body, 1)

    if(json.id){
      alert('post adicionado com sucesso')
    }else{
      alert("ERROR")
    }


    

     // console.log(json)

    
  }

 

 

  return(
    <div className='p-5'>
      
     




      {loading && 
        <div>Carregando...</div>
      
      
      }


      <PostForm onAdd={handleAddPost}/>


      


     

      {!loading && posts.length > 0 &&

        <>

                <div >

                {posts.map((item, index) =>(

                  <PostItem data={item} />
                 
                ))}

                </div>
                
        
        
        
        </>
      
      
      
      }


      {!loading && posts.length === 0 &&


          <div>Nao ha posts para exibir</div>
      
      
      
      }

    </div>

      
  )

}




export default App;


//https://api.b7web.com.br/cinema