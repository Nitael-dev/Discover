// 1. Declare uma variável de nome weight
let weight = 77
// 2. Que tipo de dado é a variável acima?
// console.log(typeof weight)

    // 3. Declare uma variável e atribua valores para cada um do dados:
    //     * name: String
    //     * age: Number (integer)
    //     * stars: Number (float)
    //     * isSubscribed: Boolean
   let name = 'João'
   let age = 22
   let stars = 4.4
   let isSubscribed = false


/*
    4. A variável student abaixo é de que tipo de dado?

    4.1 Atribua a ela as mesmas propriedades e valores do exercício 3.

    4.2 Mostre no console a seguinte mensagem:

    <name> de idade <age> pesa <weight> kg.

    Atenção, substitua <name> <age> e <weight> pelos valores de cada propriedade do objeto
    */
let student = {
    name: 'João',
    age: 22,
    weight: 77.4,
    isSubscribed: false
}
let student1 = {
    name: 'Marcelo',
    age: 20,
    weight: 80.4,
    isSubscribed: false
}
// console.log(student)
// console.log(`${student.name} de idade ${student.age} anos pesa ${student.weight} kg.`)

/*
    5. Declare uma variável do tipo Array, de nome students e atribua a ela nehum valor, ou seja, somente o Array vazio
    */
   let students = []

/*
    6. Reatribua o valor para a variável acima, colocando dentro dela o objeto student da questão 4.(Não copiar e colar o objeto, mas usar objeto criado e inserir ele no Array)
*/

students = [
    student, student1
]


/*
    7. Coloque no console o valor da posição zero do Array acima
*/

// console.log(students[0])

/*
    8. Crie um novo student e coloque na posição 1 do Array students
*/

// console.log(students[1])

/*
    9. Sem rodar o código responda qual é a resposta do código abaixo e por que? Após sua resposta, rode o código e veja se você acertou

*/

console.log(a)
var a = 1