/** operadores aritmeticos */
// + - * / % **/
//** operadores relacionais */
// >  >=  <  <=  !=
// && || (E logico , OU Logico)
/*
const 15 ehPar = 15// number

if  (ehPar % 2 == 0) {
    alert (' O numero' + ehPar + 'é par!')
} else{
    alert ('O numero' + ehPar + 'é impar!')
}
console.log(ehpar % 2 == 0)
*/
//Pessoas com idade entre 18 e 70 anos podem entrar
//Pessoas maiores de 70 precisam de compainha
// Menores, vazam!


const idade  = 16
if (idade >= 18 && idade <= 70){
    alert('Você Tem' + idade +' anos \nPode entrar no baile') /* \n é um enter**/
}  else if (idade >= 70)  {
    alert('Você Tem' + idade +' anos \nPode entrar no baile, mas só acompanhado')
} else {
    alert('Vaza, menor!')
}


