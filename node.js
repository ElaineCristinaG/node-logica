export class Fila{
    constructor(nome){
        this.nome = 0;
        this.fila = [];
    }

    // Método para adicionar um elemento à fila
    add(elemento){
        this.fila.push(elemento);
    }

    // Método para remover um elemento da fila
    remove(){
        return this.fila.shift();
    }
}

export class Pilha{
    constructor(nome){
        this.nome = 0;
        this.pilha = [];
    }

    // Método para adicionar um elemento à pilha
    push(elemento){
        this.pilha.push(elemento);
    }

    // Método para remover um elemento da pilha
    pop(){
        return this.pilha.pop();
    }

}
class ExtructList{
    constructor(value){ this.extructList = [] }
        addList(value){
            this.extructList.push(value);
             return this.extructList;
        }
        removeFila(){
            let temp = []
            for(let i=0;i<this.extructList.length;i++){
                if(i != 0){
                    temp.push(this.extructList[i]);
                }
            }
            this.extructList = temp;

           return this.extructList
        }
        removePilha(){
        let temp = [];
        let size = this.extructList.length -1;
        for(let i = 0; i < size; i++){
            temp[i]=(this.extructList[i]);  
            }
            this.extructList = temp;
            return this.extructList
        }
}

function createLista(sizeList){
    const list = new ExtructList();
    for(let i= 0 ; i < sizeList; i++){
    list.addList(i);
    }
    return list;
}

console.log("*** Exercício de Filas e Pilhas ***")

console.log("*** Cria uma extrutura de Lista ***")
let extruct = createLista(20);
console.log(extruct.extructList);

console.log("*** Adiciona um elemento***")
console.log(extruct.addList(56));

console.log("*** Remove Fila - First In First Out - FIFO ***")
console.log(extruct.removeFila())

console.log("*** Remove Pilha - Last In First Out - LIFO ***")
console.log(extruct.removePilha());


