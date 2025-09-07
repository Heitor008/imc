function calcular(){
    let peso = Number(document.getElementById('txtp').value)
    let altura = Number(document.getElementById('txta').value)/100
    let imc = peso / ( altura * altura)

    document.getElementById('res').innerText = `O seu Índice de massa corpórea é de ${imc.toFixed(2)}`
       
}