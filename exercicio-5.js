var vetLog = [], vetLing = []
var sim = 0

for (var i = 0; i < 15; i++) {
    var input = window.prompt("Matricula Log progr:")

    if (isNaN(input)) {
        break;
    }

    vetLog.push(input)
}

for (var i = 0; i < 10; i++) {
    var input = window.prompt("Matricula Ling progr:")

    if (isNaN(input)) {
        break;
    }

    vetLing.push(input)

    if (vetLog.includes(input)) {
        sim ++;
    }
}

alert(`Cursam ambos\n${sim}`)
