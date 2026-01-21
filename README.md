# 🎉 tres_anos

📅 **Projeto:** Aplicação web comemorativa de 3 anos  
🔗 **Deploy (produção):** https://tres-anos-mu.vercel.app  
📦 **Tecnologias:** TypeScript, Vite, React (ou similar), Tailwind CSS, Supabase, Docker

---

## 🚀 Sobre o Projeto

Este projeto é uma **aplicação web comemorativa** criada para marcar **3 anos de uma data especial**, relacionamento, parceria ou marco importante. O app combina uma **interface interativa no frontend** com um **backend leve**, possivelmente usando Supabase para autenticação e/ou armazenamento de dados (como mensagens, fotos, votos, etc.).

Ele foi desenvolvido com foco em **experiência do usuário, desempenho e escalabilidade**, usando ferramentas modernas como Vite, TypeScript, Tailwind CSS e integração com serviços de backend.

---

## 📁 Estrutura do Repositório

/
├── .github/workflows/ # Workflows de CI/CD (GitHub Actions)
├── backend/ # Backend (API ou lógica customizada)
├── public/ # Arquivos estáticos (HTML, imagens, favicon, etc.)
├── src/ # Código principal da aplicação (UI)
├── supabase/ # Configurações e funções do Supabase
├── Dockerfile # Configuração para containerização
├── .env # Variáveis de ambiente (não comitado)
├── vite.config.ts # Configuração do Vite
├── tsconfig.json # Configuração TS
├── package.json # Scripts e dependências
└── ...


---

## 🛠️ Tecnologias e Ferramentas

| Tipo                      | Ferramenta / Lib                                               |
|---------------------------|----------------------------------------------------------------|
| Frontend                  | TypeScript, React (ou framework similar), Vite                 |
| Estilização               | Tailwind CSS                                                   |
| Backend / BaaS            | Supabase                                                      |
| Containerização           | Docker                                                        |
| Deploy                    | Vercel                                                        |
| Integração contínua       | GitHub Actions                                                |

---

## 💻 Como Rodar Localmente

1. **Clone o repositório**

``bash
git clone https://github.com/Kakykyyy/tres_anos.git
Entre na pasta

cd tres_anos
Instale as dependências

npm install
# ou
yarn install
Copie variáveis de ambiente

Crie um arquivo .env com as variáveis de ambiente necessárias (por exemplo, chaves do Supabase). Algo assim:

VITE_SUPABASE_URL=xxxxx
VITE_SUPABASE_ANON_KEY=xxxxx
⚠️ Essas chaves normalmente estão no diretório supabase/.

Inicie a aplicação

npm run dev
Abra no navegador

➡️ Acesse: http://localhost:5173 (ou porta configurada no Vite)

📦 Scripts Comuns
Comando	Descrição
npm run dev	Inicia o ambiente de desenvolvimento
npm run build	Gera o build de produção
npm run preview	Visualiza o build de produção local
docker build ...	Build de container Docker
docker run ...	Executa container Docker
📌 Possíveis Funcionalidades
✨ A depender da intenção do projeto, ele pode incluir:

🎂 Página comemorativa com conteúdo visual e interativo

❤️ Mensagens personalizadas

📸 Galeria de fotos

🗳️ Formulários para enviar votos/mensagens

🔐 Login via Supabase

💬 Comentários ou mural público

📸 Demonstração
<img width="1902" height="953" alt="image" src="https://github.com/user-attachments/assets/433baaaa-38e4-4daa-81a0-3dd16991b8f8" />



🤝 Contribuindo
Contribuições são bem-vindas! Siga estes passos:

Faça um fork 🎯

Crie uma branch: git checkout -b minha-contribuição 🔀

Faça commit: git commit -m "feat: descrição" 💡

Envie para a sua branch git push origin minha-contribuição 🚀

Abra um PR para revisão 🧠
