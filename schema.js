const mongoose = require('mongoose');

const productsSchema = mongoose.Schema({
    productId: { type: Number, required: true },
    quantity: { type: Number, required: true },
});

function insertData(){
    var dbo = db.db("mydb");
    const products = [
        { productId: 123, quantity: 50 },
        { productId: 143, quantity: 50 },
        { productId: 193, quantity: 50 }
      ];
    dbo.collection("products").insertMany(products);
    dbo.close()  
}
// insertData()
module.exports = mongoose.model('products', productsSchema);