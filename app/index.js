const express = require('express');
const app = express();

app.get('/:testeParam', function (req, res) {
  const message = `Hello ${req.params.testeParam}!`;
  console.log(message);
  return res.send(message);
});

const port = 3000;

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});
