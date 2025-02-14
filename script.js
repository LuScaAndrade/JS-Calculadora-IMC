const peso = document.querySelector(".inputPeso")
const altura = document.querySelector(".inputAltura")

function criaDiv() {
    let resultado = document.querySelector(".resultado")

    if (!resultado) {
        resultado = document.createElement("div")
        resultado.classList.add("resultado")
        document.querySelector(".box").appendChild(resultado)
    }
    resultado.innerHTML = ""
    return resultado
}

function criarParagrafo(texto) {
    const resultado = criaDiv()
    const newParagraphy = document.createElement("p");
    newParagraphy.classList.add("resultado");
    newParagraphy.textContent = texto;
    resultado.innerHTML = ""
    resultado.appendChild(newParagraphy)
}

function calcularIMC(peso, altura) {
    if (!peso || peso <= 0 || isNaN(peso)) {
        return "Peso inválido!"
    }

    if (!altura || altura <= 0 || isNaN(altura)) {
        return "Altura inválida!"
    }

    const totalIMC = peso / (altura * altura)
    let mensagem = ""

    if (totalIMC < 18.5) {
        mensagem = 'Abaixo do peso'
    } else if (totalIMC >= 18.5 && totalIMC <= 24.9) {
        mensagem = 'Peso normal'
    } else if (totalIMC >= 25 && totalIMC <= 29.9) {
        mensagem = 'Sobrepeso'
    } else if (totalIMC >= 30 && totalIMC <= 34.9) {
        mensagem = 'Obesidade grau 1'
    } else if (totalIMC >= 35 && totalIMC <= 39.9) {
        mensagem = 'Obesidade grau 2'
    } else {
        mensagem = 'Obesidade grau 3'
    }

    criarParagrafo(`${mensagem} - IMC: ${totalIMC.toFixed(2)}`)
    return totalIMC
}

document.querySelector(".button").addEventListener('click', function () {
    const resultadoIMC = calcularIMC(parseFloat(peso.value), parseFloat(altura.value))

    if (!isNaN(resultadoIMC)) {
        calcularIMC(parseFloat(peso.value), parseFloat(altura.value))
    } else {
        criarParagrafo(resultadoIMC)
    }
})