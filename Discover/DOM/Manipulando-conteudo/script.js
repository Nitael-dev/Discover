/* Manipulando conteúdo
 textContent
const element = document.querySelector('h1')

element.textContent += " ,Olá Devs!"
*/

/* innerText
const element = document.querySelector('h1')

element.innerText += "Olá Devs"
*/

/* innerHTML
const element = document.querySelector('h1')

element.innerHTML = "Olá Devs! <small>!!!</small>"
*/

/* value
const element = document.querySelector('input')

console.log(element.value)

element.value = "Valor que eu quiser"
*/

// Manipulando elementos
// Atributos

const header = document.querySelector('header')

header.setAttribute('id', 'header')

const headerID = document.querySelector('#header')

console.log(headerID.getAttribute('class'))

header.removeAttribute('id')

header.setAttribute('class', 'bg header')