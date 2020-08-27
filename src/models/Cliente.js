export default class Cliente {
    constructor({ clienteID, srclienteNomecLink, clienteEmail, clienteCPF, contaPoupanca, contaCorrente}) {
        this.clienteID = clienteID;
        this.srclienteNomecLink = srclienteNomecLink;
        this.clienteEmail = clienteEmail;
        this.clienteCPF = clienteCPF;
        this.contaPoupanca = contaPoupanca;
        this.contaCorrente = contaCorrente;
    }
}