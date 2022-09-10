interface IConta{
    nomeTitular: string;
    saldo?: number
}

class Conta{
    private nomeTitular: string
    private saldo: number


    constructor({
        nomeTitular,
        saldo = 100.000

    }: IConta){
        this.nomeTitular = nomeTitular,
        this.saldo = saldo
        console.log('Bem Vindo ao kingBank')


    }
}

const contaA: Conta = new Conta({nomeTitular: 'Pedro'})
const contaB: Conta = new Conta({nomeTitular: 'LCavalcanti', saldo: 10000})