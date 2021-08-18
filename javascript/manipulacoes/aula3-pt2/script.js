let lista = [3,45,67,8,1]

let lista2 = [];





lista2 = lista.findIndex(function(item, index){
    return (item==8)? true : false
})

/*

lista2 = lista.find(function(item, index){

    if(item == 45){
        return true
    }else{
        return false
    }
})

*/



/*

lista2 =lista.every(function(item){

    if(item > 20){
        return true
    }else{
        return false;
    }

})

*/




/*

lista2 = lista.filter(function(item){
    if(item < 20){
        return true
    }else{
        return false
    }
})

*/

/*
let lista2 = [];

lista2 = lista.map(function(item){
    return item *2;

})

for(let i in lista){
    lista2.push(lista[i]*2);
}

*/

let res = lista2

console.log(res)


let lista3 =[
    {id:1, nome: 'rafael', sobrenome:'damasceno'},
    {id:2, nome: 'jao', sobrenome:'silva'},
    {id:3, nome: 'kleber', sobrenome:'dmefeifj'}

]


let pessoa = lista3.find(function(item){
    return (item.sobrenome == 'silva')? true : false
})


let res2 = pessoa;

console.log(res2)