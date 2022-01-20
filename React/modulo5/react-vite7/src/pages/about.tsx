import {Link} from 'react-router-dom'

export const About = () =>{
    return(
        <div>
            <ul>
                <li><Link to="/about/rafael">Rafael</Link></li>
                <li><Link to="/about/jose">Jose</Link></li>
            </ul>
        </div>
    )
}