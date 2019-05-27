var http = require('http');
var fs = require('fs');
const cors = require('cors');
const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000 ;





app.use(cors());
console.log("\n *STARTING* \n");
// Get content from file
var contents = fs.readFileSync("db.json");
// Define to JSON type
var pizzas = JSON.parse(contents).pizzas;
var toppings = JSON.parse(contents).toppings;
// Get Value from JSON
app.get('/api/pizzas',(req,res)=>{
    res.json(pizzas);
})

app.get('/api/toppings',(req,res)=>{
    res.json(toppings);
})



app.listen(PORT ,() =>console.log( `Server started on port ${PORT} `));