/* eslint-disable jsx-a11y/alt-text */
import React from "react";


/*
class App extends React.Component{

  render(){
    return <h1>testando</h1>
  }
}
*/

/*

function App(){
  return <h1>testando 2,3,4</h1>
}

*/


/*

let App = () =>{
  return <h1>testando 3 vez</h1>
}


*/



function Avatar(props){
  return (
    <div>
    
        <img src={props.url} alt={props.name}/>
        <br/>
        <span>{props.name}</span>
    </div>
  );
    

}



function App(){

  

  
  return <>

    <Avatar url='https:/www.google.com.br/google.jpg' name='Rafael' />
    
    
    
   

  </>;
}

export default App;