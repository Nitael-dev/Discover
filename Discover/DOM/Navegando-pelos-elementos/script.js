/* Navegando pelos elementos

parentNode parentElement
const body = document.querySelector('body')
console.log(body.parentNode)
console.log(body.parentElement)
*/

/* childNodes children
const el = document.querySelector('body')

console.log(el.childNodes)
console.log(el.children)
console.log(el.firstChild)
console.log(el.firstElementChild)
console.log(el.lastChild)
console.log(el.lastElementChild)
*/

// nextSibling nextElementSiblind (Sibling = irmãos)

const el = document.querySelector('header')

// console.log(el.nextSibling)
// console.log(el.nextElementSibling)
// console.log(el.previousSibling)
console.log(el.previousElementSibling)