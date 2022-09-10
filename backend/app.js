const express = require("express");
const axios = require("axios").default;
var cors = require("cors");
const app = express();

const port = 5000;
app.use(cors());

app.get("/", (req, res) => {
  axios
    .get("https://data.covid19.go.id/public/api/prov.json")
    .then(function (response) {
      res.send(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
