const PORT = 8081
const express = require('express')
const app = express()
const {inventoryProducts} = require('./controller.js')
                                    
app.put('/productids', (req, res) =>{
  // we will be getting all the product details in body of request 
  var productIDS = req.body.products;
  inventoryProducts(productIDS);
  res.end();
})

app.listen(PORT, ()=>{
  console.log(`Listening on Port ${PORT}`)
})