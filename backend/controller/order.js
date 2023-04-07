const ordersService  = require('../service/order');
const logger = require('../logger/api.logger');

class OrdersController {

    async getOrders() {
        logger.info('Controller: getOrders')
        return await ordersService.getOrders();
    }

    async createOrder(order) {
        logger.info('Controller createOrder', order);
        return await ordersService.createOrder(order);
    }
}
module.exports = new OrdersController();