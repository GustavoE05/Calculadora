function calcular (){
    let result=document.getElementById("Calculos").innerHTML;
    if(result){
        document.getElementById("resultado").innerHTML = eval(result);
    }
    else{
        document.getElementById("resultado").innerHTML = "";
    }
}
function numero (num){
    let numero=document.getElementById("Calculos").innerHTML;
    document.getElementById("Calculos").innerHTML = numero + num ;
    
}
function limpar (){
    document.getElementById("Calculos").innerHTML = "";
}
function corrigir (){
    let correcao=document.getElementById("Calculos").innerHTML;
   document.getElementById("Calculos").innerHTML = correcao.substring(0, correcao.length -1);
}
