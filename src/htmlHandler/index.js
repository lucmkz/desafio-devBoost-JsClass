import HandleCliente from "../models/HanddlerClients";

import { 
  IClienteCliente1,
  IContaCorenteCliente1,
  IMovimentacao1Cliente1,
} from '../mock/mockClientes'

export default function htmlHandler() {
  const botaoAddMovimentacao = document.querySelector(".addMovimentacaoButton");
  const botaoCriar = document.querySelector(".criar");
  const div_main = document.querySelector(".div_main");
  const pres = document.querySelector(".pres");

  const movimentacoes = document.querySelector(".Movimentacoes");

  botaoAddMovimentacao.onclick = () => {
    const divMovimentacao = document.createElement("div");
    divMovimentacao.setAttribute("class", "movimentacao");

    const inputOperacao = document.createElement("input");
    inputOperacao.setAttribute("type", "text");
    inputOperacao.setAttribute("class", "operacao");
    inputOperacao.setAttribute("placeholder", "Operação");

    const inputCusto = document.createElement("input");
    inputCusto.setAttribute("type", "text");
    inputCusto.setAttribute("class", "custo");
    inputCusto.setAttribute("placeholder", "Custo");

    const select = document.createElement("select");

    const optionSelect = document.createElement("option");
    optionSelect.disabled = true;
    optionSelect.selected = true;

    optionSelect.setAttribute("selected", "selected");
    optionSelect.value = "Selecione...";
    optionSelect.text = "Selecione...";

    const optionAdd = document.createElement("option");
    optionAdd.value = "add";
    optionAdd.text = "add";

    const optionRemove = document.createElement("option");
    optionRemove.value = "Remove";
    optionRemove.text = "Remove";

    select.append(optionSelect);
    select.append(optionAdd);
    select.append(optionRemove);

    divMovimentacao.appendChild(inputOperacao);
    divMovimentacao.appendChild(inputCusto);
    divMovimentacao.appendChild(select);

    movimentacoes.appendChild(divMovimentacao);
  };

  botaoCriar.onclick = () => {

    const nome = document.querySelector(".inputNome").value;
    const email = document.querySelector(".inputEmail").value;
    const cpf = document.querySelector(".inputCPF").value;
    const valorPupanca = document.querySelector(".valorPupanca").value;
  
    const ValorCorrente = document.querySelector(".ValorCorrente").value;

    const IClienteCliente = {
      clienteID: String(Math.random()*100000000000000000),
      clienteNome: nome,
      clienteEmail: email,
      clienteCPF: cpf,
      contaPoupanca: valorPupanca,
    }

    const IContaCorenteCliente = {
      contaCorrenteId: String(Math.random()*100000000000000000),
      saldo: ValorCorrente,
    }

    const movimentacoesRet = getMovimentacoes();
    console.log(movimentacoesRet)

    const clienteData = HandleCliente({
      cliente: IClienteCliente,
      contaCorrente: IContaCorenteCliente,
      movimentacao: movimentacoesRet
    })


    const pre = document.createElement("pre");
    const value = document.createTextNode(
      JSON.stringify(clienteData, undefined, 2)
    );
    pre.appendChild(value);

    pres.insertBefore(pre, pres.firstChild);

    clearInputs();
  };

  const getMovimentacoes = () => {
    const movimentacaoAll = document.querySelectorAll('div.movimentacao')
    let arr = []
    movimentacaoAll.forEach(element => {
      const obj = {
        operacao: element.children[0].value,
        custo: element.children[1].value,
        action: element.children[2].value
      }
      arr.push(obj)
    });
    return arr
  }

  const clearInputs = () => {
    document.querySelector(".inputNome").value = ''
    document.querySelector(".inputEmail").value = ''
    document.querySelector(".inputCPF").value = ''
    document.querySelector(".valorPupanca").value = ''
    document.querySelector(".ValorCorrente").value = ''
  }
}
