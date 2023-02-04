'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class School extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  School.init({
    name:{
      type:DataTypes.STRING,
      allowNull:false
    },
    address:{
      type:DataTypes.STRING,
      allowNull:false
    },
    email:{
      type:DataTypes.STRING,
      allowNull:false,
      unique:true
    },
    phone:{
      type:DataTypes.BIGINT,
      allowNull:false,
      unique:true
    }}, {
    sequelize,
    modelName: 'School',
  });
  return School;
};