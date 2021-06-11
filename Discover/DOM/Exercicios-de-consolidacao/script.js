let tela1 = document.querySelector('div#tela1')
let button = document.querySelector('button')

button.addEventListener('click', remove)



document.addEventListener('keydown', function(event) {
    let escpress = event.key === 'Escape'
    let add = tela1.classList.add('invisible')
})

function remove() {
    let atrr = tela1.classList.remove('invisible')
}