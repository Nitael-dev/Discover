/*  ### Celsius em fahrenheit

    Crie uma função que receba uma string em celsius ou fahrenheit e faça a transformação de uma unidade para outra

    C = (F - 32) * 5/9

    F = C * 9/5 + 32

*/
/*
function calculo(value, medição) {
    let Fahrenheit = value * 9/5 + 32
    let Celsius = (Fahrenheit - 32) * 5/9
    if(value == Number(value) && medição == 'F') {
        return Fahrenheit;
    } else if(value == Number(value) && medição == 'C') {
        return Celsius;
    } else {
        console.log('Valor inválido')
    }
}
console.log(calculo(5, 'D'))
*/

// transform('50Z')
function transformDegree(degree) {
    const celsiusExists = degree.toUpperCase().includes('C')
    const fahrenheitExists = degree.toUpperCase().includes('F')

    if(!celsiusExists && !fahrenheitExists) {
        throw new Error('Grau não identificado')
    }

    // fluxo ideal, F -> C
    let updatedDegree = Number(degree.toUpperCase().replace('F', ""));
    let formula = (fahrenheit) => (fahrenheit - 32) * 5/9
    let degreeSign = 'C'

    // fluxo alternativo C ->
    if(celsiusExists) {

    updatedDegree = Number(degree.toUpperCase().replace('C', ""));
    formula = (celsius) => celsius * 9/5 + 32
    degreeSign = 'F'
    
    }


    return formula(updatedDegree) + degreeSign

}

try {
    console.log(transformDegree('50EF'))
    console.log(transformDegree('10C'))
    transformDegree('50Z')
} catch (error) {
    console.log(error.message)
}