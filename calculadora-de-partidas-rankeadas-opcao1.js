
function pontuacao (quantVitorias, quantDerrotas) {
    return quantVitorias - quantDerrotas;
}

let vitorias = 100
let saldoVitorias = pontuacao (vitorias, 1);

if (vitorias <=10) {
    console.log ("O Herói tem de saldo de **" + saldoVitorias + "** está no nível de **Ferro*")
}

else if (vitorias <=20) {
    console.log ("O Herói tem de saldo de **" + saldoVitorias + "** está no nível de **Bronze*")
}

else if (vitorias <=50) {
    console.log ("O Herói tem de saldo de **" + saldoVitorias + "** está no nível de **Prata*")
}

else if (vitorias <=80) {
    console.log ("O Herói tem de saldo de **" + saldoVitorias + "** está no nível de **Ouro*")
}

else if (vitorias <=90) {
    console.log ("O Herói tem de saldo de **" + saldoVitorias + "** está no nível de **Diamante*")
}

else if (vitorias <=100) {
    console.log ("O Herói tem de saldo de **" + saldoVitorias + "** está no nível de *Lendário*")
}

else {
    console.log ("O Herói tem de saldo de **" + saldoVitorias + "** está no nível de **Imortal*")
}

