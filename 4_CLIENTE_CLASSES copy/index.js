import { ContaCorrente  } from './ContaCorrente.js';
import { Cliente } from './Cliente.js';

// const cliente1 = new Cliente();
// const cliente2 = new Cliente();

// cliente1.nome = "Ricardo";
// cliente1.cpf = 11122233309;

// const contaCorrenteRicardo =new ContaCorrente();
// contaCorrenteRicardo.agencia = 1001;
// contaCorrenteRicardo.cliente = cliente1;

// contaCorrenteRicardo.depositar(100);
// contaCorrenteRicardo.depositar(200);
// contaCorrenteRicardo.depositar(200);
// contaCorrenteRicardo.depositar(200);
// contaCorrenteRicardo.depositar(200);
// contaCorrenteRicardo.depositar(-1);


//cliente2.nome = "Alice";
//cliente2.cpf = 88822233309;


// contaCorrenteAlice.depositar(100);
// contaCorrenteAlice.depositar(200);



// console.log(contaCorrenteRicardo);
// let valorSacado = contaCorrenteRicardo.sacar(50);
// console.log(`Você sacou ${valorSacado} R$`);
// console.log(`Seu saldo atual é ${contaCorrenteRicardo.mostrarSaldo}`)

// console.log(contaCorrenteAlice);
// valorSacado = contaCorrenteAlice.sacar(100);
// console.log(`Você sacou ${valorSacado} R$`);
// console.log(`Seu saldo atual é ${contaCorrenteAlice.mostrarSaldo}`)

// let valor = 200;
// contaCorrenteRicardo.transferir(valor, contaCorrenteAlice);

// console.log(`Seu saldo atual é ${contaCorrenteAlice.mostrarSaldo}`)

// console.log(contaCorrenteRicardo);
// console.log(`Seu saldo atual é ${contaCorrenteRicardo.mostrarSaldo}`)


// console.log("valor: ", valor);

const contaCorrenteAlice = new ContaCorrente();
contaCorrenteAlice.cliente = new Cliente();


contaCorrenteAlice.agencia = 1001;

contaCorrenteAlice.cliente.nome = "Alice";
contaCorrenteAlice.cliente.cpf = 88822233309;

console.log(contaCorrenteAlice);
