
/*

Arrays são agrupadores de valores numericos, textuais, booleanos, objetos etc
eles são ordenados a partir do indice 0 (zero)
exemplo: 
const time = ["Pedro", 22, "Julio", "Ana"]
    // indices   0      1     2       3

*/

const vestuario = [ "camiseta", "calça jeans", "jaqueta", "shorts", "vestido", "saia", "blusa", "suéter", "casaco", "moletom",
"bermuda", "camisa social", "tênis", "sapato", "sandália", "bota", "meia", "boné", "cinto", "gravata",
"jaqueta de couro", "blazer", "cardigã", "regata", "camisola", "pijama", "roupão", "cueca", "sutiã", "calcinha",
"legging", "top esportivo", "macacão", "macaquinho", "colete", "sobretudo", "chinelo", "sapato social", "sapato de salto", "botina",
"luva", "cachecol", "gorro", "chapéu", "boina", "bandana", "viseira", "uniforme", "macacão de trabalho", "calça social",
"camisa polo", "jaqueta jeans", "moletom com capuz", "blusa de frio", "tênis esportivo", "tênis casual", "blusa de manga longa", "blusa de manga curta", "camisa de time", "camisa de banda",
"meia-calça", "cueca box", "cueca slip", "top cropped", "body", "sapatilha", "tamanco", "coturno", "sapato oxford", "sapato mocassim",
"jaleco", "avental", "uniforme escolar", "uniforme esportivo", "roupa de banho", "biquíni", "maiô", "sunga", "camisa de praia", "saída de praia",
"tapa-olho para dormir", "luva térmica", "jaqueta corta-vento", "poncho", "capuz", "blusa canelada", "camiseta oversized", "camisa xadrez", "calça cargo", "calça legging térmica",
"camisa de linho", "camisa de seda", "jaqueta puffer", "camisa retrô", "cardigã longo", "sobretudo de lã", "paletó", "terno", "colete jeans", "blusa de gola alta",
"camiseta", "tenis nike", "calca jeans", "relogio", "skate", "bone", "jaqueta", "chinelo","camiseta", "calça jeans", "jaqueta", "shorts", "vestido", "saia", "blusa", "suéter", "casaco", "moletom", "bermuda", "camisa social", "tênis", "sapato", "sandália", "bota", "meia", "boné", "cinto", "gravata"]

vestuario[178] = 'chapeu tropeiro'

for(let valor in vestuario) {
    console.log(valor)
}
// este for mostra o indice da lista acima , para cada valor que eu encontrar imprima este valor

for(let valor of vestuario) {
    console.log(valor)
}

// console.log(vestuario[1])
// console.log(vestuario[5])
// console.log(vestuario[6])
// console.log(vestuario[7])
// console.log(vestuario[178])




