// const { EventEmitter } = require('events')
// const ev = new EventEmitter()

// ev.on('saySomething', (message) => {
//     console.log('eu ouvi você', message)
// })
// ev.once('saySomething', (message) => {
//     console.log('eu ouvi você', message)
// })

// ev.emit('saySomething', 'Mayk')
// ev.emit('saySomething', 'João')
// ev.emit('saySomething', 'Camila')

















const { inherits } = require('util') // EventEmitter possui on e emit como base
const { EventEmitter } = require('events')

function Character(name) {
    this.name = name
}

inherits(Character, EventEmitter)

const chapolin = new Character('Chapolin')
chapolin.on('help', () => console.log(`Eu! o ${chapolin.name} colorado!`))

console.log('Oh! E agora, quem poderá me defender?')
chapolin.emit('help')