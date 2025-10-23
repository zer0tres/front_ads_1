const lugares = ['praia', 'montanha']
const mensagem = `
      -- ROTEIRO DE VIAGENS --
      lugares: ${lugares}
      ----------------------------`
alert(mensagem)
const escolhaUsuario = prompt('Pra onde deseja viajar?')
if (escolhaUsuario == null || escolhaUsuario == '') {
    alert('Por favor digite um valor da lista de viagem!')
} else {
    if (lugares.includes(escolhaUsuario)) {
        if (escolhaUsuario == 'praia') {

            window.location.href = './praia.html'
        } else if (escolhaUsuario == 'montanha') {

            window.location.href = './montanha.html'
        }
    }
}