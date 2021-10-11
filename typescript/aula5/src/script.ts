function firstLetterUpperCase(nome: string): string{

    let firstLetter = nome.charAt(0).toUpperCase();

    return firstLetter+nome.substring(1);

}


let nome: string = firstLetterUpperCase('rafael');



function somar(n1: number,n2 :number): number{
    return n1+ n2;
}


let res = somar(89,99);