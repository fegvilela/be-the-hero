const express = require('express');

const app = express();

app.get('/', (req, res) => { 
  return res.json({ 
    event: 'Semana omnistack',
    aluno: 'Fernanda Vilela'
  });
});

app.listen(3333);