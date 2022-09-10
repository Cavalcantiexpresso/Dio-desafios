interface ICalcularIdade{
    nome: string,
    anoNascimento: number
    profissao?:string
}

function calcularIdade({nome,
     anoNascimento,
     profissao
}: ICalcularIdade): string{
    const idade: number = 2022 - anoNascimento
    if(profissao){
        return `nome Dele é ${nome}. Ele tem mais ${idade} anos e sua profissão é ${profissao}`
    }
    return `Seu nome é ${nome}. Voce tem ${idade} anos`
}


const nome = 'Jesus'
const anoNascimento = 0
const profissao = 'Salvador'

console.log(calcularIdade({ nome, anoNascimento, profissao }));