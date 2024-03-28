const averageTemp = [];
averageTemp[0] = 31.9;
averageTemp[1] = 30.7;
averageTemp[2] = 28.5;
averageTemp[3] = 27.8;
averageTemp[4] = 25.6;


console.log('Conteúdo do array: ', averageTemp);
console.log('Média da temperatura de março: ' , averageTemp[2]);
console.log('Média da temperatura de janeiro: ', averageTemp[0]);


// também podemos inicializar o array com alguns elementos assim
let daysOfWeek =['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday','Saturday'];

// percorrendo cada um dos elementos do array
for (let i = 0; i < daysOfWeek.length; i++){
    console.log(daysOfWeek[i]);
}

// Armazenando a série fibonacci no array com 20 elementos
const fibonacci = [];
fibonacci[0] = 1;
fibonacci[1] = 1;
for (let i = 2; i < 20; i++) {
    fibonacci[i] = fibonacci[i -1] + fibonacci[i -2];
}
//
//
console.log(fibonacci.join('  '));
//
for (let i = 0; i < fibonacci.length; i++) {
    console.log(fibonacci[i]);
}

//
let numbers = [0,1,2,3,4,5,6,7,8,9];

numbers[numbers.length] = 10;

numbers.push(11);
numbers.push(12, 13);

function insertFirstPosition(value) {
    for (let i = numbers.length; i>=0; i++) {
        numbers[i] = numbers[i - 1];
    }
    numbers[0] = value
};
insertFirstPosition(-1);

console.log(numbers.join(', '));


///
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

numbers.unshift(-1);
numbers.unshift(-2);
numbers.unshift(-4, -3);

console.log(numbers.join(', '));



