/**
 * LeroLero - PWA Lorem Ipsum Generator
 */

// --- Banco de Palavras ---
const LOREM_WORDS = [
  "lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipiscing", "elit",
  "sed", "do", "eiusmod", "tempor", "incididunt", "ut", "labore", "et", "dolore",
  "magna", "aliqua", "ut", "enim", "ad", "minim", "veniam", "quis", "nostrud",
  "exercitation", "ullamco", "laboris", "nisi", "ut", "aliquip", "ex", "ea",
  "commodo", "consequat", "duis", "aute", "irure", "dolor", "in", "reprehenderit",
  "in", "voluptate", "velit", "esse", "cillum", "dolore", "eu", "fugiat", "nulla",
  "pariatur", "excepteur", "sint", "occaecat", "cupidatat", "non", "proident",
  "sunt", "in", "culpa", "qui", "officia", "deserunt", "mollit", "anim", "id", "est", "laborum"
];

// --- Elementos do DOM ---
const btnGenerate = document.getElementById('btn-generate');
const btnSettings = document.getElementById('btn-settings');
const btnCopy = document.getElementById('btn-copy');
const btnThemeToggle = document.getElementById('theme-toggle');
const settingsPanel = document.getElementById('settings-panel');
const textOutput = document.getElementById('text-output');
const inputParagraphs = document.getElementById('num-paragraphs');
const inputWords = document.getElementById('num-words');
const toast = document.getElementById('toast');

// --- Lógica do Gerador de Texto ---
function getRandomWord() {
  return LOREM_WORDS[Math.floor(Math.random() * LOREM_WORDS.length)];
}

function generateParagraph(wordCount) {
  let words = [];
  for (let i = 0; i < wordCount; i++) {
    words.push(getRandomWord());
  }
  
  let paragraph = words.join(" ");
  // Capitalizar a primeira letra e adicionar ponto final
  paragraph = paragraph.charAt(0).toUpperCase() + paragraph.slice(1) + ".";
  return paragraph;
}

function generateLoremText() {
  const pCount = parseInt(inputParagraphs.value) || 3;
  const wCount = parseInt(inputWords.value) || 45;
  
  let paragraphs = [];
  for (let i = 0; i < pCount; i++) {
    paragraphs.push(`<p>${generateParagraph(wCount)}</p>`);
  }
  
  textOutput.innerHTML = paragraphs.join('');
}

// --- Alternância de Tema ---
function initTheme() {
  const savedTheme = localStorage.getItem('lerolero-theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('lerolero-theme', newTheme);
  updateThemeIcon(newTheme);
}

function updateThemeIcon(theme) {
  btnThemeToggle.querySelector('.icon-theme').textContent = theme === 'light' ? '☀️' : '🌙';
}

// --- Copiar para Área de Transferência ---
async function copyToClipboard() {
  const textToCopy = textOutput.innerText;
  
  if (!textToCopy.trim()) return;

  try {
    await navigator.clipboard.writeText(textToCopy);
    showToast("Texto copiado com sucesso!");
  } catch (err) {
    // Fallback para navegadores mais antigos
    const textarea = document.createElement('textarea');
    textarea.value = textToCopy;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    showToast("Texto copiado com sucesso!");
  }
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.remove('hidden');
  
  setTimeout(() => {
    toast.classList.add('hidden');
  }, 2500);
}

// --- Ajuste dos Inputs Numéricos (+ / -) ---
function setupStepButtons() {
  document.querySelectorAll('.btn-step').forEach(button => {
    button.addEventListener('click', () => {
      const targetId = button.getAttribute('data-target');
      const step = parseInt(button.getAttribute('data-step'));
      const input = document.getElementById(targetId);
      
      let val = parseInt(input.value) + step;
      const min = parseInt(input.min);
      const max = parseInt(input.max);
      
      if (val < min) val = min;
      if (val > max) val = max;
      
      input.value = val;
    });
  });
}

// --- Event Listeners ---
btnGenerate.addEventListener('click', generateLoremText);

btnSettings.addEventListener('click', () => {
  const isHidden = settingsPanel.classList.toggle('hidden');
  settingsPanel.setAttribute('aria-hidden', isHidden);
});

btnCopy.addEventListener('click', copyToClipboard);
btnThemeToggle.addEventListener('click', toggleTheme);

// --- Inicialização ---
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  setupStepButtons();
  generateLoremText(); // Gerar texto inicial ao carregar
});

// --- Registro do Service Worker ---
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js')
      .then(reg => console.log('LeroLero SW registrado com sucesso:', reg.scope))
      .catch(err => console.error('Falha ao registrar SW:', err));
  });
}
