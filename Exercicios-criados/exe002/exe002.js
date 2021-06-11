function confirm() {
    let name = document.getElementById('completename')
    let email = document.getElementById('email')
    let passowrd = document.getElementById('password')
    let conpassword = document.getElementById('conpassword')
    let result = document.getElementById('result')
    if (n) {
        alert("Dados inválidos")
    } else {
        result.innerText = String(name.value)
    }
}