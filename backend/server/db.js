import pg from 'pg';

const { Pool } = pg;

let pool;

function getPool() {
  if (!pool) {
    const connectionString = process.env.DATABASE_URL;
    if (!connectionString) {
      console.warn('⚠️  DATABASE_URL not set. Contact form submissions will not be persisted.');
      return null;
    }
    pool = new Pool({
      connectionString,
      ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
    });
  }
  return pool;
}

// Initialize database tables
export async function initDb() {
  const p = getPool();
  if (!p) return;

  await p.query(`
    CREATE TABLE IF NOT EXISTS messages (
      id SERIAL PRIMARY KEY,
      "firstName" TEXT NOT NULL,
      "lastName" TEXT NOT NULL,
      email TEXT NOT NULL,
      phone TEXT NOT NULL,
      organization TEXT,
      interest TEXT,
      message TEXT NOT NULL,
      "createdAt" TIMESTAMP DEFAULT NOW()
    )
  `);
  console.log('✅ Database connected & messages table ready');
}

// Insert a contact message
export async function insertMessage({ firstName, lastName, email, phone, organization, interest, message }) {
  const p = getPool();
  if (!p) throw new Error('Database not configured');

  const result = await p.query(
    `INSERT INTO messages ("firstName", "lastName", email, phone, organization, interest, message)
     VALUES ($1, $2, $3, $4, $5, $6, $7)
     RETURNING id`,
    [firstName, lastName, email, phone, organization, interest, message]
  );
  return result.rows[0].id;
}

// Get all messages
export async function getAllMessages() {
  const p = getPool();
  if (!p) throw new Error('Database not configured');

  const result = await p.query('SELECT * FROM messages ORDER BY "createdAt" DESC');
  return result.rows;
}
