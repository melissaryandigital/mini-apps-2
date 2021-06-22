const express = require('express');
const app = express();
const path = require('path');
const port = 4000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));



app.get('/', (req, res) => {
  res.send('Hello world!')
});

app.listen(port, () => {
  console.log(`Crypto chart tool listening at http://localhost:${port}`);
})

