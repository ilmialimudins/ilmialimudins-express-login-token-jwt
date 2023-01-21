const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('customers', {
    customer_id: {
      type: DataTypes.CHAR(5),
      allowNull: false,
      primaryKey: true
    },
    company_name: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    contact_name: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    contact_title: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    address: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    city: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    region: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    postal_code: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    country: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    phone: {
      type: DataTypes.STRING(24),
      allowNull: true
    },
    fax: {
      type: DataTypes.STRING(24),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'customers',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "pk_customer_id",
        unique: true,
        fields: [
          { name: "customer_id" },
        ]
      },
    ]
  });
};
