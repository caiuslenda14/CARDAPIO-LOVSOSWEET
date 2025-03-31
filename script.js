let brigChoc = 0;
let brigBeij = 0;
let BrigNinh = 0;

// Preços dos itens
const precoBrigChoc = 3.00;
const precoBrigBeij = 3.00;
const precoBrigNinh = 3.00;

function atualizarTotal() {
    let totalItens = brigChoc + brigBeij + BrigNinh;
    let valorTotal = (brigChoc * precoBrigChoc) + (brigBeij * precoBrigBeij) + (BrigNinh * precoBrigNinh);

    let visor = document.getElementById("totalItem");
    visor.innerHTML = `Total de Itens: ${totalItens} | Valor Total: R$ ${valorTotal.toFixed(2)}`;

    console.log("CHOCOLATE=" + brigChoc, "BEIJINHO=" + brigBeij, "NINHO=" + BrigNinh);
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

function brigBeij1() {
    brigBeij += 2;
    atualizarTotal();
}

function brigBeij0() {
    brigBeij = Math.max(0, brigBeij - 2);
    atualizarTotal();
}

function brigNinh1() {
    BrigNinh += 2;
    atualizarTotal();
}

function brigNinh0() {
    BrigNinh = Math.max(0, BrigNinh - 2);
    atualizarTotal();
}

// Função para resetar a quantidade do Brigadeiro de Chocolate
function resetBrigChoc() {
    brigChoc = 0;
    atualizarTotal();  // Atualiza o total após o reset
}

// Função para resetar a quantidade da Trufa
function resetBrigBeij() {
    brigBeij = 0;
    atualizarTotal();  // Atualiza o total após o reset
}

// Função para resetar a quantidade da Empada
function resetBrigNinh() {
    BrigNinh = 0;
    atualizarTotal();  // Atualiza o total após o reset
}


// Função para enviar o pedido pelo WhatsApp
function comprar() {
    if (brigChoc === 0 && brigBeij === 0 && BrigNinh === 0) {
        alert("Você precisa selecionar pelo menos um item antes de comprar.");
        return;
    }

    let valorTotal = (brigChoc * precoBrigChoc) + (brigBeij * precoBrigBeij) + (BrigNinh * precoBrigNinh);

    let mensagem = `Olá, gostaria de fazer um pedido:\n\n`;
    if (brigChoc > 0) mensagem += `🍫 Brigadeiro: ${brigChoc} (R$ ${(brigChoc * precoBrigChoc).toFixed(2)})\n`;
    if (brigBeij > 0) mensagem += `🥥 Beijinho: ${brigBeij} (R$ ${(brigBeij * precoBrigBeij).toFixed(2)})\n`;
    if (BrigNinh > 0) mensagem += `🐮 Ninho: ${BrigNinh} (R$ ${(BrigNinh * precoBrigNinh).toFixed(2)})\n`;

    mensagem += `\nTotal de itens: ${brigChoc + brigBeij + BrigNinh}\n`;
    mensagem += `Valor Total: R$ ${valorTotal.toFixed(2)}`;

    let mensagemEncoded = encodeURIComponent(mensagem);
    let numeroWhatsapp = "558681400374";
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
    brigBeij = 0;
    BrigNinh = 0;

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
    
    let totalItens = brigChoc + brigBeij + BrigNinh;
    let valorTotal = (brigChoc * precoBrigChoc) + (brigBeij * precoBrigBeij) + (BrigNinh * precoBrigNinh);
    
    let resumo = `Resumo do Pedido:\n\n`;

    if (brigChoc > 0) resumo += `🍫 Chocolate (R$ ${precoBrigChoc.toFixed(2)} cada): ${brigChoc} - R$ ${(brigChoc * precoBrigChoc).toFixed(2)}\n`;
    if (brigBeij > 0) resumo += `🥥 Beijinho (R$ ${precoBrigBeij.toFixed(2)} cada): ${brigBeij} - R$ ${(brigBeij * precoBrigBeij).toFixed(2)}\n`;
    if (BrigNinh > 0) resumo += `🐮 Ninho (R$ ${precoBrigNinh.toFixed(2)} cada): ${BrigNinh} - R$ ${(BrigNinh * precoBrigNinh).toFixed(2)}\n`;
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