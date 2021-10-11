function firstLetterUpperCase(nome: string){

    let firstLetter = nome.charAt(0).toUpperCase();

    return firstLetter+nome.substring(1);

}


firstLetterUpperCase('rafael');

