function Calcular() {
    let res = document.getElementById("texto")
    let nome = document.getElementById("idnome")
    let altura = document.getElementById("idaltura")
    let peso = document.getElementById("idpeso")
    let imc = (Number(peso.value) / Number(altura.value ** 2)).toFixed(1)
    let resultado = ""
    
    if (imc < 18.5) {
        resultado = "Abaixo do peso"
    } else if (imc < 24.9) {
        resultado = "Peso Ideal"
    } else if (imc < 29.9) {
        resultado = "Sobrepeso"
    } else if (imc < 39.9) {
        resultado = "Obesidade"
    } else {
        resultado = "Obesidade Grave"
    }
        
    res.innerHTML = nome.value + " seu IMC é " + imc + " e você está " + resultado
}

const botao = document.getElementById("botao")
botao.addEventListener('click', Calcular)