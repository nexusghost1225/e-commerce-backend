const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

// Create a new Sequelize model for books
class Tag extends Model { }

Tag.init(
  // Define fields/columns on model
  // An `id` is automatically created by Sequelize, though best practice would be to define the primary key ourselves
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    tag_name: {
      type: DataTypes.STRING

    },
  }
  {
    // Link to database connection
    sequelize,
    // Set to false to remove `created_at` and `updated_at` fields
    freezeTableName: true,
    timestamps: false,
    underscored: true,
    modelName: 'tag'
  }
);

module.exports = Tag;