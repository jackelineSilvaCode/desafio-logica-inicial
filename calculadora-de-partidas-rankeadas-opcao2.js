function pontuacao (quantVitorias, quantDerrotas) {

    if (quantVitorias <=10) {
        console.log ("ferro")
    }
    
    else if (quantVitorias <=20) {
        console.log ("bronze")
    }
    
    else if (quantVitorias <=50) {
        console.log ("prata")
    }
    
    else if (quantVitorias <=80) {
        console.log ("ouro")
    }
    
        else if (quantVitorias <=90) {
        console.log ("diamante")
    }
    
    else if (quantVitorias <=100) {
        console.log ("lendário")
    }
    
    else {
        console.log ("imortal")
    }
    
    return quantVitorias - quantDerrotas;
}

let vitorias = 101
let resultado = pontuacao (vitorias, 1);

