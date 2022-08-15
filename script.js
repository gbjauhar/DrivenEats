let selecionados = 0;
function selecionarPrato(classBotao){

    const botaoSelecionado = document.querySelector('.plates .selecionado');
    if ( botaoSelecionado !== null){
    botaoSelecionado.classList.remove('selecionado');
    selecionados--;
    }
    
    const seletor = '.'+classBotao;
    const botao = document.querySelector(seletor);
    botao.classList.add('selecionado');
    selecionados++;
    valorprato=botao.getElementsByTagName("h3")[0].innerHTML;
    valorprato= valorprato.replace("R$ ","");
    nomeprato=botao.getElementsByTagName("h1")[0].innerHTML;

    continuar();

}
function selecionarBebida(classBotao){

    const botaoSelecionado = document.querySelector('.drinks .selecionado');
    if ( botaoSelecionado !== null){
    botaoSelecionado.classList.remove('selecionado');
    selecionados--;
    }
    
    const seletor = '.'+classBotao;
    const botao = document.querySelector(seletor);
    botao.classList.add('selecionado');
    selecionados++;
    valorbebida=botao.getElementsByTagName("h3")[0].innerHTML;
    valorbebida= valorbebida.replace("R$ ","");
    nomebebida=botao.getElementsByTagName("h1")[0].innerHTML;
    continuar();


}
function selecionarSobremesa(classBotao){

    const botaoSelecionado = document.querySelector('.desserts .selecionado');
    if ( botaoSelecionado !== null){
    botaoSelecionado.classList.remove('selecionado');
    selecionados--;
    }
    
    const seletor = '.'+classBotao;
    const botao = document.querySelector(seletor);
    botao.classList.add('selecionado');
    selecionados++;
    valorsobremesa=botao.getElementsByTagName("h3")[0].innerHTML;
    valorsobremesa= valorsobremesa.replace("R$ ","");
    nomesobremesa=botao.getElementsByTagName("h1")[0].innerHTML;
    continuar();

}
function continuar(){

    const elemento1 = document.querySelector('.graybutton');
    const elemento2 = document.querySelector('.greenbutton');

    if ( selecionados === 3){
        elemento1.classList.add('hidden');
        elemento2.classList.remove('hidden');
    }

}
let valorprato;
let valorsobremesa;
let valorbebida;
function somatotal(){
        valor1=valorprato;
        valor2=valorbebida;
        valor3=valorsobremesa;
        soma= Number(valor1) + Number(valor2) + Number(valor3);
        totalfinal=`R$:${soma.toFixed(2)}`
        totalfinal=totalfinal.replace(".", ",");
    }
    
let nomeprato;
let nomesobremesa;
let nomebebida;
function finalizar() {
    somatotal();
    window.open("https://wa.me/5522981416432?text=" + encodeURIComponent(`Olá, gostaria de fazer o pedido:
        - Prato: ${nomeprato}
        - Bebida: ${nomebebida}
        - Sobremesa: ${nomesobremesa}
        Total:${totalfinal}`));
        
}