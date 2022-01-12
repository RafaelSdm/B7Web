

type Props = {
    text: string;
    clickFn: () => void;
}


export const Botao = ({text, clickFn}: Props) =>{
    const handleClick = () => {
        alert('clicou');
    }
    return(
        <button onClick={clickFn}>{text}</button>
    )
}