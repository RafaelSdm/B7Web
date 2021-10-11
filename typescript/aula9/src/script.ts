//let idade: string | number = 90;

//idade = 'rafael';

function mostrat(idade: number | string){
    console.log(`minh aidade é ${idade}`);

    if(typeof idade === 'string'){
        console.log(idade.toUpperCase());
    }else{
        console.log(idade)
    }
}


mostrat(9);
mostrat('3')




