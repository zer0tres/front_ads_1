// dados simples: numeriocs, strings, boolean...
// array:[1,2,3, 'ana']
//objetos: {nome: 'ledson', idade: 36}
// funções:function somar(){}, ()=>{}
{
    //propriedade: valor
    //    key    : value
}

const perfil = {
    nome: 'Ledson',
    idade: 45,
    profissao: 'Desenvolvedor',
    solteiro: true,
    roupas: ['camiseta', 'calça', 'tênis']
}

console.log(Object.entries(perfil))// Traz chave e valor
console.log(Object.keys(perfil))// Traz só as chaves
console.log(Object.values(perfil))// Traz só os valores

// let dadosperfil =  []

// for(let dado in perfil){
//     dadosperfil.push(perfil[dado])
// }
// alert(dadosperfil)





// for(let dados in perfil){
//     console.log(perfil[dados]);
// }

//atribuição dinamica
//perfil.roupas = ['camiseta', 'calça', 'tênis']


// console.log(perfil.nome);
// console.log(perfil.idade);
// console.log(perfil.profissao);
// console.log(perfil.solteiro);
// console.log(perfil.roupas);

