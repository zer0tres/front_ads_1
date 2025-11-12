/**ALGORITMO 
 * 1- Pegar a referências dos dados do Formulário
 * 2- Armazenar e agrupar os dados em Estrutura de Dados adequada
 * 3- Criar um Modelo dinâmico de Card
 * 4- Renderizar o Modelo de Card com os dados armazenados
 * 5- Apagar os dados da lista (último inserido na lista) 
 * 
 * CARD (3 linhas Div com img, h3, p) Classe CSS do card: 'card','imagem-container'
 * Após cada operação imporante Limpar Cache ou Atualizar Card
*/
const formulario = document.querySelector('#form-user')
const btnRemover = document.querySelector('#remover')
const containerCards = document.querySelector('.container-cards')

const itensProdutos = [
    // {nome: "Prod1", descricao: "", url: ""}
    // {nome: "Prod1", descricao: "", url: ""}
]
// addeventlistener => escuta o evento disparado
formulario.addEventListener('submit', function(event){
    event.preventDefault() // previne o comportamento padrão do formulário (recarregar a página)
    const titulo = document.querySelector('#nome')
    const descricao = document.querySelector('#descricao')
    const urlImagem = document.querySelector('#img')
    itensProdutos.push({titulo, descricao, urlImagem})
    console.log(itensProdutos)
    formulario.reset() // limpa os campos do formulário
})

//criar função para gerar template do card
function criarCardNovo(){
// To Do: criar tags html e retornar
}
// RENDERIZAR OS CARDS
function renderizarCards(){
// To Do: inserir card atualizado na pagina
}
btnRemover.addEventListener('click', function(){
    alert('Remover o último item da lista')
})