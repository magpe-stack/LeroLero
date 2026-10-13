Aqui está o arquivo **`README.md`** completo e atualizado, contendo todas as instruções, desde o uso básico até a publicação no GitHub Pages e o passo a passo completo de instalação como aplicativo (PWA) no celular e no computador:

```markdown
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

## 📖 Como Usar no Site (Sem Instalar)

1. Acesse o endereço da aplicação no navegador.
2. Clique no botão **Gerar** (🤌) para criar um novo texto.
3. Se desejar alterar as quantidades, clique em **Ajustar** (🤏) e defina o número de parágrafos e palavras por parágrafo através dos botões de controle (`+` / `-`).
4. Clique no botão **Copiar** (🖐️) para levar o texto gerado para a sua área de transferência instantaneamente.
5. Utilize o ícone de alternância de tema no topo à direita (`🌓`) para alternar entre o modo claro e escuro a qualquer momento.

---

## 📱 Como Instalar como Aplicativo (PWA)

O **LeroLero** pode ser instalado como um aplicativo nativo no celular ou computador, permitindo acesso rápido com ícone próprio e funcionamento totalmente offline.

### 🤖 No Android (Google Chrome / Edge)
1. Acesse o site do app pelo navegador Chrome ou Edge.
2. Aguarde alguns segundos até aparecer o banner/aviso **"Adicionar à tela inicial"** ou **"Instalar aplicativo"**.
3. Se o aviso não aparecer automaticamente, toque no **menu de três pontos** (`⋮`) no canto superior direito do navegador.
4. Selecione a opção **"Instalar aplicativo"** (ou **"Adicionar à tela inicial"**).
5. Confirme em **Instalar**. O ícone do LeroLero será adicionado à sua gaveta de apps.

---

### 🍎 No iPhone e iPad (Safari)
*(Nota: No iOS, a instalação de PWAs deve ser feita prioritariamente pelo navegador Safari).*

1. Abra o site do app no navegador **Safari**.
2. Toque no botão **Compartilhar** (ícone do quadrado com a seta para cima, localizado na barra inferior).
3. Role a lista de opções para baixo e selecione **"Adicionar à Tela de Início"**.
4. Defina o nome (ou mantenha "LeroLero") e toque em **Adicionar** no canto superior direito.
5. O aplicativo estará pronto e acessível diretamente na tela inicial do seu dispositivo.

---

### 💻 No Computador (Google Chrome, Edge ou Brave)
1. Acesse o site do PWA no computador.
2. Na barra de endereço do navegador (na parte direita, perto dos favoritos), observe o aparecimento do ícone de uma **tela com uma seta para baixo** (Instalar) ou o ícone do **LeroLero**.
3. Clique no ícone e depois em **Instalar**.
4. *Alternativa:* Clique no **menu de três pontos** (`⋮`) no canto superior direito > **Salvar e Compartilhar** > **Instalar LeroLero...**.
5. O app abrirá em uma janela própria dedicada e um atalho será criado na sua área de trabalho/menu iniciar.

---

## 💻 Como Instalar e Rodar Localmente

Para rodar o projeto na sua máquina e testar o funcionamento do Service Worker:

1. Clone ou baixe este repositório contendo os arquivos (`index.html`, `style.css`, `app.js`, `sw.js`, `manifest.json`, `logo.svg`).
2. Como o Service Worker exige protocolo HTTP/HTTPS, utilize um servidor local simples:
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

```
