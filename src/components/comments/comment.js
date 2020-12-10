'use strict'
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    Id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    IdCategory: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Category',
        key: 'Id'
      }
    },
    Content: {
      type: DataTypes.STRING,
      allowNull: false
    },
    File: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    freezeTableName: true
  })

  Comment.associate = (models) => {
    Comment.belongsToMany(models.Comments, {
      through: 'Replies',
      as: 'replies',
      foreignKey: 'Id'
    })
  }

  return Comment
}