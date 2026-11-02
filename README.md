# Três Anos

Site comemorativo em React e TypeScript, com contador, galeria, poemas, conteúdo visual e player musical. O repositório também contém uma API Express independente para mensagens.

## Tecnologias e estrutura

- `src/`: frontend React, componentes e páginas.
- `src/components/`: contador, galeria, poemas e demais seções.
- `src/assets/`: fotos e recursos visuais.
- `src/integrations/supabase/`: cliente e tipos Supabase.
- `backend/src/index.ts`: rotas HTTP da API de mensagens.
- `backend/src/storage.ts`: persistência JSON em disco.
- `supabase/config.toml`: configuração do projeto Supabase.
- `Dockerfile`, `backend/Dockerfile` e arquivos compose: configurações de contêiner.

A presença do cliente Supabase não comprova que login, upload ou mural estejam ligados à interface. A galeria analisada usa imagens importadas do próprio repositório.

## Frontend local

Use Node.js e npm. Uma versão LTS compatível com as dependências é o ambiente sugerido; não há campo engines no package.json do frontend.

```sh
git clone https://github.com/Kakykyyy/tres_anos.git
cd tres_anos
npm install
npm run dev
```

Abra http://localhost:8080, porta definida em `vite.config.ts`.

| Comando | Finalidade |
|---|---|
| `npm run dev` | Servidor de desenvolvimento |
| `npm run build` | Build em `dist/` |
| `npm run build:dev` | Build em modo development |
| `npm run preview` | Visualização do build |
| `npm run lint` | ESLint |

Se utilizar o cliente Supabase, crie um `.env.local` na raiz com valores do seu projeto:

```dotenv
VITE_SUPABASE_URL=https://seu-projeto.supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY=sua-chave-publicavel
```

Esses são os nomes lidos por `client.ts`. Não coloque chaves de serviço em variáveis VITE, pois elas são incluídas no frontend. Reinicie o Vite após alterar o ambiente.

## API de mensagens

Em outro terminal, a partir da raiz:

```sh
cd backend
npm install
```

Frontend e backend usam 8080 por padrão. No PowerShell, escolha 8081 para a API:

```powershell
$env:PORT = "8081"
npm run dev
```

No Linux/macOS, use `PORT=8081 npm run dev`. Para compilar o backend, execute `npm run build`; `npm start` inicia `dist/index.js` após a compilação. O arquivo .env de exemplo não é carregado automaticamente pelo código analisado.

| Método | Caminho | Resposta |
|---|---|---|
| GET | `/api/health` | Status e timestamp |
| GET | `/api/messages` | Lista de mensagens |
| POST | `/api/messages` | Cria mensagem, status 201; entrada inválida retorna 400 |

Corpo de exemplo:

```json
{
  "name": "Pessoa de teste",
  "email": "teste@example.com",
  "message": "Uma lembrança especial."
}
```

O registro recebe `id` e `createdAt`. Os dados ficam em `data/messages.json` relativo ao diretório de execução do backend. Preserve essa pasta para manter os dados. As rotas não exigem autenticação, o CORS é aberto e a escrita JSON não tem controle de concorrência. Não há vinculação automática desta API com o frontend no procedimento acima.

## Personalização

Troque as imagens em `src/assets/` e os imports/legendas em `PhotoGallery.tsx`. A galeria amplia fotos existentes; não é um serviço de upload. Edite os componentes de contador, poemas e música para personalizar a homenagem.

## Verificação e limites

Não há script de teste automatizado no frontend. Verifique contador, fotos ampliadas, navegação, música e build. Na API, consulte health, envie uma mensagem, liste e reinicie para conferir persistência.

Os arquivos Docker/compose são pontos de partida; confira portas, volumes e serviços antes de utilizá-los. O compose principal não publica porta nem integra automaticamente o backend. As instruções desta documentação foram conferidas por leitura do código, sem executar os serviços.

## Licença

Não há arquivo LICENSE na árvore analisada.

---
Documentação baseada na leitura da branch principal em 2 de novembro de 2026. Os procedimentos não foram executados nesta revisão documental.
