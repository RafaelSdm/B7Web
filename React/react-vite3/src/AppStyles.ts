import styled from "styled-components";





type ContainerProps = {
    bgColor: string;
}


export const Container1 = styled.div<ContainerProps>`

    background-color: ${(props) => props.bgColor};
    color: white;
    padding: 20px;



    span{
        font-weight: bold;
        color: black;

        a{
            color: gold;
        }
    }

    .link{
        color: red;

        &:hover{
            color: #ff0000
        }
    }

    .link:hover{
        color: pink;
    }



`;


type BotaoProps = {
    bg: string;
    small?: boolean;
}

export const Botao11= styled.button<BotaoProps>`
    
font-size: ${(props) => props.small ? '15px': '40px'};
padding: 20px;
background-color: ${(props) => props.bg}


`;