import {useState} from 'react';

import * as C from './App.styles'
import {Item} from './Types/item'
import {ListItem} from './components/ListItem'
import {AddArea} from './components/AddArea'

const App = () =>{

  const[list, setList] = useState<Item[]>([
    {
      id:1,
      name: 'comprar um pao na padaria',
      done: false
    },
    {
      id: 2,
      name:'comprar um bolo na padaria',
      done: true
    }
  ]);


  const handleAddTask = (taksName: string) =>{
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      name: taksName,
      done: false,
    });

    setList(newList);

  }



  return(
    <C.Container>
      <C.Area>
        <C.Header>Lista de tarefas</C.Header>


        <AddArea onEnter={handleAddTask} />


        {list.map((item, index) =>(
          <ListItem key={index} item={item}/>
        ))}




      </C.Area>
    </C.Container>
  );
}

export default App;