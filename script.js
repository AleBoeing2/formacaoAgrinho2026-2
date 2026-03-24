// Função para navegar entre as "páginas"
function mudarPagina(idPagina) {
    // Esconde todas as seções
    const paginas = document.querySelectorAll('.pagina');
    paginas.forEach(pagina => pagina.classList.remove('ativa'));

    // Remove a classe 'active' de todos os botões do menu
    const botoes = document.querySelectorAll('.nav-btn');
    botoes.forEach(botao => botao.classList.remove('active'));

    // Mostra a seção clicada
    document.getElementById(idPagina).classList.add('ativa');

    // Destaca o botão clicado
    event.currentTarget.classList.add('active');
}

//A lógica abaixo foi criada com IA.

// Lógica do Simulador
function atualizarSimulador() {
    // Pega os valores dos controles deslizantes
    const temp = parseInt(document.getElementById('temp').value);
    const umidadeAr = parseInt(document.getElementById('umidade-ar').value);
    const umidadeSolo = parseInt(document.getElementById('umidade-solo').value);

    // Atualiza os textos na tela
    document.getElementById('temp-val').innerText = temp;
    document.getElementById('umidade-ar-val').innerText = umidadeAr;
    document.getElementById('umidade-solo-val').innerText = umidadeSolo;

    // Elementos de status para atualizar
    const statusMensagem = document.getElementById('status-mensagem');
    const statusCor = document.getElementById('status-cor');

    // Lógica para avaliar as condições do morango
    let mensagensErro = [];

    // Avalia Temperatura (Ideal: 15 a 25)
    if (temp < 15) mensagensErro.push("Muito frio! Risco de congelamento.");
    else if (temp > 28) mensagensErro.push("Muito quente! Os morangos podem murchar.");

    // Avalia Umidade do Ar (Ideal: 60 a 80)
    if (umidadeAr < 50) mensagensErro.push("Ar muito seco! O crescimento será lento.");
    else if (umidadeAr > 85) mensagensErro.push("Ar muito úmido! Alto risco de fungos nas folhas.");

    // Avalia Umidade do Solo (Ideal: 60 a 75)
    if (umidadeSolo < 40) mensagensErro.push("Solo seco! A planta precisa de irrigação.");
    else if (umidadeSolo > 85) mensagensErro.push("Solo encharcado! As raízes podem apodrecer.");

    // Define a mensagem final e a cor
    statusCor.className = ''; // Limpa as classes anteriores

    if (mensagensErro.length === 0) {
        statusMensagem.innerText = "Sustentável e Eficiente! Condições ideais. O uso de recursos está equilibrado.";
        statusCor.classList.add('status-bom');
    } else if (mensagensErro.length === 1) {
        statusMensagem.innerText = "Atenção: " + mensagensErro[0] + " Ajuste para não perder a produção.";
        statusCor.classList.add('status-alerta');
    } else {
        statusMensagem.innerText = "Perigo: Múltiplos problemas! " + mensagensErro.join(" ");
        statusCor.classList.add('status-perigo');
    }
}

// Executa o simulador uma vez ao carregar a página para definir o status inicial
window.onload = atualizarSimulador;