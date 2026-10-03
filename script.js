const input = document.getElementById('command-input');
const outputContainer = document.getElementById('output-container');

// Banco de dados dos comandos do terminal
const commands = {
    'help': `Comandos disponíveis:
  <span class="highlight">whoami</span>    - Exibe informações sobre mim
  <span class="highlight">skills</span>    - Lista minhas habilidades técnicas
  <span class="highlight">projects</span>  - Mostra alguns projetos que desenvolvi
  <span class="highlight">clear</span>     - Limpa o terminal`,
    
    'whoami': `Gabriel Raposo dos Santos
Estudante de Ciência da Computação na UFOP.
Focado em engenharia de sistemas de baixo nível, arquitetura de software e desenvolvimento C e C++.`,
    
    'skills': `Linguagens: C, C++, Rust, Haskell, Java, HTML/CSS/JS
Ferramentas: GCC, Clang, CMake, Ninja, Git, Docker
Ambiente: Linux, POSIX, Bash`,
    
    'projects': `1. <span class="highlight">Emulador CHIP-8 (C)</span> - Emulador utilizando SDL3, construído com CMake e Ninja.`
};

// Mantém o foco no input sempre que o usuário clicar na tela
document.addEventListener('click', () => {
    input.focus();
});

// Captura o "Enter"
input.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        const command = this.value.trim().toLowerCase();
        
        // Só processa se houver algo digitado
        if (command) {
            processCommand(command, this.value.trim());
        } else {
            // Se estiver vazio, apenas pula uma linha com o prompt
            printEmptyPrompt();
        }
        
        this.value = ''; // Limpa o input
    }
});

function printEmptyPrompt() {
    const promptLine = document.createElement('div');
    promptLine.innerHTML = `<span class="prompt-user">gabriel@pop-os</span><span class="prompt-separator">:</span><span class="prompt-path">~</span>$`;
    outputContainer.appendChild(promptLine);
    scrollToBottom();
}

function processCommand(cmd, rawInput) {
    // 1. Imprime a linha do comando que o usuário digitou
    const cmdElement = document.createElement('div');
    cmdElement.innerHTML = `<span class="prompt-user">gabriel@pop-os</span><span class="prompt-separator">:</span><span class="prompt-path">~</span>$ `;
    
    const textNode = document.createTextNode(rawInput);
    cmdElement.appendChild(textNode);
    
    outputContainer.appendChild(cmdElement);

    // 2. Executa a ação do comando
    if (cmd === 'clear') {
        outputContainer.innerHTML = '';
        return;
    }

    // 3. Imprime a resposta
    const responseElement = document.createElement('div');
    responseElement.className = 'output';
    
    if (commands[cmd]) {
        responseElement.innerHTML = commands[cmd];
    } else {
        responseElement.innerHTML = `<span class="error">bash: ${cmd}: comando não encontrado</span>`;
    }
    
    outputContainer.appendChild(responseElement);
    scrollToBottom();
}

function scrollToBottom() {
    window.scrollTo(0, document.body.scrollHeight);
}