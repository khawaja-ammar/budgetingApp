import express from 'express';
import https from 'https';
import cors from 'cors';
import * as dotenv from 'dotenv';
import fs from 'fs';

import testRouter from './routes/apis/test';

dotenv.config();
const PORT = process.env.PORT || '3500';
const MODE = process.env.NODE_ENV || 'dev';
const URL = process.env.URL || 'https://localhost';

// Server config
const httpsOptions = {
  key: fs.readFileSync('src/config/openssl/key.pem'),
  cert: fs.readFileSync('src/config/openssl/cert.pem'),
};
import { corsOptions } from './config/corsOptions';

const app = express();
// Middleware
app.use(express.json());
app.use(cors(corsOptions));

// Routes
app.use('/test', testRouter);
// API (GraphQL)
// TODO: Api routes (with embedded controllers)

// Start after after DB connection
const server = https.createServer(httpsOptions, app);
server.listen(PORT, () => {
  console.log(`${MODE} MODE: Server Running on port ${PORT}`);
});

// Tests
export { app, server };
