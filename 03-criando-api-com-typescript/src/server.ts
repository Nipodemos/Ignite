import express from 'express';

const app = express();

app.get('/', (request, response) => response.json({ message: 'hello world!' }));

app.listen(3333, () =>
  console.log('Servidor rodando no link http://localhost:3333'),
);
