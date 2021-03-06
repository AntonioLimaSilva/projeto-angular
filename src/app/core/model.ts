export class Pessoa {
    id: number;
    nome: string;
    ativo = true;
    endereco = new Endereco();
}

export class Usuario {
    id: number;
    nome: string;
    email: string;
    senha: string;
    grupos: any[] = []
}

export class Endereco {
    logradouro: string;
    numero: string;
    complemento: string;
    bairro: string;
    cep: string;
    cidade: string;
    estado: string;
}

export class Categoria {
    id: number;
}

export class Lancamento {
    id: number;
    tipo = 'RECEITA';
    descricao: string;
    dataVencimento: Date;
    dataPagamento: Date;
    valor: number;
    observacao: string;
    pessoa = new Pessoa();
    categoria = new Categoria();
}