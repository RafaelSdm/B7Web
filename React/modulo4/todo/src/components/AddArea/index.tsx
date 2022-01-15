import * as C from './styles'
import {useState, KeyboardEvent} from 'react'

type Props = {
    onEnter: (taskname: string) => void
}

export const AddArea = ({onEnter}:Props) =>{
    const[inputText, setInputText] = useState('');

    const handleKeyUp = (e: KeyboardEvent<HTMLInputElement>) =>{
        if(e.code == 'Enter'  && inputText !== ''){
            onEnter(inputText)
            setInputText('');

        }

    }


    return(
        <C.Container>
            <div className='image'>+</div>
            <input value={inputText} onChange={e=> setInputText(e.target.value) }  type="text" placeholder='informe uma tarefa' onKeyUp={handleKeyUp}/>
            
        </C.Container>
    )
}