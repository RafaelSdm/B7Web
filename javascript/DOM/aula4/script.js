function alterar(titulo){
  //  titulo = "trocado com sucesso";
    document.getElementById('titulo').innerHTML = titulo
    document.getElementById('campo').value = titulo
}

alert("funcioonou!!!!");

alterar("trocado com sucesso!!")

function soma(x, y){
    let somar = x + y;
  //  document.getElementById('campo').value = somar

    return somar;
    
}

soma(5,5);

var resultado = soma(10,14);
document.getElementById('campo').value = resultado;
