const productsService  = require('../service/product');
const logger = require('../logger/api.logger');

class ProductsController {

    async getProducts(loadMoreState) {
        logger.info('Controller: getProducts')
        return await productsService.getProducts(loadMoreState);
    }
}
module.exports = new ProductsController();