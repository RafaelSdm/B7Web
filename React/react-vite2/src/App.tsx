const App = () =>{


  const handleButtonClick = () => {

    window.alert("o botao foi clicado!")

  }

  return(

    <div>
      <button onClick={handleButtonClick} >Clique Aqui</button>
    </div>

  );
}

export default App;