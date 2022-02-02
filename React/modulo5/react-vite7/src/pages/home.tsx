import {Link} from 'react-router-dom'

export const Home = () =>{
    return(
        <div>
            Pagina HOME
            <br />
            Pagina sobre: - <Link to="/about">Pagina about</Link>
        </div>
    )

}