import {Routes, Route} from 'react-router-dom'
import {Home} from './pages/home'
import {About}  from './pages/about'

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


export default App;