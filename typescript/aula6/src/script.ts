let nomes = ['rafael', 'luiz','leao',1,2,3,4];


nomes.forEach(function(nome){
    if(typeof nome === 'string'){

        console.log(nome.toUpperCase());

    }else{
        console.log(nome);
    }

   
   

})