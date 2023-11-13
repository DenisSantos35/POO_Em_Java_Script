class Cliente{
    nome;
    cpf;
}

class ContaCorrente {
    agencia;
    saldo;

    sacar(valor){
        if(this.saldo >= valor){
            this.saldo -= valor
        }
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
contaCorrenteRicardo.saldo = 0;

const contaCorrenteAlice = new ContaCorrente();
contaCorrenteAlice.agencia = 1001;
contaCorrenteAlice.saldo = 0;

console.log(contaCorrenteRicardo.saldo);
contaCorrenteRicardo.saldo = 100;
console.log(contaCorrenteRicardo.saldo);

contaCorrenteRicardo.sacar(50);
contaCorrenteRicardo.sacar(150);

//let valorSacado = 200;

// if(valorSacado < valorSacado){
//     contaCorrenteRicardo.saldo -= valorSacado;
// }else{
//     console.log("Saldo insuficiente")
// }


console.log(contaCorrenteRicardo.saldo);



console.log(cliente1, cliente2);