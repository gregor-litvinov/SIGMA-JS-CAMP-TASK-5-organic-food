const productsRepository  = require('../repository/product');

class ProductsService {

    constructor() {}

    async getOrders() {
        return await productsRepository.getOrders();
    }

    async getProducts(loadMoreState) {
        return await productsRepository.getProducts(loadMoreState);
    }
}

module.exports = new ProductsService();