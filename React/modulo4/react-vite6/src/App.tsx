
import {useReducer} from 'react'



type reducerState = {
  count: number;
}

type reducerAction = {
  type: string;


}

const initialState = {count:0};


const reducer = (state:reducerState, action: reducerAction) =>{

  switch(action.type){
    case 'ADD':
      return {...state, count: state.count + 1};
      break;

    case 'DEL':
      return{...state, count: state.count - 1};
      break;

    case 'RESET':
      return initialState;
      break;
  }



  return state;


}




const App = () =>{

  const [state, dispatch] = useReducer(reducer, initialState)


  return(
    <div className="bg-blue-500 p-5">

      Contagem : {state.count}
      <hr />
      <button className='p-3 border bg-white' onClick={() => dispatch({type: 'ADD'}) }>Adiconar</button>
      <button className='p-3 border bg-white' onClick={() => dispatch({type: 'DEL'}) }>Deletar</button>
      <button className='p-3 border bg-white' onClick={() => dispatch({type: 'RESET'}) }>Resear</button>


      
    </div>
  )
}



export default App;