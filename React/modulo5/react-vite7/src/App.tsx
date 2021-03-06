import {MainRoutes} from './Routes/MainRoutes'



/*

// CRIANDO ROTAS SIMPLES




const App = () =>{

  return(
    <div className="p-4" >
      <header>
        <h1>titulo do site</h1>
      </header>
      <hr />
      <div className="py-4">
        
        <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>


      </div>
      <hr />

      <footer>todos os direitos reservados</footer>

      
    </div>
  )


}

*/


/*

// CRIANDO GRUPO DE ROTAS

const App = () =>{

  return(
    <div className="p-4" >
      <header>
        <h1>titulo do site</h1>
      </header>
      <hr />
      <div className="py-4">
        
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/about/rafael" element={<AboutRafael/>}/>
          <Route path="/about/jose" element={<AboutJose/>}/>
        </Routes>


      </div>
      <hr />

      <footer>todos os direitos reservados</footer>

      
    </div>
  )


}

*/


/*

// ROTAS DE ERRO 404

const App = () =>{

  return(
    <div className="p-4" >
      <header>
        <h1>titulo do site</h1>
      </header>
      <hr />
      <div className="py-4">
        
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/about/rafael" element={<AboutRafael/>}/>
          <Route path="/about/jose" element={<AboutJose/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>


      </div>
      <hr />

      <footer>todos os direitos reservados</footer>

      
    </div>
  )


}

*/


/*

// criando grupo de rotaas


const App = () =>{

  return(
    <div className="p-4" >
      <header>
        <h1>titulo do site</h1>
      </header>
      <hr />
      <div className="py-4">
        
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/about/rafael" element={<AboutRafael/>}/>
          <Route path="/about/jose" element={<AboutJose/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>


      </div>
      <hr />

      <footer>todos os direitos reservados</footer>

      
    </div>
  )


}

*/


/*

const App = () =>{
  return(

    <div className="p-4" >
    <header>
      <h1>titulo do site</h1>
    </header>
    <hr />
    <div className="py-4">
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<RequireAuth><About/></RequireAuth>}/>
        <Route path="/about/rafael" element={<AboutRafael/>}/>
        <Route path="/about/jose" element={<AboutJose/>}/>
        <Route path="/about/:slug" element={<AboutItem/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>


    </div>
    <hr />

    <footer>todos os direitos reservados</footer>

    
  </div>

  )
}

*/

const App = () =>{
  return(

    <div className="p-4" >
    <header>
      <h1>titulo do site</h1>
    </header>
    <hr />
    <div className="py-4">
      
      <MainRoutes/>


    </div>
    <hr />

    <footer>todos os direitos reservados</footer>

    
  </div>

  

  )
}

export default App;