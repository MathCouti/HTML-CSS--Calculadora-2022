function clicado(num){
    var numero = document.getElementById("result").innerHTML
    document.getElementById("result").innerHTML = numero + num
}

function clean(){
    document.getElementById("result").innerHTML = "";//aqui falo que quero colocar no result um valor sem nada
}

function calcular(){
    var resultado = document.getElementById("result").innerHTML;
    if(resultado){
        document.getElementById("result").innerHTML = eval(resultado);
    }

}