import {useNavigate, Navigate} from 'react-router-dom'
type Props ={
    children: JSX.Element
}


export const RequireAuth = ({children}: Props) => {
   // const navigate = useNavigate()
    const isAuth = true;


    if(isAuth){
        return children;
    }else{
        
        return <Navigate to="/login"/>;
    }


    
}