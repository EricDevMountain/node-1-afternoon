const express = require("express");
const { json } = require("body-parser");
const port = 3000;
const mc = require("./controllers/messages_controller");

const app = express();

app.use(json());
app.use(express.static(__dirname + "/../public/build"));

app.get("/api/messages", mc.read);
app.put("/api/messages/:id", mc.update);
app.post("/api/messages", mc.create);
app.delete("/api/messages/:id", mc.delete);

app.listen(port, () => {
  console.log(`Whistle Tip on port: ${port}`);
});
