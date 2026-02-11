let saldoConta = 500;
let precoIngresso = 900;

console.log("Tentando comprar o ingresso...")

if (saldoConta >= precoIngresso){
    let troco = saldoConta - precoIngresso
    console.log("Ingresso foi comprado!")
    console.log("Seu troco foi: " + troco)
}   else {
    console.log("Saldo insuficiente! Faltam R$ " + (precoIngresso - saldoConta)) 
}










