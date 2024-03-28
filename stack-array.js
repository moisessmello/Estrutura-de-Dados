class Stack {
    constructor ( ){
        this.items = [];
    }
    push(element){
        // adiciona um novo ítem a pilha
        this.items.push(element);
    }
    pop(){
        // remove o item do topo da pilha
        return this.items.pop();
    }
    peek(){
        // devolve o elemnto qu está no topo da pilha
        return this.items[this.items.length - 1];
    }
    isEmpty(){
        //informar se a pilha está vazia ou não
        return this.items.length === 0;
    }
    clear(){
        // limpa a pilha
        this.items = [];
    }
    size(){
        // informar o tamanho da pilha
        return this.items.length;
    }
    print(){
        // imprime a pilha no console
        console.log(this.items.toString());
    }
}






// criando (instancia) um objeto stack (pilha)
const stack = new Stack();
// verificando se apilha steck está vazia
console.log(stack.isEmpty()); // exibe true

// adicionando elementos notopo da pilha
stack.push(5);
stack.push(8);
//exibindo o elemento do topo da pilha
console.log(stack.peek()); // exibe 8

// vamos adicionar outro elemento na pilha
stack.push(11);
// exibindo o tamnho da pilha
console.log(stack.size()); // exibe 3
//  verificando se a pilha está vazia
console.log(stack.isEmpty()); // exibe false
// por fim, vamos acrescentar outro elemento
stack.push(15);
// mostrando todos os elementos da pilha
stack.print();
// retirando dois elementos do topo da pilha
stack.pop();
stack.pop();
stack.print();


// Empilha e desempilha



var pilha = new Stack();
console.log(pilha.isEmpty());
pilha.push(5);
pilha.print();
pilha.push(8);
pilha.print();
pilha.push(11);
pilha.print();
pilha.push(15);
pilha.print();
pilha.pop();
pilha.print();
pilha.pop();
pilha.print();
pilha.pop();
pilha.print();
pilha.pop();
pilha.print();
console.log(pilha.isEmpty());


//exercicio 8 da lista 2

function decimalToBinary(decNumber){
    var restStack = new Stack(),
    rest,
    binaryString ='';

    while(decNumber > 0) {
        // arredonda para baixo e atribui o resto da divisão por 2
        rest = Math.floor(decNumber % 2);
        // acrescenta na pilha
        restStack.push(rest);
        // arredonda pra baixo e atribui o resultado da divisão por 2
        decNumber = Math.floor(decNumber / 2);
    }
    while(!restStack.isEmpty()) {
        //retira o último da pilha e acrescenta à binaryString no formato
        binaryString += restStack.pop().toString();
    }
    return binaryString;
}
console.log(decimalToBinary(10));
console.log(decimalToBinary(25));
console.log(decimalToBinary(233));
console.log(decimalToBinary(1000));