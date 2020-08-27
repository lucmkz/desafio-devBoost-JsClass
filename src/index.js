import HandleCliente from './models/HanddlerClients'
import { 
  IClienteCliente1,
  IContaCorenteCliente1,
  IMovimentacao1Cliente1,
  IMovimentacao2Cliente1,
  IMovimentacao3Cliente1,
  IClienteCliente2,
  IContaCorenteCliente2,
  IMovimentacao1Cliente2,
  IMovimentacao2Cliente2,
  IMovimentacao3Cliente2,
  IClienteCliente3,
  IContaCorenteCliente3,
  IMovimentacao1Cliente3,
  IMovimentacao2Cliente3,
  IMovimentacao3Cliente3,
} from './mock/mockClientes'

//insert here all data
const cliente1 = HandleCliente({
  cliente: IClienteCliente1,
  contaCorrente: IContaCorenteCliente1,
  movimentacao: [
    IMovimentacao1Cliente1, 
    IMovimentacao2Cliente1, 
    IMovimentacao3Cliente1
  ]
})

const cliente2 = HandleCliente({
  cliente: IClienteCliente2,
  contaCorrente: IContaCorenteCliente2,
  movimentacao: [
    IMovimentacao1Cliente2, 
    IMovimentacao2Cliente2, 
    IMovimentacao3Cliente2
  ]
})

const cliente3 = HandleCliente({
  cliente: IClienteCliente3,
  contaCorrente: IContaCorenteCliente3,
  movimentacao: [
    IMovimentacao1Cliente3, 
    IMovimentacao2Cliente3, 
    IMovimentacao3Cliente3
  ]
})

const clientes = [cliente1, cliente2, cliente3]

document.querySelector('#main').textContent = 
JSON.stringify(clientes, undefined, 2);


