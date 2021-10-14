import { type } from "os"

type Product = {
    title: string,
    price: number
}
const data: Product[] = [
    {title: 'Produto X', price: 10},
    {title: 'Produto y', price: 20},
    {title: 'Produto w', price: 40},
    {title: 'Produto g', price: 60}
]


export const Product = {
    getAll: (): Product[] =>{
        return data;
    },

    getPriceAfter: (price: number): Product[] => {
        return data.filter(item =>  {
            if(item.price >= price){
                return true;
            }else{
                return false;
            }
        });
    }

}