let textoDigitado = document.querySelector('textarea');
let textoCriptografado = document.querySelector('#saida-texto');

function criptografar(){
    let texto = textoDigitado.value;
    let resultadoCriptografia = texto.replace(/e/g, 'enter').replace(/i/g, 'imes').replace(/a/g, 'ai').replace(/o/g, 'ober').replace(/u/g, 'ufat');

    document.getElementById('saida-texto').innerHTML = '<textarea class="resultado" readonly id="area-resultado">' + resultadoCriptografia + '</textarea>' + '<button class="conteudo__saida__botaoCopiar" id="copiar" onclick="copiar()">copiar</button>';
}

function descriptografar(){
    let texto = textoDigitado.value;
    let resultadoDescriptografia = texto.replace(/enter/g, 'e').replace(/imes/g, 'i').replace(/ai/g, 'a').replace(/ober/g, 'o').replace(/ufat/g, 'u');

    document.getElementById('saida-texto').innerHTML = '<textarea class="resultado" readonly id="area-resultado">' + resultadoDescriptografia + '</textarea>' +'<button class="conteudo__saida__botaoCopiar" id="copiar" onclick="copiar()">copiar</button>';
}

function copiar(){
    let copiaTexto = document.createElement('textarea');
    copiaTexto.value = textoCriptografado.querySelector('.resultado').value;
    document.body.appendChild(copiaTexto);
    copiaTexto.select();
    document.execCommand('copy');
    document.body.removeChild(copiaTexto);
}