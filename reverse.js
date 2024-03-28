let numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ,12, 13, 14, 15];

numbers.reverse();
console.log('Array numbers com reverse: ' + numbers.join(' ,'));

numbers.sort();
console.log('Array numbers com sort: ' + numbers.join(' ,'));

function compare(a, b) {
    if (a < b) {
        return -1;
    }
    if (a > b) {
        return 1;
    }
    // a deve ser igual a b
    return 0;
}
numbers.sort(compare);
console.log('Array numbers cexecutando a função compare: ' + numbers.join(' ,'));
