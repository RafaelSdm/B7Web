import React, { useState } from "react";
import './App.css'
import AddTask from "./components/AddTask";
import {Tasks} from './components/Tasks'
import {v4 as uuidv4} from 'uuid'


const App = () =>{

  //let message =' teste de troca de mensagem'
  const [tasks, setTasks] = useState([
    {
      id: '1',
      title: 'Estudar programacao',
      completed: false,
    },
    {
      id: '2',
      title: 'Ler livros',
      completed: true,
    }

  ])


  const handleTaskAddition = (taskTitle) =>{

    const newTasks = [... tasks,{
      title: taskTitle,
      id: uuidv4(),
      completed: false
    },
  
  ];

  setTasks(newTasks)

  }

  return(
    <div className="container" >

      <AddTask handleTaskAddition={handleTaskAddition} />

      <Tasks tasks={tasks} />

    </div>
  )


}


export default App;
