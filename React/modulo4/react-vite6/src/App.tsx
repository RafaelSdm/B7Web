
import {ChangeEvent, useReducer, useState} from 'react'

import {useContagem} from './hooks/contage'

import {usePeople} from './hooks/people'






/*

//ÁPLICANDO REDUCER

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

*/




/*
// USANDO O REDUCER SEPARADO

const App = () =>{

  const [state, dispatch] = useContagem();


  return(
    <div className="bg-blue-500 p-5">

      Contagem : {state.count}
      <hr />
      <button className='p-3 border bg-white' onClick={() => dispatch({type: 'ADD'}) }>Adiconar</button>
      <button className='p-3 border bg-white' onClick={() => dispatch({type: 'DEL'}) }>Deletar</button>
      <button className='p-3 border bg-white' onClick={() => dispatch({type: 'RESET'}) }>Resetar</button>


      
    </div>
  )
}

*/








const App = () =>{
  const [list, dispatch] = usePeople();
  const [nameInput, setNameInput] = useState('')

  const handleAddButton = () =>{
      if(nameInput){
        dispatch({
          type: 'ADD',
          payload:{
            name: nameInput
          }
        })

        setNameInput('');
      }
  }


  const handleInputChange =(e: ChangeEvent<HTMLInputElement>) =>{
    setNameInput(e.target.value);
  
  }


  const deletePerson = (id:string) =>{
    dispatch({
      type:'DEL',
      payload:{
        id
      }
    })
  }

  const handleOrderButton = () =>{
    dispatch({
      type: 'ORDER'
    })
  }




  return(
    <div className='p-5'>

      <input className='border-2' type="text" value={nameInput} onChange={handleInputChange} name="" id="" />
      <button onClick={handleAddButton}>Adicionar</button>





    <hr />

    <button onClick={handleOrderButton}>Ordenar</button>
    <br />

      Lista de pessoas:
      <ul>
        {list.map((item, index) => (
          <li key={index}>
            {item.name} 
            <button onClick={() => deletePerson(item.id)}> [ Deletar ]</button>

          </li>

        ))}

      </ul>






    </div>
  )
}
export default App;