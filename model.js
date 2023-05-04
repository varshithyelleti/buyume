var mongoDB = require('mongodb');
var mongoDbConnection = mongoDB.MongoClient;
var url = "mongodb://127.0.0.1:27017/";

function findProductData(){
  mongoDbConnection.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo.collection("products").findOne({}, function(err, result) {
    if (err) throw err;
    dbo.close();
    return result;
  });
});
}

function updateProductData(id, data){
  mongoDbConnection.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var olddata = {productId: id};
  var newdata = { $set: data };
  dbo.collection("products").findAndModify({olddata, 
                                            newdata,
                                            upsert:true});
  dbo.close();
}

module.export = {
  findProductData:findProductData;
  updateProductData:updateProductData;
}
