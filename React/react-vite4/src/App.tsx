
/*

//PRIMEIROS PASSOS COM O TWICSS


const App = () =>{
  return(

    <div>

    <div className="bg-blue-900 text-red-300 p-6">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione totam quam amet eligendi id reiciendis odio molestiae, maiores dolores voluptates voluptate porro nihil non asperiores sit velit inventore! Sed, expedita.
    </div>


    <div className="bg-red-400 text-white px-6 py-5 mt-8 font-bold" >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, ipsum cum. Architecto, delectus ex sed saepe, quas rerum suscipit quasi placeat labore dolores ipsum laboriosam consequuntur libero. Nesciunt, placeat doloremque.
    </div>

    <button className="bg-green-300 text-black p-2 rounded-xl">clique</button>


    </div>

   
  )
}



*/


const App =  () =>{
  return(
    <div className="bg-blue-800 text-white p-4 text-2xl font-bold flex flex-col text-center md:flex-row md:text-green-500 lg:text-black lg:justify-between">
      Texto de exemplo

      <button className="bg-green-300 text-black p-2 rounded-xl mt-3 md: ml-3 md:mt-0">Clique aqui</button>
    </div>
  )
}

export default App;
