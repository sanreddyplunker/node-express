const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("hello");
});
app.get("/:id", (req, res) => {
  const id = req.params.id;
  const queryName = req.query?.name;
  res.send(id + " : " + queryName);
});

app.listen(port, () => {
  console.log("listening to express", port);
});
