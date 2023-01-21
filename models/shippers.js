const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('shippers', {
    shipper_id: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      primaryKey: true
    },
    company_name: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    phone: {
      type: DataTypes.STRING(24),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'shippers',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "pk_shipper_id",
        unique: true,
        fields: [
          { name: "shipper_id" },
        ]
      },
    ]
  });
};
