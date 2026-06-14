import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { initDb, insertMessage, getAllMessages } from './db.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Allow requests from the frontend (localhost for dev, Vercel URL for production)
const allowedOrigins = [
  'http://localhost:3000',
  'http://localhost:3001',
  'http://localhost:3002',
  process.env.FRONTEND_URL,  // Set this on Render to your Vercel URL
].filter(Boolean);

app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
}));
app.use(express.json());

// Fake Token for simulation
const FAKE_TOKEN = 'streambird_admin_token_2026';

// Middleware to check authentication
const authenticate = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (token === FAKE_TOKEN) {
    next();
  } else {
    res.status(401).json({ error: 'Unauthorized' });
  }
};

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Route: Submit a new contact form
app.post('/api/contact', async (req, res) => {
  try {
    const { firstName, lastName, email, phone, organization, interest, message } = req.body;
    
    // Basic validation
    if (!firstName || !lastName || !email || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const id = await insertMessage({ firstName, lastName, email, phone, organization, interest, message });

    res.status(201).json({ success: true, id });
  } catch (error) {
    console.error('Error inserting message:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Route: Admin Login
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  
  if (username === 'aksathkumu' && password === '2000kumu2000aksath') {
    res.json({ success: true, token: FAKE_TOKEN });
  } else {
    res.status(401).json({ success: false, error: 'Invalid credentials' });
  }
});

// Route: Get all messages (Protected)
app.get('/api/messages', authenticate, async (req, res) => {
  try {
    const messages = await getAllMessages();
    res.json({ success: true, messages });
  } catch (error) {
    console.error('Error fetching messages:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Initialize DB then start server
initDb()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`🚀 Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.warn('⚠️  DB init failed, starting server without database:', err.message);
    app.listen(PORT, () => {
      console.log(`🚀 Server is running on http://localhost:${PORT} (no database)`);
    });
  });
