const express = require('express');

const app = express();

app.get("/", (request, response) => {
  return response.send("Hello world")
});

app.listen(3333, () => {
  console.log("Servidor iniciado em http://localhost:3333");
});