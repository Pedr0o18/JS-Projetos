// Função iniciar()

function iniciar() {
    document.getElementById("painel").innerHTML = "Contando"
    tempo = setInterval(() => {
        let cont = document.getElementById("contador").innerHTML
        let soma = parseInt(cont) + 1
        document.getElementById("contador").innerHTML = soma
    }, 1000)
}

// Função parar()

function parar() {
    document.getElementById("painel").innerHTML = "Contador Parado"
    clearInterval(tempo)
}

// Função reiniciar()

function reiniciar() {
    document.getElementById("contador").innerHTML = "0"
    document.getElementById("painel").innerHTML = "Contador Parado"
    clearInterval(tempo)
}