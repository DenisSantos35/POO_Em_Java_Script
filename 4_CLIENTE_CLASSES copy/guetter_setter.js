import {ContaCorrente} from './ContaCorrente.js'
import { Cliente } from './Cliente.js'


const cliente1 = new Cliente("Denis", "222222222");
const conta1 = new ContaCorrente(1001, cliente1);

const cliente2 = new Cliente("Maria", "333333333")
const conta2 = new ContaCorrente(1001, cliente2);

const cliente3 = new Cliente("Joao", "44444")
const conta3 = new ContaCorrente(1001, cliente3);


//conta1.agencia = 1001;
// cliente1.nome = "Denis";
//cliente1.cpf = "11122233309";
//conta1.cliente = cliente1


console.log(conta1.toString,);
console.log(conta2.toString,);
console.log(conta3.toString,);