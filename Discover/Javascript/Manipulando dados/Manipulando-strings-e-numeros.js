// Manipulando Strings e Números


// Contar quantos caracteres tem uma palavra e quantos dígitos tem um número
/*
let word = "Paralelepípedo"
console.log(word.length)
let number = 43
console.log(String(number).length)
*/

// Transformar um número quebrado com 2 casas decimais e trocar ponto por vírgula
/*
let number = 4123123.153224
console.log(number.toFixed(2).replace(".", ","))
*/

// Transforme letras minúsculas em maiúsculas. Faça o contrário disso também0
/*
let user = 'Carlos'
console.log(user.toUpperCase().toLowerCase())
*/

// Separe um texto que contem espaços, em um novo array onde cada texto é uma posição do array. Depois disso, transforme o array em um texto e onde eram espaços coloque _
/*
let phrase = "Eu quero viver o amor!"
let myArray = phrase.split(" ") // split torna let em array
let phraseWithUnderscore = myArray.join("_") // join torna em string
console.log(phraseWithUnderscore.toUpperCase())
*/

//Verificar se o texto contém a palavra Amor
/*
let phrase = "Eu quero viver amor!"
console.log(phrase.includes("Amor"))
*/

// Criar Array com constructor
/*
let myArray = new Array('a', 'b', 'c')
// let myArray = new Array(10)
console.log(myArray)
*/

// Contar elementos de um array
console.log([
    'a',
    {type: "array"}, 
    function() { return "alo"}
][1].type)


