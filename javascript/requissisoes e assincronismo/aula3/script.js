function pegarTemp(){
    return new Promise(function (resolve, reject){
        console.log("pegando temepatura");

        setTimeout(function(){
            resolve('40 na sombrea');

        },2000);
    });
}


let t = pegarTemp();

console.log(t);

t.then(function(resultado){
    console.log(`temp: ${resultado}`);

})

t.catch(function(error){
    console.log(`ERROR`);
})