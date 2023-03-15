const express = require("express");

const port = 2000;
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
  });

app.listen(port, () => 
    console.log`Server is running at localhost:${port}s`
  );