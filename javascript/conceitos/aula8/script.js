//for loop
//for loop array

let texto = '';


for(let i=0;i<50;i++){

    texto = texto + i + '<br>'
    

}
document.getElementById('demo').innerHTML = texto


let carros = ['uno', 'palio', 'fox', 'ceelta'];


let html = '<ul>'

for(let j in carros){
    html += '<li>' + carros[j] + '</li>'
}






html += '</ul>';


document.getElementById('demo2').innerHTML = html

