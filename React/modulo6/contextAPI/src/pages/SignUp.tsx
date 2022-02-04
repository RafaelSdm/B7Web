import {useContext} from 'react'
import {Link} from 'react-router-dom'

import {Context} from '../contexts/Context'

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