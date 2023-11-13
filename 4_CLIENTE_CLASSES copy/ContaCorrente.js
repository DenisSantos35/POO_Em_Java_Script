import { Cliente } from "./Cliente.js";

export class ContaCorrente {  
    static numeroDeContas = 0;  
    agencia;
    #cliente;

     // atributos privados
     #saldo = 0;

    constructor(agencia, cliente){
        this.agencia = agencia;
        this.cliente = cliente;
        ContaCorrente.numeroDeContas += 1;
    }   

    // setters e guetters
     set cliente(cliente){
         if(cliente instanceof Cliente){
             this.#cliente = cliente
         }        
     }

     get cliente(){
        return this.#cliente;
     }

     get saldo(){
        return this.#saldo;
    }    

    //metodos da conta corrente
    sacar(valor){
        if(this.#saldo >= valor){
            this.#saldo -= valor
            return valor;
        }
    } 

    depositar(valor){
        if(valor <= 0) return;
        this.#saldo += valor
    }

    transferir(valor, conta){        
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);    
    }

    get toString(){
        return `{conta numero: ${ContaCorrente.numeroDeContas},{ Agencia: ${this.agencia}, Saldo: ${this.saldo},} Conta: ${this.cliente.toString}}`
    }  

}
