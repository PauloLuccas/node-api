const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');

// Iniciando o App
const app = express();
// Permiti envios de dados para aplicação em formato JSON
app.use(express.json());
// Permiti o que os dados sejam acessado publicamente
app.use(cors());

// Iniciando o Banco de Dados
mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true, useUnifiedTopology: true});
requireDir('./src/models');

// Rotas
app.use('/api', require('./src/routes'));


app.listen(3001);