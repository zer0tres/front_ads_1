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
const containerCards = document.querySelector('#container-cards')

const itensProdutos = [
    // {nome: "Prod1", descricao: "", url: ""}
    // {nome: "Prod1", descricao: "", url: ""}
]

// addeventlistener => escuta o evento disparado
formulario.addEventListener('submit', function(event){
    event.preventDefault() // previne o comportamento padrão do formulário (recarregar a página)
    const titulo = document.querySelector('#nome').value
    const descricao = document.querySelector('#descricao').value
    const urlImagem = document.querySelector('#img').value
    
    itensProdutos.push({
        titulo: titulo, 
        descricao: descricao, 
        urlImagem: urlImagem
    })
    
    console.log(itensProdutos)
    formulario.reset() // limpa os campos do formulário
    renderizarCards() // Renderiza os cards após adicionar
})

//criar função para gerar template do card
function criarCardNovo(produto, index){
    const card = document.createElement('div')
    card.className = 'card'
    card.setAttribute('data-index', index)
    
    card.innerHTML = `
        <div class="imagem-container">
            <img src="${produto.urlImagem}" alt="${produto.titulo}" onerror="this.src='https://via.placeholder.com/250x180?text=Imagem+Não+Encontrada'">
        </div>
        <h3>${produto.titulo}</h3>
        <p>${produto.descricao}</p>
    `
    
    return card
}

// RENDERIZAR OS CARDS
function renderizarCards(){
    // Limpa o container antes de renderizar novamente
    containerCards.innerHTML = ''
    
    // Verifica se há produtos para renderizar
    if(itensProdutos.length === 0) {
        containerCards.innerHTML = '<p>Nenhum produto cadastrado</p>'
        return
    }
    
    // Adiciona a classe para mudar o layout quando houver cards
    document.getElementById('app').classList.add('com-componente')
    
    // Cria e adiciona cada card
    itensProdutos.forEach((produto, index) => {
        const card = criarCardNovo(produto, index)
        containerCards.appendChild(card)
    })
}

btnRemover.addEventListener('click', function(){
    if(itensProdutos.length > 0) {
        // Remove o último item do array
        itensProdutos.pop()
        // Renderiza os cards novamente
        renderizarCards()
        
        // Remove a classe se não houver mais cards
        if(itensProdutos.length === 0) {
            document.getElementById('app').classList.remove('com-componente')
        }
    } else {
        alert('Não há produtos para remover!')
    }
})

// Renderiza os cards inicialmente (caso já existam produtos)
renderizarCards()