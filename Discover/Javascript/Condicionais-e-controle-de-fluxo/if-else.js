// if..else

//if (condicional) {}

let temperature = 39
let highTemperature = temperature >= 37.5
let mediumTemperature = temperature < 37.5 && temperature >= 37

if (highTemperature) {
    console.log('Está com febre')
} else if (mediumTemperature) {
    console.log('Febre moderada')
        } else {
    console.log('Saudável')
            }