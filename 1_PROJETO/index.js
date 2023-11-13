class Cliente{
    nome;
    cpf;
    agencia;
    saldo;
    rg;
}

const cliente1 = new Cliente();
const cliente2 = new Cliente();

cliente1.nome = "Ricardo";
cliente1.cpf = 11122233309;
cliente1.agencia = 1001;
cliente1.saldo = 0;
cliente1.rg = 3333333;


cliente2.nome = "Alice";
cliente2.cpf = 88822233309;
cliente2.agencia = 1001;
cliente2.saldo = 0;

console.log(cliente1, cliente2);
/*
const cliente2Nome = "Alice";
const cliente2CPF = 88822233309;
const cliente2Agencia = 1001;
const cliente2Saldo = 0;

const cliente3Nome = "João";
const cliente3CPF = 88822233309;
const cliente3Agencia = 1001;
const cliente3Saldo = 0;

console.log(cliente1Nome)
*/