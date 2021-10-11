function mostrar(texto: string, alinhamento: 'left' | 'right' | 'center'){

     return `<div style="text-align: ${alinhamento}">${texto}</div> `



}


mostrar('rafael', 'left');
mostrar('rafael', 'right');
//mostrar('jaoo', 'abc');


function temNome(nome: string): true | false{
    if(nome !== ''){
        return true
    }else{
        return false
    }
}


function configurar(props: {width: number, height: number}| 'auto'){

}


configurar({
    width: 100,
    height: 200
})

configurar('auto')
