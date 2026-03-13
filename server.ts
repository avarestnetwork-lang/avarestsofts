import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = process.env.PORT || 3000;

  app.use(cors());
  app.use(express.json());

  // API Routes
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', message: 'AvarestSoft API is running' });
  });

  // Auth Routes Placeholder
  app.post('/api/auth/login', (req, res) => {
    res.json({ message: 'Auth0 login endpoint placeholder' });
  });

  // Subscription Routes Placeholder
  app.post('/api/subscriptions/create-checkout-session', (req, res) => {
    res.json({ url: 'https://checkout.stripe.com/placeholder' });
  });

  // AI Route Placeholder (Note: Gemini is called from frontend)
  app.post('/api/ai/log', (req, res) => {
    console.log('AI usage logged:', req.body);
    res.json({ success: true });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`AvarestSoft Server running at http://0.0.0.0:${PORT}`);
  });
}

startServer();
