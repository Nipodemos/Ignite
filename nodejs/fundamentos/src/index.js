const express = require('express');

const app = express();

app.get("/courses", (_, response) => {
  return response.json(["Curso 1", "Curso 2", "Curso 3" ]);
});

app.post("/courses", (_, response) => {
  return response.json(["Curso 1", "Curso 2", "Curso 3", "Curso 4"])
})

app.put("/courses/:id", (request, response)=>{
  return response.json(["Curso 6", "Curso 2", "Curso 3", "Curso 4"])
})

app.patch("/courses/:id", (request, response)=>{
  return response.json(["Curso 6", "Curso 7", "Curso 3", "Curso 4"])
})

app.delete("/courses/:id", (request, response)=>{
  return response.json([ "Curso 7", "Curso 3", "Curso 4"])
})

app.listen(3333, () => {
  console.log("Servidor iniciado em http://localhost:3333");
});