const { connect } = require('../config/connect');
const logger = require('../logger/api.logger');
const seeds = require('../seed')


class ProductsRepository {

    db = {};

    constructor() {
        this.db = connect();
        // For Development
        this.db.sequelize.sync({force:true}).then(async () => {
            console.log("Drop and re-sync db.");
            await this.db.products.bulkCreate(seeds)
        });
    }

    async getProducts(loadMoreState = false) {

        try {
            const products = await loadMoreState ? this.db.products.findAll() : this.db.products.findAll({
                limit: 8,
                order: [['id', 'ASC']]
            });
            return products;
        } catch (err) {
            console.log(err);
            return [];
        }
    }

    async getOrders() {

        try {
            const orders = await this.db.orders.findAll();
            console.log('orders:::', orders);
            return orders;
        } catch (err) {
            console.log(err);
            return [];
        }
    }

    async createOrder(order) {
        let data = {};
        try {
            data = await this.db.orders.create(order);
        } catch(err) {
            logger.error('Error::' + err);
        }
        return data;
    }
}

module.exports = new ProductsRepository();