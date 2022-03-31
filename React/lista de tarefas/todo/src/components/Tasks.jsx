import React from "react";
import Task from "./Task";
import './Task.css'

export const Tasks = ({tasks}) => {

    return(
        < >

            {tasks.map((task) =>  (
                <Task task={task}/>
            ))}
        
        
        </>
        
    )
}