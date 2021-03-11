const express = require("express");
const { v4: uuidv4 } = require("uuid");

const server = express();
const customers = [];
server.use(express.json());

/**
 * cpf  - string
 * name - string
 * id - uuid
 * statement []
 */
server.post("/account", (request, response) => {
  console.log("request :>> ", request);
  const { cpf, name } = request.body;

  const id = uuidv4();

  customers.push({
    id,
    name,
    cpf,
    statment: [],
  });

  return response.status(201).json(customers[customers.length - 1]);
});

server.listen(3333, () => {
  console.log("Servidor aberto em: http://localhost:3333");
});
