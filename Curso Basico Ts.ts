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
        return `Seu nome é ${nome}. Voce tem ${idade} anos e sua profissão é ${profissao}`
    }
    return `Seu nome é ${nome}. Voce tem ${idade} anos`
}

const nome = 'Luciano Paiva'
const anoNascimento = 1980
const profissao = 'desenvolvedor'