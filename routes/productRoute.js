
const route = require('express').Router();
const productController = require ("../controllers/productController");
const multer = require('../middlwares/uploadImage')

route.post('/createProduct', multer.single('image'), productController.createProduct)
route.get('/allProduct', productController.allProduct)
route.get('/productById/:id', productController.productById)
route.get('/productByName' ,productController.productByName)
route.get('/productByCategory', productController.productByCategory);
route.put('/updateProduct/:id', productController.updateProduct )
route.delete('/deleteProduct/:id', productController.deleteProduct)

module.exports = route;