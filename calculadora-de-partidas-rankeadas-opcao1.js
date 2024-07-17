
function pontuacao (quantVitorias, quantDerrotas) {

    return quantVitorias - quantDerrotas;
}

let vitorias = 101
let resultado = pontuacao (vitorias, 1);

if (vitorias <=10) {
    console.log ("ferro")
}

else if (vitorias <=20) {
    console.log ("bronze")
}

else if (vitorias <=50) {
    console.log ("prata")
}

else if (vitorias <=80) {
    console.log ("ouro")
}

else if (vitorias <=90) {
    console.log ("diamante")
}

else if (vitorias <=100) {
    console.log ("lendário")
}

else {
    console.log ("imortal")
}