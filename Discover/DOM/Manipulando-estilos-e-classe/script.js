/* Alterando estilos
const element = document.querySelector('body')

element.style.backgroundColor = "#ff9999"
console.log(element.style.backgroundColor)
*/

// classList
const element = document.querySelector('body')

element.classList.add('active', 'green')
console.log(element.classList)
// element.classList.remove('active')
element.classList.toggle('active')