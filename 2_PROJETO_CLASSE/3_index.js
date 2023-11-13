class Cliente{
    nome;
    cpf;
}

class ContaCorrente {
    agencia;
    #saldo = 0;

    sacar(valor){
        if(this.#saldo >= valor){
            this.#saldo -= valor
            return valor;
        }
    }

    depositar(valor){
        if(valor <= 0) return;
        this.#saldo += valor
        return valor
    }
    get mostrarSaldo(){
        return this.#saldo;
    }
}

const cliente1 = new Cliente();
const cliente2 = new Cliente();

cliente1.nome = "Ricardo";
cliente1.cpf = 11122233309;


cliente2.nome = "Alice";
cliente2.cpf = 88822233309;

const contaCorrenteRicardo =new ContaCorrente();
contaCorrenteRicardo.agencia = 1001;

const contaCorrenteAlice = new ContaCorrente();
contaCorrenteAlice.agencia = 1001;
contaCorrenteAlice.saldo = 1000;

// depositar
contaCorrenteRicardo.depositar(100);
contaCorrenteRicardo.depositar(200);
contaCorrenteRicardo.depositar(200);
contaCorrenteRicardo.depositar(200);
contaCorrenteRicardo.depositar(200);
contaCorrenteRicardo.depositar(-1);


//sacar
const valorSacado = contaCorrenteRicardo.sacar(50);
console.log(`Você sacou ${valorSacado} R$`);

// contaCorrenteRicardo.saldo += 100;
// contaCorrenteRicardo.saldo += 200;
// contaCorrenteRicardo.saldo += -1;

//let valorSacado = 200;

// if(valorSacado < valorSacado){
//     contaCorrenteRicardo.saldo -= valorSacado;
// }else{
//     console.log("Saldo insuficiente")
// }


console.log(cliente1);
console.log(`Seu saldo atual é ${contaCorrenteRicardo.mostrarSaldo}`);


