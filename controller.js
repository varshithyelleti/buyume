const modelData = require('./model.js');
const productsData = modelData.findProductData();

function findOldData(data){
  return productsData.filter(val => data[productId] == val[productId]);
}

function addProductSKU(productdata){
  var productID = productdata.productId;
  var previousData = findOldData(productdata);
  if (previousData){
    previousData.quantity += productdata.quantity;
  } else{
    previousData = {
      productId:productdata.productId,
      quantity:productdata.quantity
    };
  }
  modelData.updateProductData(productID, previousData);
}

function removeProductSKU(productdata){
  
  var productID = productdata.productId;
  var previousData = findOldData(productdata);
  if (!previousData){
    return ;
  }
  if (previousData.quantity > productdata.quantity){
    previousData.quantity += productdata.quantity;
  } else{
    previousData.quantity = 0;
  }
  modelData.updateProductData(productID, previousData);
}

function inventoryProducts(productIDS){
  for(let i = 0;i < productIDS.length; i++){
    if(productIDS[i].operation === 'add'){
      addProductSKU(productIDS[i]);
    }else{
      removeProductSKU(productIDS[i]);
    }
  }
}

module.export = {
inventoryProducts:inventoryProducts
}