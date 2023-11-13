export class Cliente{
    nome;
    #cpf;

    //contrutor
    constructor(nome, cpf){
        this.nome = nome
        this.#cpf = cpf //aqui deixamos receber uma unica vez
    }

    //getter and setter
    get cpf(){
        return this.#cpf
    }

    get toString(){
        return `{Nome: ${this.nome} Cpf: ${this.cpf}}`
    }
}