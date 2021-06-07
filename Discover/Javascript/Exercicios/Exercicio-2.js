/*  ### Sistema de gastos familiar


Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
    * receitas: []
    * despesas: []

Agora, crie uma função que irá calcular o total de receitas e despesas e irá mostrar uma mensagem se a família está com saldo positivo ou negativo, seguido do valor do saldo

*/

/*
function total() {

let receitas = [200, 160, 100]
let despesas = [140, 100, 80]
let agua = despesas[0]
let luz = despesas[1]
let gas = despesas[2]
let mae = receitas[0]
let pai = receitas[1]
let filho = receitas[2]
let rtotal = mae + pai + filho
let dtotal= agua + luz + gas
let saldo = rtotal - dtotal
return saldo;

}

console.log(total())

*/

let family = {
    incomes: [1200, 3200, 250.43, 360.45],
    expenses: [320.34, 128.45, 176.87, 1450.00, 2000]
}

function sum(array) {
    let total = 0;
    
    for(let value of array) {
        total += value
    }

    return total
}

function calculateBalance() {
    const calculateIncomes = sum(family.incomes)
    const calculateExpenses = sum(family.expenses)

    const total = calculateIncomes - calculateExpenses

    const itsOk = total >= 0

    let balanceText = "Negativo"

    if(itsOk) {
        balanceText = "Positivo"
    }

    console.log(`Seu saldo é ${balanceText}: R$ ${total.toFixed(2)}`)
}

calculateBalance()