
import {Fragment} from 'react'



type Props ={
    url: string;
    legend: string;
}

export const Photo = ({url, legend}: Props) =>{
    return (

        <Fragment>

            <img src={url} alt="" />
            <p>{legend}</p>
        
        
        </Fragment >
           
        


    );
}