const titulo = document.getElementById('titulo');
const moldura = document.getElementById('moldura_titulo');

const titulo_length = titulo.textContent.length;

moldura.style.setProperty('--tamanho', titulo_length);
titulo.style.setProperty('--titulo_length', titulo_length);