import { promises as fs } from 'fs';
import path from 'path';

const DB_DIR = path.resolve(process.cwd(), 'data');
const MESSAGES_FILE = path.join(DB_DIR, 'messages.json');

export interface Message {
  id: string;
  name: string;
  email: string;
  message: string;
  createdAt: string;
}

async function ensureDb() {
  try {
    await fs.mkdir(DB_DIR, { recursive: true });
  } catch (err) {
    // ignore
  }
  try {
    await fs.access(MESSAGES_FILE);
  } catch (err) {
    await fs.writeFile(MESSAGES_FILE, JSON.stringify([]), 'utf8');
  }
}

export async function readMessages(): Promise<Message[]> {
  await ensureDb();
  const raw = await fs.readFile(MESSAGES_FILE, 'utf8');
  try {
    return JSON.parse(raw) as Message[];
  } catch (err) {
    return [];
  }
}

export async function saveMessage(msg: Message): Promise<Message> {
  const messages = await readMessages();
  messages.push(msg);
  await fs.writeFile(MESSAGES_FILE, JSON.stringify(messages, null, 2), 'utf8');
  return msg;
}
