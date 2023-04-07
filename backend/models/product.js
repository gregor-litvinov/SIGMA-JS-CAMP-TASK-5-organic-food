module.exports = (sequelize, DataTypes, Model) => {

    class Product extends Model {}
    Product.init({
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: DataTypes.INTEGER
        },
        // Model attributes are defined here
        name: {
          type: DataTypes.STRING,
          allowNull: false
        },
        price: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
        discount: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
        description: {
          type: DataTypes.STRING
          // allowNull defaults to true
        },
        image: {
          type: DataTypes.STRING,
          allowNull: false
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
        modelName: 'Product' // We need to choose the model name
      });
      
      return Product;
}