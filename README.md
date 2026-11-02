<div align="center">

# Três Anos

**Memórias e momentos em uma homenagem interativa**

![React](https://img.shields.io/badge/React-20232a?style=flat-square) ![TypeScript](https://img.shields.io/badge/TypeScript-20232a?style=flat-square) ![Vite](https://img.shields.io/badge/Vite-20232a?style=flat-square) ![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-20232a?style=flat-square) ![Express](https://img.shields.io/badge/Express-20232a?style=flat-square)

[Sobre](#sobre) · [Como executar](#como-executar) · [Documentação](DOCUMENTACAO.md)

</div>

---

## Sobre

Site comemorativo que reúne fotos, poemas, música e um contador de tempo para celebrar uma história. O repositório inclui também uma API independente para armazenar mensagens.

## Destaques

- Contador comemorativo e seções personalizadas.
- Galeria com ampliação de fotos.
- Poemas, conteúdo visual e player musical.
- API de mensagens com validação e persistência JSON.

## Como executar

Clone o repositório:

```sh
git clone https://github.com/Kakykyyy/tres_anos.git
cd tres_anos
```

Utilize Node.js e npm compatíveis com as dependências do projeto. A API de mensagens é executada separadamente do frontend.

```sh
npm install
npm run dev
```

Acesse [a aplicação local](http://localhost:8080).

## Organização

```text
src/
├── components/    # Seções e interações
├── assets/        # Fotos e recursos visuais
└── integrations/  # Cliente Supabase
backend/src/       # API de mensagens
supabase/          # Configuração
```

## Personalização

Atualize imagens e legendas em `src/components/PhotoGallery.tsx` e os arquivos em `src/assets/`. Os componentes de contador, poemas e música concentram os demais conteúdos da homenagem.

## Backend e configuração

A API oferece `GET /api/health`, `GET /api/messages` e `POST /api/messages`. Para executá-la junto ao frontend, configure uma porta diferente de 8080. O guia técnico traz os comandos, o formato das mensagens e as variáveis do cliente Supabase.

## Comandos do frontend

| Comando | Finalidade |
|---|---|
| `npm run dev` | Desenvolvimento |
| `npm run build` | Gerar `dist/` |
| `npm run preview` | Visualizar o build |
| `npm run lint` | Analisar o código |

## Documentação técnica

O [guia técnico](DOCUMENTACAO.md) reúne configuração, comportamento dos dados, limitações conhecidas e verificações manuais. As instruções foram elaboradas a partir da leitura do código; a execução dos projetos não foi validada nesta revisão.

## Autor

Desenvolvido por [Kayky Erick · @Kakykyyy](https://github.com/Kakykyyy).
