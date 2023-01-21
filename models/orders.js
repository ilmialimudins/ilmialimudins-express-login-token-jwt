const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('orders', {
    order_id: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      primaryKey: true
    },
    required_data: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    shipper_data: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    freight: {
      type: DataTypes.REAL,
      allowNull: true
    },
    ship_name: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    ship_address: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    ship_city: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    ship_region: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    ship_postal: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    ship_country: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    employee_id: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      references: {
        model: 'employees',
        key: 'employee_id'
      }
    },
    customer_id: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      references: {
        model: 'customers',
        key: 'customer_id'
      }
    },
    shipper_id: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      references: {
        model: 'shippers',
        key: 'shipper_id'
      }
    }
  }, {
    sequelize,
    tableName: 'orders',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "pk_orders_id",
        unique: true,
        fields: [
          { name: "order_id" },
        ]
      },
    ]
  });
};
