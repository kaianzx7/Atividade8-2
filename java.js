alert('ATENÇÃO, Digite a seguir dois números inteiros, e seu indicador de operação no meio.(+,-,*, ou /)')
alert('Vale lembrar que " * " significa multiplicação, e " / " significa divisão!')

let Num1= parseInt(prompt("Digite o primeiro número inteiro: "))
let i= prompt("Digite o operador: ")
let Num2= parseInt(prompt("Digite o segundo número inteiro: "))

if(i == "+"){
    alert(Num1+Num2)
}
if(i == "-"){
    alert(Num1-Num2)
}
if(i == "*"){
    alert(Num1*Num2)
}
if(i == "/"){
    alert(Num1/Num2)
}


 




