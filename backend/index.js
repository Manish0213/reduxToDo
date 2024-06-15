const express = require('express');
const app = express()
const port = 5000
var cors = require('cors');
const connectToDB = require('./db');

app.use(express.json());
app.use(cors())

app.use('/task', require('./routes/todoRoute'));

connectToDB();

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})