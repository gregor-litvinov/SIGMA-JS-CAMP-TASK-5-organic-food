const productsRepository  = require('../repository/product');

class ProductsService {

    constructor() {}

    async getOrders() {
        return await productsRepository.getOrders();
    }

    async createOrder(order) {
        return await productsRepository.createOrder(order);
    }
}

module.exports = new ProductsService();