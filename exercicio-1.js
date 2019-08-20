var vet = []
var pares = [], impares = []

for (var i = 0; i < 6; i++) {
    var input = Number(prompt("Digite um numero):"))

    if (isNaN(input)) {
        break;
    }

    vet.push(input)

    if (vet[i] % 2 == 0) {
        pares.push(vet[i])
    } else {
        impares.push(vet[i])
    }
}

alert(`Todos(${vet.length})\n${vet.join(', ')}`)
alert(`Pares(${pares.length})\n${pares.join(', ')}`)
alert(`Impares(${impares.length})\n${impares.join(', ')}`)
