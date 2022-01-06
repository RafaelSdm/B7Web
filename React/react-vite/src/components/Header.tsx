

type Props = {
    title?: string;
}

 export const Header = ({title}:Props) =>{
    return (

        <header>
            <h1>Titulo da pagina</h1>
            <h1>{title}</h1>
            <hr />
        </header>
    );
}


