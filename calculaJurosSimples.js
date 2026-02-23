function calculaJurosSimples (capital, taxa, tempo){
    let juros = capital * (taxa/100) * tempo;
    let montante = capital + juros;
    
    return montante;
}
let conta1 = calculaJurosSimples(5000, 4, 6);


function calculaJurosCompostos (capital, taxa, qtd_de_juros){
    let montante2 = capital * (1 + taxa) ** qtd_de_juros;

    return montante2;
}

let conta2 = calculaJurosCompostos(100, 1, 10);
console.log("O montante é: " + conta2);


