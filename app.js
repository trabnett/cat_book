// app.js

const http = require('http');
const express = require('express')
const app = express()
const port = process.env.PORT || 8080;
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
  res.render ( "welcome.ejs" );
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
console.log('Node server running on port 3000');
