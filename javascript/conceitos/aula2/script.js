function digitou(evento){
    console.log("voce digitou")
    console.log(evento)


    if(evento.keyCode == 13){
        let texto = document.getElementById("campo").value;

        window.alert("seja bem vindo " + texto + "!")
    }

}


function apertou(){
    console.log("voce apertou a tecla");
}