// Manipulando Arrays

// Transformar uma cadeia de caracteres em elementos de um array
/*
let word = 'manipulação'
console.log(Array.from(word))
*/

let techs = ["html", "css", "js"]

// adicionar um item no fim
techs.push("nodejs")
// adicionar no começo
techs.unshift("sql")
// remover do fim
// techs.pop()
// remover do começo
// techs.shift()
// pegar somente alguns elementos do array
// console.log(techs.slice(0, 3)) // 1º arg inicio, 2º arg fim
// remover 1 ou mais itens em qualquer posição do array
// techs.splice(1, 2) // 1º inicio, 2º arg quantos apagar partindo do inicio(1º arg)
// encontrar a posição de um elemento do array
let index = techs.indexOf("html")
techs.splice(index, 1)

console.log(index)