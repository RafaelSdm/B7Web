import React, {useContext, useState} from 'react'
import {Link} from 'react-router-dom'

import {Context} from '../contexts/Context'

/*


export const SignUp = () =>{
    const {name, age} = useContext(Context)
    return(
        <div>
            Tela de sign up de {name} que tem {age} anos
            <hr />
            <Link to='/exibir'>Ir para showData</Link>
        </div>
    )

}

*/


/*

export const SignUp = () =>{
    const {state, dispatch} = useContext(Context)

    const handleChnageName = () =>{
        dispatch({
            type: 'CHANGE_NAME',
            payload: {
                name: 'Rafael Damasceno'
            }
        })
    }
    return(
        <div>
            Tela de sign up de {state.user.name} que tem {state.user.age} anos
            <br />
            <button onClick={handleChnageName}>Trocar nome para Rafael Damasceno</button>
            <hr />
            <Link to='/exibir'>Ir para showData</Link>
        </div>
    )

}

*/

export const SignUp = () =>{
    const {state, dispatch} = useContext(Context)
    const [nameInput, setNameInput] = useState(state.user.name)
    const [ageInput, setAgeInput] = useState(state.user.age)


    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setNameInput(e.target.value)

    }

    const handleAgeChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setAgeInput(parseInt(e.target.value))

    }


    const handleSave = () =>{
        dispatch({
            type: 'CHANGE_NAME',
            payload: {
                name: nameInput
            }
        });

        dispatch({
            type: 'CHANGE_AGE',
            payload: {
                age: ageInput
            }
        })
    }


    return(
        <div>
            <h3>Tela de SignUp ({state.theme.status})</h3>

            <input type="text" name="" placeholder='Informe um nome' value={nameInput} onChange={handleNameChange} id="" />

            <input type="number" name="" placeholder='Informe a idade' value={ageInput} onChange={handleAgeChange} id="" />

            <button onClick={handleSave}>Salvar</button>
            <br />
            <Link to='/exibir'>Ir para showData</Link>
        </div>
    )

}

