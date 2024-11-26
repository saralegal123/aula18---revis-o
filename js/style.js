function mostraAlerta() {
    alert('Revião Aula18')
}

function mostraAlerta1(msg) {
    alert('Boa noite' + msg)
}

function soma(n1, n2) {
    n1 = parseFloat(n1);
    n2 = parseFloat(n2);
    soma = n1 = n2;
    return(soma);
}

function dobro() {
    var valor1, result
    valor1 = document.getElementById('1dN');
    result = parseFloat(valor1.value) + parseFloat(valor1.value);
    document.getElementById('idResult'). innerHTML = result;
}

function calculadora(op) {
    var valor1, valor2, result
    valor1 = document.getElementById('idN11');
    valor2 = document.getElementById('idN22');
    if(op == "+"){
        result = parseFloat(valor1.value) + parseFloat(valor2.value);
        document.getElementById('idResposta').innerHTML=result;
    }
    if(op == "-"){
        result = parseFloat(valor1.value) - parseFloat(valor2.value);
        document.getElementById('idResposta'). innerHTML = result;
    }
    if(op == "*"){
        result = parseFloat(valor1.value) * parseFloat(valor2.value);
        document.getElementById('idResposta'). innerHTML = result;
    }
    else {
        result = parseFloat(valor1.value) / parseFloat(valor2.value);
        document.getElementById('idResposta'). innerHTML = result;
    }
    
} 

