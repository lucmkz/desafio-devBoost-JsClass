export default class Cliente {
    constructor({ 
        clienteID, 
        srclienteNomecLink, 
        clienteNome,
        clienteEmail, 
        clienteCPF, 
        contaPoupanca, 
        contaCorrente
    }) {
        this.clienteID = clienteID;
        this.srclienteNomecLink = srclienteNomecLink;
        this.clienteNome = clienteNome;
        this.clienteEmail = clienteEmail;
        this.clienteCPF = clienteCPF;
        this.contaPoupanca = contaPoupanca;
        this.contaCorrente = contaCorrente;
    }
}