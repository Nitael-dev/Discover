/*
const name = function getFlag() {
    process.argv
    if (process.argv[2] == "--name" && process.argv[4] == "--greeting") {
        const fullname = process.argv[3]
        const greeting = process.argv[5]
        const resp = `${greeting} ${fullname}`
        return resp
    } else {
        return "Dados inválidos"
    }
    }
    module.exports = name
*/

function getFlagValue(flag) {
    const index = process.argv.indexOf(flag) + 1
    return process.argv[index]
}
module.exports = getFlagValue;