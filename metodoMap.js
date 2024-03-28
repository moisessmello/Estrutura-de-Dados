function isEven(x){
    // devolve true e x for múltiplos de 2.
    //console.log(x);
    return (x % 2 === 0) ? true : false;
}

let numbers = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ,12, 13, 14, 15];

const myMap = numbers.map(isEven);

console.log(myMap);