javascript
function escolhaCorreta() {
    let resposta = document.getElementById("resultado-desafio");
    resposta.innerHTML = "Excelente! 🔋 Descarte o e-lixo corretamente. Componentes químicos pesados contaminam o solo se forem para aterros normais.";
    resposta.style.color = "#00796B";
}

function escolhaIncorreta() {
    let resposta = document.getElementById("resultado-desafio");
    resposta.innerHTML = "Ação inadequada! 🌍 Lixo eletrônico comum polui a natureza ou fica acumulado sem utilidade. Tente o descarte correto.";
    resposta.style.color = "#D32F2F";
}
