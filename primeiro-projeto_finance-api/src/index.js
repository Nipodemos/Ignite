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

function getBalance(statement) {
  const sum = statement.reduce((accumulator, currentValue) => {
    if (currentValue.type === "withdraw") {
      accumulator -= currentValue.amount;
    } else {
      accumulator += currentValue.amount;
    }
    return accumulator;
  }, 0);

  return sum;
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

server.post("/withdraw", verifyIfExistAccountCpf, (request, response) => {
  const { amount } = request.body;
  const { customer } = request;

  const balance = getBalance(customer.statement);

  if (balance < amount) {
    return response.status(400).json({ error: "insuficient funds" });
  }
  const statementOperation = {
    amount,
    createdAt: new Date(),
    type: "debit",
  };
  customer.statement.push(statementOperation);

  return response.status(201).send();
});

server.get("/statement", verifyIfExistAccountCpf, (request, response) => {
  const { customer } = request;
  const { date } = request.query;
  console.log("date :>> ", date);

  if (date) {
    const dateFormat = new Date(date + " 00:00");

    const filteredStatements = customer.statement.filter((statement) => {
      console.log("dateFormat :>> ", dateFormat);
      console.log("statement.createdAt :>> ", statement.createdAt);

      return (
        statement.createdAt.toDateString() ===
        new Date(dateFormat).toDateString()
      );
    });
    return response.json(filteredStatements);
  }
  return response.json(customer.statement);
});

server.listen(3333, () => {
  console.log("Servidor aberto em: http://localhost:3333");
});
