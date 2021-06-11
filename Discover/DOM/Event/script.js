// Eventos 
/* Teclado ─ onkey*
const input = document.querySelector('input')

input.onkeypress = function() {
    console.log('rodei')
}
*/

/* Eventos via JS ─ Listener
const h1 = document.querySelector('h1')

h1.addEventListener('mouseout', print)

function print() {
    console.log('print')
}
*/

/*  Evento via JS ─ Outro método  
    const h1 = document.querySelector('h1')

  h1.onclick = print (Errado)

function print() {
    console.log('print')
}

h1.onclick = function() {
    console.log('outro momento')
}

h1.addEventListener('click', print)

function print() {
    console.log('print')
}

h1.addEventListener('click', function() {
    console.log('outro momento')
})
*/

// argument event ─ {[(__proto__)]}
const input = document.querySelector('input')

input.onkeypress = function (event) {
    console.log(event.currentTarget.value)
}