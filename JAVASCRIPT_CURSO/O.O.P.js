
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
