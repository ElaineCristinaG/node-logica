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
class structList{
    constructor(value){ this.structList = [] }
        addList(value){
            this.structList.push(value);
             return this.structList;
        }
        removeFila(){
            let temp = []
            for(let i=0;i<this.structList.length;i++){
                if(i != 0){
                    temp.push(this.structList[i]);
                }
            }
            this.structList = temp;

           return this.structList
        }
        removePilha(){
        let temp = [];
        let size = this.structList.length -1;
        for(let i = 0; i < size; i++){
            temp[i]=(this.structList[i]);  
            }
            this.structList = temp;
            return this.extructList
        }
}

function createList(sizeList){
    const list = new structList();
    for(let i= 0 ; i < sizeList; i++){
    list.addList(i);
    }
    return list;
}

console.log("*** Exercício de Filas e Pilhas ***")

console.log("*** Cria uma extrutura de Lista ***")
let extruct = createList(20);
console.log(extruct.structList);

console.log("*** Adiciona um elemento***")
console.log(struct.addList(56));

console.log("*** Remove Fila - First In First Out - FIFO ***")
console.log(struct.removeFila())

console.log("*** Remove Pilha - Last In First Out - LIFO ***")
console.log(struct.removePilha());


