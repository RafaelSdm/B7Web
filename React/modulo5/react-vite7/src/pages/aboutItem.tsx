import {useParams, useNavigate} from 'react-router-dom'


export const AboutItem = () =>{

    const params = useParams();
    const navigate = useNavigate();

    const handleBackButton = () =>{
        navigate(-1);
    }

    const handleBackHome = () =>{
        navigate('/')
    }

    return(
        <div>
            Pagina sobre {params.slug?.toUpperCase()} ({params.slug?.length} letras)
            <hr />
            <button onClick={handleBackButton}>Voltar</button>
            <br />
            <button onClick={handleBackHome}>Voltar para a pagina home</button>
        </div>
    )
}