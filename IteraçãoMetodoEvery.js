function isEven(x){
        // devolve true e x for múltiplo de 2.
        console.log(x);
        return (x % 2 === 0) ? true : false;
}
let numbers = [ 2, 4, 6, 7, 8, 9, 10, 11 ,12, 13, 14, 15];

numbers.every(isEven);
// o método itera pelos elementos do array até devolver false