require('dotenv').config();
const PORT = process.env.PORT || 3500;

const express = require('express');

const app = express();
const http = require('http').Server(app);
const cors = require('cors');

const corsOptions = require('./config/corsOptions');

http.listen(PORT, () => console.log(`Server Running on port ${PORT}`));
