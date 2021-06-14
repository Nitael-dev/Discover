/*
const isso = require("./d1")

console.log(isso())
*/

const getFlagValue = require("./d1")

console.log(`Oi ${getFlagValue('--name')}. ${getFlagValue('--greeting')}`)