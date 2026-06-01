// Dados do Quiz sobre Cidades Sustentáveis
const quizData = [
    {
        question: "Qual cidade brasileira lidera o saneamento básico com 100% de água e esgoto tratados?",
        options: ["São Paulo (SP)", "São Caetano do Sul (SP)", "Curitiba (PR)"],
        correct: 1,
        explanation: "São Caetano do Sul (SP) universalizou o saneamento, garantindo água e tratamento de esgoto para todas as residências."
    },
    {
        question: "Cidades sustentáveis e ecocidades tecnicamente significam exatamente a mesma coisa?",
        options: ["Não, cidades sustentáveis adaptam o que já existe; ecocidades buscam autossuficiência total.", "Sim, são sinônimos perfeitos na engenharia e arquitetura.", "Não, cidades sustentáveis usam apenas carros elétricos."],
        correct: 0,
        explanation: "Cidades sustentáveis corrigem e otimizam cidades tradicionais. Ecocidades são planejadas para funcionar integradas à natureza como ecossistemas vivos."
    },
    {
        question: "Qual o principal objetivo ambiental de expandir frotas de ônibus elétricos nas metrópoles?",
        options: ["Aumentar a velocidade dos veículos.", "Gerar mais empregos digitais.", "Descarbonizar o transporte coletivo urbano."],
        correct: 2,
        explanation: "A eletrificação de frotas reduz drasticamente a emissão de gases do efeito estufa e melhora a qualidade do ar nas cidades."
    }
];

let currentQuestionIndex = 0;

// Elementos do DOM
const questionElement = document.getElementById("question");
const optionsContainer = document.getElementById("options");
const feedbackElement = document.getElementById("feedback");
const nextButton = document.getElementById("next-btn");

function loadQuestion() {
    resetState();
    const currentQuestion = quizData[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;

    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.classList.add("option-btn");
        button.addEventListener("click", () => selectOption(index, button));
        optionsContainer.appendChild(button);
    });
}

function resetState() {
    feedbackElement.classList.add("hidden");
    feedbackElement.className = "feedback";
    nextButton.classList.add("hidden");
    optionsContainer.innerHTML = "";
}

function selectOption(selectedIndex, selectedButton) {
    const currentQuestion = quizData[currentQuestionIndex];
    const allButtons = optionsContainer.querySelectorAll(".option-btn");

    // Desativa novos cliques
    allButtons.forEach(btn => btn.disabled = true);

    if (selectedIndex === currentQuestion.correct) {
        selectedButton.classList.add("correct");
        feedbackElement.textContent = `✅ Correto! ${currentQuestion.explanation}`;
        feedbackElement.classList.add("correct");
    } else {
        selectedButton.classList.add("wrong");
        allButtons[currentQuestion.correct].classList.add("correct");
        feedbackElement.textContent = `❌ Incorreto. ${currentQuestion.explanation}`;
        feedbackElement.classList.add("wrong");
    }

    feedbackElement.classList.remove("hidden");
    nextButton.classList.remove("hidden");
}

nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        // Fim do quiz
        questionElement.textContent = "🎉 Parabéns! Você concluiu o desafio sobre Cidades Sustentáveis.";
        optionsContainer.innerHTML = "";
        feedbackElement.classList.add("hidden");
        nextButton.classList.add("hidden");
    }
});

// Inicialização
document.addEventListener("DOMContentLoaded", loadQuestion);
