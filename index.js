const express = require("express");
const Joi = require('joi');
const app = express();

app.use(express.json());
const files = [
    {id: 1, name: "File One"},
    {id: 2, name: "File Two"},
    {id: 3, name: "File Three"},
]

//review express api reference Request
//This is called a route handler
app.get("/", (req, res) => {
  res.send("hello world with GET");
});

app.get("/sayhellotome", (req, res) => {
    res.send("hello CORY");
  });

  //passing a parameter
  app.get("/api/file/:id", (req, res) => {
   const file = files.find(c => c.id === parseInt(req.params.id));
    if(!file) res.status(404).send('The file with the given ID was not found') ;
    res.send(file);
  });

  app.get("/api/files", (req, res) => {
    res.send(files);
    params.year
  });

  app.get("/api/file/", (req, res) => {
    res.send(req.query);
    params.year
  });

  app.post("/api/file/", (req, res) => {
    const file = {
        id: files.length +1,
        name: req.body.name
    };
    files.push(file);
    res.send(file);
  });




app.listen(3000, ()=> console.log('Listening on port 3000...'));