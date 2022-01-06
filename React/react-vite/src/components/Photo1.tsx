import {ReactNode} from 'react'


type Props = {
    legend: string;
    children: ReactNode;
}


export const Photo1 = ({legend, children}:Props) =>{
    return(

        <>

            {children}
            <p>{legend}</p>


        </>

    );
}