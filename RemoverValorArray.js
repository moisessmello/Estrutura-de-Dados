let numbers = [-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

Array.prototype.reIndex = function(myArray) {
    const newArray = [];
    for (var i = 0; i < myArray.length; i++) {
        if (myArray[i] !== undefined) {
            newArray.push(myArray[i]);
        }
    }
    return newArray;
}
//remove a primeira posição manualmente e executareIndex
Array.prototype.removeFirstPosition = function() {
    for (var i=0; i < this.length; i++) {

    }
    return this.reIndex(this);
}
numbers = numbers.removeFirstPosition();
// apresentando o array numbers após a execução do método
console.log(numbers);