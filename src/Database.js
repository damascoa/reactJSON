const clients = ([
    { id: 1, nome: "Renato Gonçalves", endereco: { rua: "Maria da Conceicao Borges Filha", numero: 260, bairro: "Planalto", cidade: "Patos de Minas" }, idGrupo: { id_grupo: 2 } },
    { id: 2, nome: "Michel Gonçalves", endereco: { rua: "Maria da Conceicao Borges Filha", numero: 260, bairro: "Planalto", cidade: "Patos de Minas" }, idGrupo: { id_grupo: 1 } },
    { id: 3, nome: "Karol", endereco: { rua: "Maria da Conceicao Borges Filha", numero: 260, bairro: "Planalto", cidade: "Patos de Minas" }, idGrupo: { id_grupo: 1 } }
]);

const groups = [{ id_grupo: 1, descricao: "Física" }, { id_grupo: 2, descricao: "Jurídica" }];



const db = {
    findClientes: () => {
        return localStorage.getItem("clientes") ? JSON.parse(localStorage.getItem("clientes")) : [];
    },

    grupos: localStorage.getItem("grupos") ? JSON.parse(localStorage.getItem("grupos")) : [],

    addCliente: (c) => {
        var list = localStorage.getItem("clientes") ? JSON.parse(localStorage.getItem("clientes")) : [];
        console.log('has ', c.id ? 'true' : 'not')
        if (c.id) {
            var index = list.findIndex(cx => cx.id === c.id);
            console.log('indexof ', index)
            list[index] = c;
        } else {
            c.id = list.length + 1;
            list.push(c);
        }
        console.log(list);
        localStorage.setItem("clientes", JSON.stringify(list));
    },

    findClient: (id) => {
        var list = localStorage.getItem("clientes") ? JSON.parse(localStorage.getItem("clientes")) : [];
        return list.filter(res => res.id == id)[0];
    },
    removerCliente: (id) => {
        var list = localStorage.getItem("clientes") ? JSON.parse(localStorage.getItem("clientes")) : [];
        list = list.filter(p => p.id != id);
        localStorage.setItem("clientes",JSON.stringify(list)) 
    }
}

export default db;