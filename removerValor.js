// vamos considerar o seguinte array
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8 ,9];
//Para remover um valor do início do array, podemos:
for (var i=0; i < numbers.length; i++) {
    numbers[i] = numbers [i+1];
}
//
//
//
console.log(numbers);