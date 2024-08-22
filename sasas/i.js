let numero , quadradro

numero=prompt("informe um numero: ")

while(numero!=0){
    numero=prompt("infornme outro numero")
    quadradro=(numero*numero)
    document.write(`o valor do ${numero} ao quadrado é ${quadradro}`)
    document.write(`<br>`)
}