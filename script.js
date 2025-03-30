let brigChoc = 0;
let trufa = 0;
let empada = 0;

// Preços dos itens
const precoBrigChoc = 2.50;
const precoTrufa = 3.00;
const precoEmpada = 5.00;

function atualizarTotal() {
    let totalItens = brigChoc + trufa + empada;
    let valorTotal = (brigChoc * precoBrigChoc) + (trufa * precoTrufa) + (empada * precoEmpada);

    let visor = document.getElementById("totalItem");
    visor.innerHTML = `Total de Itens: ${totalItens} | Valor Total: R$ ${valorTotal.toFixed(2)}`;

    console.log("BRIGADEIRO=" + brigChoc, "TRUFA=" + trufa, "EMPADA=" + empada);
}

// Funções de manipulação de itens
function brigChoc1() {
    brigChoc += 2;
    atualizarTotal();
}

function brigChoc0() {
    brigChoc = Math.max(0, brigChoc - 2);
    atualizarTotal();
}

function trufa1() {
    trufa += 2;
    atualizarTotal();
}

function trufa0() {
    trufa = Math.max(0, trufa - 2);
    atualizarTotal();
}

function empada1() {
    empada += 2;
    atualizarTotal();
}

function empada0() {
    empada = Math.max(0, empada - 2);
    atualizarTotal();
}

// Função para resetar a quantidade do Brigadeiro de Chocolate
function resetBrigChoc() {
    brigChoc = 0;
    atualizarTotal();  // Atualiza o total após o reset
}

// Função para resetar a quantidade da Trufa
function resetTrufa() {
    trufa = 0;
    atualizarTotal();  // Atualiza o total após o reset
}

// Função para resetar a quantidade da Empada
function resetEmpada() {
    empada = 0;
    atualizarTotal();  // Atualiza o total após o reset
}


// Função para enviar o pedido pelo WhatsApp
function comprar() {
    if (brigChoc === 0 && trufa === 0 && empada === 0) {
        alert("Você precisa selecionar pelo menos um item antes de comprar.");
        return;
    }

    let valorTotal = (brigChoc * precoBrigChoc) + (trufa * precoTrufa) + (empada * precoEmpada);

    let mensagem = `Olá, gostaria de fazer um pedido:\n\n`;
    if (brigChoc > 0) mensagem += `🍫 Brigadeiro: ${brigChoc} (R$ ${(brigChoc * precoBrigChoc).toFixed(2)})\n`;
    if (trufa > 0) mensagem += `🍬 Trufa: ${trufa} (R$ ${(trufa * precoTrufa).toFixed(2)})\n`;
    if (empada > 0) mensagem += `🥟 Empada: ${empada} (R$ ${(empada * precoEmpada).toFixed(2)})\n`;

    mensagem += `\nTotal de itens: ${brigChoc + trufa + empada}\n`;
    mensagem += `Valor Total: R$ ${valorTotal.toFixed(2)}`;

    let mensagemEncoded = encodeURIComponent(mensagem);
    let numeroWhatsapp = "558695633313";
    let url = `https://wa.me/${numeroWhatsapp}?text=${mensagemEncoded}`;

    window.open(url, "_blank");
}

// CLICKS NAVBAR
document.getElementById('empada-button').addEventListener('click', () => {
    document.getElementById('empadas').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('trufa-button').addEventListener('click', () => {
    document.getElementById('trufas').scrollIntoView({ behavior: 'smooth' });
});


// FUNCAO RESETAR PEDIDO
function resetarPedido() {
    // Zera todos os itens
    brigChoc = 0;
    trufa = 0;
    empada = 0;

    // Atualiza o total exibido na tela
    atualizarTotal();

    alert("O pedido foi zerado com sucesso.");
}
// FUNCAO MOSTRAR PEDIDO
const button = document.getElementById("revisarPedido")
const modal = document.querySelector("dialog")
const buttonClose = document.getElementById("closeInfo")

button.onclick = function () {
    modal.showModal()

    // INFO DO PEDIDO
    const h1Resumo = document.getElementById("resumoGeral");
    
    let totalItens = brigChoc + trufa + empada;
    let valorTotal = (brigChoc * precoBrigChoc) + (trufa * precoTrufa) + (empada * precoEmpada);
    
    let resumo = `Resumo do Pedido:\n\n`;

    if (brigChoc > 0) resumo += `🍫 Brigadeiros (R$ ${precoBrigChoc.toFixed(2)} cada): ${brigChoc} - R$ ${(brigChoc * precoBrigChoc).toFixed(2)}\n`;
    if (trufa > 0) resumo += `🍬 Trufas (R$ ${precoTrufa.toFixed(2)} cada): ${trufa} - R$ ${(trufa * precoTrufa).toFixed(2)}\n`;
    if (empada > 0) resumo += `🥟 Empadas (R$ ${precoEmpada.toFixed(2)} cada): ${empada} - R$ ${(empada * precoEmpada).toFixed(2)}\n`;
    if (totalItens > 0) {
        resumo += `\nTotal de Itens: ${totalItens} | Valor Total: R$ ${valorTotal.toFixed(2)}`;
    } else {
        resumo = "Nenhum pedido registrado ainda.";
    }
    
    h1Resumo.innerText = resumo;
}
buttonClose.onclick = function(){
    modal.close()
}