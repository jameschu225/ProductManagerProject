const ProductController = require('../controllers/productControllers')

module.exports = (app) => {
        app.get('/api', ProductController.findAllProduct);
        app.get('/api/:id', ProductController.findOneProduct);
        app.post('/api/create', ProductController.createProduct);
        app.put('/api/update/:id', ProductController.updateProduct);


}