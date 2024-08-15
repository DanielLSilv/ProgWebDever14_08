function mostrarResultado(){
    var v = parseFloat(document.getElementById('valor').value);

    if(v <= 300){
        const res = v-(v*0.05);
        document.getElementById('resultado').innerText = `O novo valor com desconto é: ${res}`;
    }
    else if (v>300){
        const res = v-(v*0.10);
        document.getElementById('resultado').innerText = `O novo valor com desconto é: ${res}`;
    }
    else{
        document.getElementById('resultado').innerText = `Insira um valor inteiro`;
    }
}
