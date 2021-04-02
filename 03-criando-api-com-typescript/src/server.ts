import express from 'express';

import mainRouter from './routes';

const app = express();

app.use(express.json());
app.use(mainRouter);
app.get('/', (request, response) => response.json({ message: 'hello world!' }));

app.post('/courses', (request, response) => {
  const { name } = request.body;
  return response.json({ name });
});

app.listen(3333, () =>
  console.log('Servidor rodando no link http://localhost:3333'),
);
