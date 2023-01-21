const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('products', {
    products_id: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      primaryKey: true
    },
    products_name: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    quantity_per_unit: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    unit_price: {
      type: DataTypes.REAL,
      allowNull: true
    },
    units_in_stock: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    units_in_order: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    reorder_leve: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    discontinued: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    supplier_id: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      references: {
        model: 'supplier',
        key: 'supplier_id'
      }
    },
    category_id: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      references: {
        model: 'categories',
        key: 'category_id'
      }
    }
  }, {
    sequelize,
    tableName: 'products',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "pk_products_id",
        unique: true,
        fields: [
          { name: "products_id" },
        ]
      },
    ]
  });
};
