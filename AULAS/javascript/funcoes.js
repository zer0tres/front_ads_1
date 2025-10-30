// Funçoes sao blocos de codigo que podem ser
// reaproveitados ao longo da execucao do programa
// caracteristicas:
//   - podem ser nomeados ou não
//   - podem receber parametros ou não
//   - podem retornar valores ou não

// Declaração de Função
function dizOla(){
    alert("Diz olá!")
}
function dizOlaPessoa(nome){
    alert(`pode falar, ${nome}!`)

}
const jogadores = ['Messi', 'Neymar', 'Mbappe', 'Ronaldo']
const frutas = ['Banana', 'Maçã', 'Uva', 'Abacaxi']

function formataTexto(lista){
    for(let texto of lista){
        console.log(texto.toUpperCase())
        //texto.toLowerCase() > tudo para minuscula
        //texto.trim() > remove espacos em branco
        //texto.join("-") > junta os elementos
    }
}
formataTexto(jogadores)