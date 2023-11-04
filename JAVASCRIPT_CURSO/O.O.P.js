
/*
// ORIENTAÇÃO Á OBJETOS

// Quando for apenas um objeto usar apenas { } , quando for um arrays de objetos usar [{}]

var pessoas = [{
    "nome": 'gilson',
    "idade": 30,
    'cidade': 'São Paulo',
},
{
    'nome': 'joão',
    'idade': 56,
    'cidade': 'rio de janeiro'
},
{
    'nome': 'zezinho',
    'idade': 89,
    'cidade': 'fortaleza'
}
]



pessoas.forEach(function (valor, indice) {
    console.log(valor, indice)
});




// Quando for chamar o Objeto sempre colocar o nome da variavel do objeto, quando for uma lista de objetos
//selecionar o indice desejado em seguida a propriedade do objeto desejado.

var carros =
    [{
        'fabricante': 'honda',
        'Ano fabricação': '2023 2024',
        'modelo': 'civic'
    },
    {
        'fabricante': 'volkswagem',
        'Ano fabricação': '2023 2024',
        'modelo': 'jetta'
    },
    {
        'fabricante': 'toyota',
        'Ano fabricação': '2023 2024',
        'modelo': 'corolla'
    }
    ]


carros.forEach(function (v, i) {
    console.log(v, i);
});


for (let i = 0; i < carros.length; i++) {  // FOR pra percorrer uma Lista de forma manual
    var element = carros[i]; // O element que vai guardar o nome que o i vai passar na lista
    // console.log(i); // Imprimir o Indice 
    console.log(element, i); // Imprimir o dado do indice
};

*/

// ISNTANCIANDO OBJETOS UTILIZANDO FUNÇÃO JAVASCRIPT
/*
function carro1 (fabricante,modelo,cor,anoFabricacao){
    fabricante = fabricante;
    modelo = modelo;
    cor = cor;
    anoFabricacao = anoFabricacao;
    return {fabricante,modelo,cor,anoFabricacao}
}
var  carroNovo = new carro1 ('Fiat','Uno','Vermelho',2015,);
console.log(carroNovo);
*/

// INSTANCIANDO OBJETOS UTILIZANDO CLASSES JAVASCRIPT

class Carro {
    constructor (fabricante,modelo,cor,anoFabricacao){
    this.fabricante = fabricante;
    this.modelo = modelo;
    this.cor = cor;
    this.anoFabricacao = anoFabricacao;
    }

    get _fabricante(){return this.fabricante}
    get _modelo(){return this.modelo}
    get _cor(){return this.cor}
    get _anoFabricacao(){return this.anoFabricacao}

    set _SetModelo(NovoModelo){
        this.modelo = NovoModelo;
    }
    set _SetCor(NovaCor){
        this.cor = NovaCor;
    }

    set _SetFabricante(NovaFabricante){
        this.fabricante = NovaFabricante;
    }

    set _SetAnoFabricação(NovoAnoFabricacao){
        this.anoFabricacao = NovoAnoFabricacao;
    }
    }



const BMW = new Carro('BMW','X1','BRANCO',2023);
BMW._SetModelo = '320I';
BMW._SetCor = 'Azul';
BMW._SetAnoFabricação = 2024;
BMW._SetFabricante = 'Audi'



console.log(BMW._modelo,BMW._cor, BMW._fabricante,BMW._anoFabricacao);



class Pessoa{
    constructor(nome,sobrenome,idade,dataDeNascimento){
        this.nome = nome; this.sobrenome = sobrenome; this.idade = idade; this.dataDeNascimento= dataDeNascimento;
    }
}

class Animal{
    constructor(nome,raca,cor,idade){
        this.nome = nome; this.raca = raca; this.cor = cor; this.idade = idade;
    }
}

class NomeObjeto{
    constructor(atributo1,atributo2,atributo3){
        this.atributo1 = atributo1; this.atributo2 = atributo2; this.atributo3 = atributo3;
    }
}


var pessoa01 = new Pessoa('Vanderlei','Silva Rocha',25, '07 06 1993');


console.log(pessoa01);


