const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

// import models
const Product = require('./Product');
const Tag = require('./Tag');

class ProductTag extends Model {}

ProductTag.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    product_id: {
      type: DataTypes.INTEGER,
      onDelete: 'SET NULL',
      references: {
        model: Product,
        key: 'id',
      }
    },
    tag_id: {
      type: DataTypes.INTEGER,
      onDelete: 'SET NULL',
      references: {
        model: Tag,
        key: 'id',
      }
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);
