import express from 'express';
import cors from 'cors';

const app = express();

app.use(express.json() as any);
app.use(cors() as any);

// Mock registration endpoint for testing
app.post('/api/register', (req: any, res: any) => {
  const { email } = req.body;
  console.log(`Registration request for: ${email}`);
  res.json({ 
    success: true, 
    message: "User registered successfully (Mock Mode)." 
  });
});

app.get('/api/health', (req: any, res: any) => res.json({ status: 'up' }));

export default app;