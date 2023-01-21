const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('order_detail', {
    order_id: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      primaryKey: true
    },
    product_id: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    unit_price: {
      type: DataTypes.REAL,
      allowNull: true
    },
    quantity: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    discount: {
      type: DataTypes.REAL,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'order_detail',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "pk_order_detail",
        unique: true,
        fields: [
          { name: "order_id" },
        ]
      },
    ]
  });
};
