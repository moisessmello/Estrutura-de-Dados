let numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ,12, 13, 14, 15];

for (const n of numbers)  {
    console.log(n % 2 === 0 ? n + " é par" : n + " é ímpar");
}