# LeroLero 🤌

O **LeroLero** é um gerador minimalista e ultra-rápido de texto *Lorem Ipsum*, projetado em preto e branco com suporte completo a Progressive Web App (PWA) e funcionamento **100% offline**.

---

## 🚀 Funcionalidades

- **🤌 Gerar Texto:** Gera novos parágrafos de *Lorem Ipsum* com um clique.
- **🖐️ Copiar:** Copia o texto gerado instantaneamente para a área de transferência.
- **🤏 Ajustar:** Painel para personalizar a quantidade de parágrafos e palavras por parágrafo.
- **🌓 Modo Claro/Escuro:** Alternador rápido no topo para ajustar o tema de acordo com sua preferência.
- **📱 PWA & Offline:** Funciona sem conexão com a internet e pode ser instalado no celular ou desktop.

---

## 📖 Como Usar no Navegador

1. Abra a aplicação.
2. Clique no botão **Gerar** (🤌) para criar um novo texto.
3. Se desejar alterar as quantidades, clique em **Ajustar** (🤏) e defina o número de parágrafos e palavras.
4. Clique em **Copiar** (🖐️) para levar o texto para a sua área de transferência.

---

## 💻 Como Rodar Localmente

Para rodar o PWA localmente e testar o funcionamento do Service Worker:

1. Clone ou baixe este repositório.
2. Como o Service Worker exige protocolo `http://` ou `https://`, utilize um servidor local simples:
   - **Com VS Code:** Instale a extensão *Live Server* e clique em "Go Live".
   - **Com Python 3:** Execute o comando no terminal na pasta do projeto:
     ```bash
     python -m http.server 8000
     ```
   - **Com Node.js / npx:**
     ```bash
     npx serve
     ```
3. Acesse `http://localhost:8000` no seu navegador.

---

## 🌐 Publicação no GitHub Pages

Para publicar seu PWA gratuitamente no GitHub Pages:

1. Crie um repositório no GitHub chamado `lerolero`.
2. Envie os arquivos do projeto para a branch principal (`main`).
3. No GitHub, vá em **Settings** > **Pages**.
4. Em **Build and deployment**, selecione a branch `main` e a pasta `/ (root)`.
5. Clique em **Save**. Em instantes, o seu app estará no ar no endereço `https://seu-usuario.github.io/lerolero/`.

---

## 🖼️ Ícones do App

Os arquivos `icon-192.png` e `icon-512.png` podem ser exportados do seu editor gráfico (como Affinity Designer) e posicionados na raiz do projeto para suporte completo ao ícone de instalação nos sistemas operacionais móveis e desktop.
