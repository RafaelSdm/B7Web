import {useContext} from 'react'
import {Link} from 'react-router-dom'
import {Context} from '../contexts/Context'


/*
export const ShowData = () =>{
    const {name, age} = useContext(Context)
    return(
        <div>
            tela do showData para o usuario {name} que tem {age} anos
            <hr />
            <Link to='/'>Voltar pra SignUp</Link>
        </div>
    )
}

*/

export const ShowData = () =>{
    const {state, dispatch} = useContext(Context)
    return(
        <div>
            <h3>Tela showData</h3>

            {state.user.name &&
                <>
                    usuario: {state.user.name} tem {state.user.age} anos
                     <hr />

                </>
                
                
            
            }

            {!state.user.name && 'Nao possui nenhuma informacao no momento'}
            <hr />
            
          
            <Link to='/'>Voltar pra SignUp</Link>
        </div>
    )
}

