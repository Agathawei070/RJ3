class Cliente {
    #cpf;
    constructor(nome, cpf, endereco) {
        this.nome = nome;
        this.#cpf = cpf;
        this.endereco = endereco;
        this.telefones = new Set();
    }
    getCpf() {
        return this.#cpf;
    }
    getNomeUpperCase() {
        return this.nome.toUpperCase();
    }
    getNomeLowerCase() {
        return this.nome.toLowerCase();
    }
    adicionarTelefone(telefone) {
        this.telefones.add(telefone);
    }
    descricao() {
        return `Cliente: ${this.nome} (CPF: ${this.#cpf})\n${this.endereco.descricao()}\nTelefones: ${Array.from(this.telefones).map(t => t.descricao()).join("\n")}`;
    }
}

class Telefone {
    constructor(ddd, numero) {
        this.ddd = ddd;
        this.numero = numero;
    }
    descricao() {
        return `(${this.ddd}) ${this.numero}`;
    }
}

class Endereco {
    constructor(estado, cidade, rua, numero) {
        this.estado = estado;
        this.cidade = cidade;
        this.rua = rua;
        this.numero = numero;
    }
    descricao() {
        return `${this.rua}, ${this.numero} - ${this.cidade}/${this.estado}`;
    }
}

class Empresa {
    #cnpj;
    constructor(razaoSocial, nomeFantasia, cnpj, endereco) {
        this.razaoSocial = razaoSocial;
        this.nomeFantasia = nomeFantasia;
        this.#cnpj = cnpj;
        this.endereco = endereco;
        this.clientes = new Set();
        this.telefones = new Set();
    }
    getCnpj() {
        return this.#cnpj;
    }
    adicionarCliente(cliente) {
        this.clientes.add(cliente);
    }
    adicionarTelefone(telefone) {
        this.telefones.add(telefone);
    }
    descricao() {
        return `Empresa: ${this.razaoSocial} (${this.nomeFantasia}) - CNPJ: ${this.#cnpj}\n${this.endereco.descricao()}\nTelefones: ${Array.from(this.telefones).map(t => t.descricao()).join(", ")}\nClientes:\n${Array.from(this.clientes).map(c => c.descricao()).join("\n\n")}`;
    }
}

// Testando o código
const empresa = new Empresa("alegria LTDA", "Wei Enterprise", "123456789012", new Endereco("SP", "São Paulo", "Av. Paulista", "1000"));
empresa.adicionarTelefone(new Telefone("11", "99999-9999"));
empresa.adicionarTelefone(new Telefone("11", "98888-8888"));

const clientes = [
    new Cliente("Agatha", "123456789", new Endereco("SP", "São jose dos campos", "Rua margarida", "123")),
    new Cliente("Lucas", "987654321", new Endereco("SP", "São jose dos campos", "Rua cravo", "456")),
    new Cliente("Alissa", "112233445", new Endereco("SP", "Jacarei", "Rua lirio", "789")),
    new Cliente("Patricia", "556677889", new Endereco("SP", "São jose dos campos", "Rua girassol", "101")),
    new Cliente("Yun", "998877665", new Endereco("SP", "São jose dos campos", "Rua rosa", "202"))
];

clientes.forEach((cliente, index) => {
    cliente.adicionarTelefone(new Telefone("11", `9${index}${index}${index}${index}-0000`));
    cliente.adicionarTelefone(new Telefone("11", `9${index}${index}${index}${index}-1111`));
    empresa.adicionarCliente(cliente);
});

console.log(empresa.descricao());