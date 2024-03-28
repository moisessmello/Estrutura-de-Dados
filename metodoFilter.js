// Usaremos um array com os valores de 1 a 15,
// além de uma função de devolverá true para múltiplo de 2(par)
//  e false caso contrário (ímpares)
let numbers = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ,12, 13, 14, 15];

function isEven(x){
    // devolve true e x for mútiplo de 2.
    // console.log(x);
    return (x % 2 === 0) ? true : false;

        
}
const evenNumbers = numbers.filter(isEven);

console.log(evenNumbers);