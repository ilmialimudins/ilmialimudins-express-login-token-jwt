const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('categories', {
    category_id: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      primaryKey: true
    },
    category_name: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    picture: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'categories',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "pk_category_id",
        unique: true,
        fields: [
          { name: "category_id" },
        ]
      },
    ]
  });
};
