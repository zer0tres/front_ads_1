const lugares = ['Praia', 'Montanha', 'Rota da Seda']
const mensagem = `
      -- ROTEIRO DE VIAGENS --
      Lugares disponíveis: ${lugares.join(', ')}
      ----------------------------`
alert(mensagem)

const escolhaUsuario = prompt('Para onde deseja viajar?')


if (!escolhaUsuario || escolhaUsuario.trim() === '') {
    alert('Por favor digite um valor da lista de viagem!')
} else {
    
    const escolhaNormalizada = escolhaUsuario.trim().toLowerCase()
    
    if (escolhaNormalizada === 'praia') {
        window.location.href = './praia.html'
    } 
    else if (escolhaNormalizada === 'montanha') {
        window.location.href = './montanha.html'
    }
    else if (escolhaNormalizada === 'rota da seda') {
        window.location.href = './rotadaseda.html'
    }
    else {
        alert('Destino não encontrado! Escolha entre: ' + lugares.join(', '))
    }
}