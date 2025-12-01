import express from 'express';
import cors from 'cors';
import { z } from 'zod';
import { nanoid } from 'nanoid';
import { readMessages, saveMessage } from './storage';

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT ? Number(process.env.PORT) : 8080;

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', ts: new Date().toISOString() });
});

const MessageSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  message: z.string().min(1)
});

app.get('/api/messages', async (_req, res) => {
  try {
    const messages = await readMessages();
    res.json(messages);
  } catch (err) {
    res.status(500).json({ error: 'failed to read messages' });
  }
});

app.post('/api/messages', async (req, res) => {
  const parse = MessageSchema.safeParse(req.body);
  if (!parse.success) {
    return res.status(400).json({ error: parse.error.flatten() });
  }

  const { name, email, message } = parse.data;

  const record = {
    id: nanoid(),
    name,
    email,
    message,
    createdAt: new Date().toISOString()
  };

  try {
    const saved = await saveMessage(record);
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ error: 'failed to save message' });
  }
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Backend listening on http://192.168.10.6:${PORT}`);
});
