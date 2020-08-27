import { cliente1, cliente2, cliente3 } from "./mock/mockClientes"

const allclientes = [cliente1, cliente2, cliente3]

document.querySelector('#main').textContent = 
JSON.stringify(allclientes, undefined, 2);


