//Create Clientes
import Cliente from './Cliente'
import ContaCorrente from './ContaCorrente'
import Movimentacao from './Movimentacao'

export default function HanddlerClients ({cliente, contaCorrente, movimentacao}) {
  const movs = movimentacao.map(mov => {
    return new Movimentacao(mov)
  });

  const contaCorrenteData = new ContaCorrente({...contaCorrente, movimentacoes:movs});
  return cliente = new Cliente({...cliente, contaCorrente: contaCorrenteData});
  
}