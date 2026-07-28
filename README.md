# 🍅 Pomato — Pomodoro

O **Pomato** é uma aplicação web simples, intuitiva e moderna baseada na **Técnica Pomodoro**, desenvolvida para ajudar no gerenciamento de tempo, aumento de produtividade e foco nas tarefas diárias.

🔗 **Link de Acesso:** [pomato-pomodoro.vercel.app](https://pomato-pomodoro.vercel.app)

---

## 🔨 Funcionalidades

- ⏱️ **Timer de Pomodoro:** Início rápido de ciclos com contagem regressiva para controle de foco e pausas.
- 📝 **Nomeação de Tarefas:** Defina o nome da tarefa em execução antes ou ao iniciar um novo ciclo.
- ⚙️ **Configurações Personalizadas:** Personalize o tempo dos ciclos:
  - Tempo de Foco (ex: 25 min)
  - Descanso Curto (ex: 5 min)
  - Descanso Longo (ex: 15 min)
- 📊 **Histórico de Ciclos:** Tabela completa com o histórico das tarefas realizadas, duração, data, status (em progresso, concluído) e tipo de ciclo. Permite também a limpeza do histórico.
- 🌗 **Troca de Tema:** Suporte a **Tema Claro (Light Mode)** e **Tema Escuro (Dark Mode)**.
- 🔔 **Aviso Sonoro:** Alerta de áudio ao finalizar cada ciclo de tempo.
- ℹ️ **Explicação do Método:** Seção explicativa sobre a técnica Pomodoro.

---

## 🛠️ Tecnologias utilizadas

[![Tech](https://skillicons.dev/icons?i=react,vite,pnpm)](https://skillicons.dev)
[![CSS](https://skillicons.dev/icons?i=css)](https://skillicons.dev)
[![Deploy](https://skillicons.dev/icons?i=vercel)](https://skillicons.dev)

---

## 📁 Estrutura de páginas e navegação

- **`/` (Home):** Tela principal com o timer, input da tarefa, botões de ação e navegação.
- **`/history` (Histórico):** Lista e registro de todas as sessões realizadas.
- **`/settings` (Configurações):** Customização dos tempos de foco e descanso.
- **`/about` (Sobre):** Explicação sobre a técnica Pomodoro.

---

## 💻 Como rodar o projeto

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/Guichardx2/pomato.git

2. **Navegue para a pasta**
   ```bash
   cd pomato

3. **Instale as dependências **
   ```bash
   npm install
   # ou
   yarn install
   # ou
   pnpm install

4. **Execute o servidor de desenvolvimento**
   ```bash
    npm run dev
    # ou
    yarn dev
    # ou
    pnpm dev 
