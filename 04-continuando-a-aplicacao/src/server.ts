import express from 'express';
import 'reflect-metadata';
import swaggerUi from 'swagger-ui-express';

import mainRouter from './routes';
import swaggerConfigFile from './swagger.json';
import './database';
import './shared/container';

const app = express();

app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerConfigFile));
app.use(mainRouter);
app.get('/', (request, response) => response.json({ message: 'hello world!' }));

app.post('/courses', (request, response) => {
  const { name } = request.body;
  return response.json({ name });
});

app.listen(3333, () =>
  console.log('Servidor rodando no link http://localhost:3333'),
);
