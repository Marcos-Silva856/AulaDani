var vet = []
var mult2 = [], mult3 = [], mult23 = []

for (var i = 0; i < 15; i++) {
    var input = window.prompt("Entre com um numero:")

    if (isNaN(input)) {
        break;
    }

    vet.push(input)

    if (!(vet[i] % 2)) {
        mult2.push(vet[i])
    }
    if (!(vet[i] % 3)) {
        mult3.push(vet[i])
    }
    if (!(vet[i] % 2) && !(vet[i] % 3)) {
        mult23.push(vet[i])
    }
}

alert(`Pares:
${mult2.join(',')}
Divisivel por 3:
${mult3.join(',')}
Divisivel por 2 e 3:
${mult23.join(',')}`)