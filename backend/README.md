# Enchanted Ghibli — Backend

Minimal Express + TypeScript API for the Enchanted Ghibli Garden project. It provides a simple /api/messages endpoint for accepting messages and an in-repo JSON file (data/messages.json) as the default storage.

Features
- POST /api/messages — accepts JSON { name, email, message } and stores it
- GET /api/messages — returns stored messages
- GET /api/health — simple health check

Run locally

1. Change to the backend folder:

```powershell
cd backend
```

2. Install dependencies:

```powershell
npm install
```

3. Start in dev mode:

```powershell
npm run dev
```

Production build (local)

```powershell
npm run build
npm start
```

Deploying / Hosting suggestions

- Render (recommended): Create a new Web Service, connect your GitHub repo and point the service to /backend folder. Render will detect Node and build using `npm install` and `npm run build` by default. Set PORT (default 8080) in environment variables if needed.
- Railway / Fly / Heroku: You can use the included `Dockerfile` to deploy anywhere that supports container images.

Optional: Supabase integration

If you'd like the backend to store messages in Supabase instead of a local JSON file, you can switch the storage implementation to use `@supabase/supabase-js` and set `SUPABASE_URL` and `SUPABASE_SERVICE_KEY` environment variables during deploy (keep service role key private in your hosting provider's secrets).
