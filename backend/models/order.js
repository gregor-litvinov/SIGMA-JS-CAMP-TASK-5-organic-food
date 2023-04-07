module.exports = (sequelize, DataTypes, Model) => {

    class Order extends Model {}
    Order.init({
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: DataTypes.INTEGER
        },
        // Model attributes are defined here
        cost: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
        first_name: {
          type: DataTypes.STRING,
          allowNull: false
        },
        second_name: {
          type: DataTypes.STRING,
          allowNull: false
        },
        productId: {
          type: DataTypes.INTEGER
          // allowNull defaults to true
        },
        createdAt: {
          type: DataTypes.DATE,
          field: 'created_at',
          allowNull: false,
        },
        updatedAt: {
          type: DataTypes.DATE,
          allowNull: false,
          field: 'updated_at',
        },
      }, {
        // Other model options go here
        sequelize, // We need to pass the connection instance
        modelName: 'Order' // We need to choose the model name
      });
      
      return Order;
}