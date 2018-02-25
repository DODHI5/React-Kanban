const express = require("express");
const router = express.Router();
const app = express();
const PORT = process.env.PORT || 8080;
const bodyParser = require("body-parser");
const path = require("path");
const cardRoutes = require("./routes/card");

app.use(express.static("public"));
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());

app.use("/api/cards", cardRoutes);

app.get("/*", (req, res) => {
  var options = {
    root: __dirname + "/public"
  };
});

app.listen(PORT, err => {
  if (err) {
    console.log(err.message);
  }
  console.log(`Server's up on PORT:    ${PORT}`);
});
