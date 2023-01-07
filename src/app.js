const express = require("express");
const cors = require("cors");

const { v4: uuid, validate: isUuid } = require('uuid');

const app = express();

app.use(express.json());
app.use(cors());

const repositories = [];

app.get("/repositories", (request, response) => {
  return response.json(repositories);
});

app.post("/repositories", (request, response) => {
  const {title, url , techs} = request.body;

  const respository = {
    id: uuid(),
    title,
    url,
    techs,
    likes : 0,
  }

  repositories.push(respository);

  return response.json (respository);
});

app.put("/repositories/:id", (request, response) => {
  // TODO
});

app.delete("/repositories/:id", (request, response) => {
  const { id }=  request.params;

  const findRepositoryIndex = repositories.findIndex(respository =>
      respository.id == id 
  );
});

app.post("/repositories/:id/like", (request, response) => {
  // TODO
});

module.exports = app;
