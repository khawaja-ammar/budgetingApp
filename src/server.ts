import * as dotenv from 'dotenv';
import express from 'express';
import https from 'https';
import cors from 'cors';
import fs from 'fs';

dotenv.config();
// const {PORT} = process.env
const PORT = process.env.PORT || '3500';

// SSL/TLS config
const httpsOptions = {
  //   key: fs.readFileSync(''),
  //   cert: fs.readFileSync(''),
  //   // ca: ""
};
import { corsOptions } from './config/corsOptions';

const app = express();
// Middleware
app.use(express.json());
app.use(cors(corsOptions));

// API (GraphQL)
// TODO: Api routes (with embedded controllers)

// Start after after DB connection (SQLite or PSQL)
const server = https.createServer(httpsOptions, app);
server.listen(PORT, () => {
  console.log(`Server Running on port ${PORT}`);
});
