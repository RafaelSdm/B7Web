import {useContext} from 'react'
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