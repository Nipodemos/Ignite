const express = require("express");
const { v4: uuidv4 } = require("uuid");

const server = express();
const customers = [];
server.use(express.json());

//Middleware

function verifyIfExistAccountCpf(request, response, next) {
  const { cpf } = request.headers;
  const customer = customers.find((customer) => customer.cpf === cpf);

  if (!customer) {
    return response.status(400).json({ error: "Customer not found" });
  }

  request.customer = customer;

  return next();
}

/**
 * cpf  - string
 * name - string
 * id - uuid
 * statement []
 */
server.post("/account", (request, response) => {
  const { cpf, name } = request.body;

  const customerAlreadyExists = customers.some(
    (customer) => customer.cpf === cpf
  );

  if (customerAlreadyExists) {
    return response.status(400).json({ error: "Customer already exists" });
  }

  customers.push({
    id: uuidv4(),
    name,
    cpf,
    statement: [],
  });

  return response.status(201).json(customers[customers.length - 1]);
});

server.post("/deposit", verifyIfExistAccountCpf, (request, response) => {
  const { amount, description } = request.body;
  const { customer } = request;

  const statementOperation = {
    description,
    amount,
    createdAt: new Date(),
    type: "credit",
  };
  customer.statement.push(statementOperation);

  return response.status(201).send();
});

server.get("/statement/", verifyIfExistAccountCpf, (request, response) => {
  const { customer } = request;
  return response.json(customer.statement);
});

server.listen(3333, () => {
  console.log("Servidor aberto em: http://localhost:3333");
});
