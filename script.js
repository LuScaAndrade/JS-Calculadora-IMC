const peso = document.querySelector('.inputPeso')
const altura = document.querySelector('.inputAltura')

function criaDiv() {
    let resultado = document.querySelector('.resultado')

    if (!resultado) {
        resultado = document.createElement('div')
        resultado.classList.add('resultado')
        document.querySelector('.box').appendChild(resultado)
    }

    if (!resultado) {
        resultado = document.createElement('div')
        resultado.classList.add('Erro')
        document.querySelector('.box').appendChild(resultado)
    }

    resultado.innerHTML = ''
    return resultado
}

function criarParagrafo(texto) {
    const resultado = criaDiv()
    const newParagraphy = document.createElement('p');
    newParagraphy.classList.add('resultado');

    newParagraphy.textContent = texto;
    resultado.innerHTML = ''
    resultado.appendChild(newParagraphy)
}

function criarParagrafoErro(texto) {
    const resultado = criaDiv()
    const newParagraphy = document.createElement('p')
    newParagraphy.classList.add('Erro')
    newParagraphy.textContent = texto
    resultado.innerHTML = ''
    resultado.appendChild(newParagraphy)
}

function calcularIMC(peso, altura) {
    if (!peso || peso <= 0 || isNaN(peso)) {
        criarParagrafoErro('Peso inválido!')
        return
    }

    if (!altura || altura <= 0 || isNaN(altura)) {
        criarParagrafoErro('Altura inválida!')
        return
    }

    const totalIMC = peso / (altura * altura)
    let mensagem = ''

    if (totalIMC < 18.5) mensagem = 'Abaixo do peso'
    if (totalIMC >= 18.5 && totalIMC <= 24.9) mensagem = 'Peso normal'
    if (totalIMC >= 25 && totalIMC <= 29.9) mensagem = 'Sobrepeso'
    if (totalIMC >= 30 && totalIMC <= 34.9) mensagem = 'Obesidade grau 1'
    if (totalIMC >= 35 && totalIMC <= 39.9) mensagem = 'Obesidade grau 2'
    if (totalIMC >= 40) mensagem = 'Obesidade grau 3'

    criarParagrafo(`${mensagem} - IMC: ${totalIMC.toFixed(2)}`)
    return totalIMC
}

document.querySelector('.button').addEventListener('click', function () {
    const resultadoIMC = calcularIMC(parseFloat(peso.value), parseFloat(altura.value))

    if (!peso.value && !altura.value) {
        alert('Insira algum valor!')
        criarParagrafoErro('Insira algum valor!')
    } else if (!isNaN(resultadoIMC)) {
        calcularIMC(parseFloat(peso.value), parseFloat(altura.value))
    } else {
        criarParagrafoErro(resultadoIMC)
    }
})