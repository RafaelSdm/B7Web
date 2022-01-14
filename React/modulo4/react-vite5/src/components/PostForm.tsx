
import {useState, ChangeEvent} from 'react'


type Props = {
    onAdd:( title: string, body: string ) => void;
}

export const PostForm = ({onAdd}:Props) =>{

    const [addTitle, setAddTitle] = useState('');
    const [addBodyText, setAddBodyText] = useState('');


    const handleAddTitle = (e: ChangeEvent<HTMLInputElement>) =>{
        setAddTitle(e.target.value)
    
      }
    
    
      const handleAddBody = (event: ChangeEvent<HTMLTextAreaElement>) =>{
        setAddBodyText(event.target.value)
    
      }


      const handleAddClick = () =>{

            if(addTitle && addBodyText){
                onAdd(addTitle, addBodyText)
            }else{
                window.alert("preencha os campos");
            }

      }
    

    return(

        
      <fieldset className='border-2 mb-5 p-3'>
      <legend>Adicionar novo post</legend>

      <input value={addTitle} onChange={handleAddTitle} className='block border' type="text" name="" placeholder='informe um titulo' id="" />


      <textarea value={addBodyText}  onChange={handleAddBody} className='block border'></textarea>


      <button className='border mt-2' onClick={handleAddClick} >Adicionar</button>
    </fieldset>

    )

}