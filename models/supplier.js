const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('supplier', {
    supplier_id: {
      type: DataTypes.SMALLINT,
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
    },
    homepage: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'supplier',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "pk_supplier_id",
        unique: true,
        fields: [
          { name: "supplier_id" },
        ]
      },
    ]
  });
};
