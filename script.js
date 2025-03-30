let brigChoc = 0;
let trufa = 0;
let empada =0;

function atualizarTotal() {
    let total = brigChoc + trufa + empada;
    let visor = document.getElementById("totalItem");
    visor.innerHTML = total; // Exibe o total atualizado na tela
    console.log("BRIGADEIRO="+brigChoc,"TRUFA="+trufa,"EMPADA="+empada)
}

function brigChoc1(){
    brigChoc++;
    atualizarTotal(); // Atualiza o total sempre que o valor muda
}

function brigChoc0(){
    brigChoc = Math.max(0, brigChoc - 1); // Impede que o número fique negativo
    atualizarTotal();
}

function trufa1(){
    trufa++;
    atualizarTotal();
}

function trufa0(){
    trufa = Math.max(0, trufa - 1); // Impede que o número fique negativo
    atualizarTotal();
}
function empada1() {
    empada++;
    atualizarTotal();
}

function empada0() {
    empada = Math.max(0, empada - 1); // Impede que o número fique negativo
    atualizarTotal();
}

function comprar() {
    // Pega os valores atuais das variáveis
    let mensagem = `Olá, gostaria de fazer um pedido:\n\n`;
    
    if (brigChoc > 0) mensagem += `🍫 Brigadeiro: ${brigChoc}\n`;
    if (trufa > 0) mensagem += `🍬 Trufa: ${trufa}\n`;
    if (empada > 0) mensagem += `🥟 Empada: ${empada}\n`;
    
    // Se nenhum item for escolhido
    if (brigChoc === 0 && trufa === 0 && empada === 0) {
        alert("Você precisa selecionar pelo menos um item antes de comprar.");
        return;
    }
    
    mensagem += `\nTotal de itens: ${brigChoc + trufa + empada}`;

    // Codifica a mensagem para ser usada na URL
    let mensagemEncoded = encodeURIComponent(mensagem);

    // Seu número de WhatsApp com código do país e DDD (exemplo: 55 para Brasil e 11 para São Paulo)
    let numeroWhatsapp = "558695633313";

    // URL do WhatsApp
    let url = `https://wa.me/${558695633313}?text=${mensagemEncoded}`;

    // Redireciona para o WhatsApp
    window.open(url, "_blank");
}