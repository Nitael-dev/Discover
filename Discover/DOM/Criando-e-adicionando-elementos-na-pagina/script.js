/* Criando e adicionando elementos

createElement
const div = document.createElement('div')
div.innerText = "Olá Devs!"

append prepend
const body = document.querySelector('body')

body.prepend(div)
body.append(div)
*/

/* insertBefore
const body = document.querySelector('body')
const div = document.createElement('div');
const header = document.querySelector('header')
div.innerText = "Olá Devs!"

body.insertBefore(div, header)

─ "insertAfter"

 body.insertBefore(div, header.nextElementSibling)
*/