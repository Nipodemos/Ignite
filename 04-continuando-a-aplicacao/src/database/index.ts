import { createConnection, getConnectionOptions } from 'typeorm';

interface IOptions {
  host: string;
}

getConnectionOptions().then((options) => {
  const newOptions = options as IOptions;
  newOptions.host = 'database_ignite';
  console.log('options :>> ', options);
  createConnection({
    ...options,
  })
    .then((connection) => {
      console.log('conectado com o banco de dados');
      console.log('connection :>> ', connection);
    })
    .catch((error) => {
      console.log(error);
      throw new Error(error);
    });
});
