'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Owner extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Owner.init(
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: DataTypes.STRING,
      petName: DataTypes.STRING,
      petBreed: DataTypes.STRING
    }, 
    {
      sequelize,
      modelName: 'owner',
      tableName: 'owners'
    }
  )
  return Owner;
}
