'use strict';
module.exports = (sequelize, DataTypes) => {
  const project = sequelize.define('drones', {
    id: DataTypes.INTEGER,
    image: DataTypes.STRING,
    name: DataTypes.STRING,
    address : DataTypes.STRING,
    battery : DataTypes.INTEGER,
    max_speed : DataTypes.FLOAT,
    average_speed : DataTypes.FLOAT,
    status : DataTypes.STRING,
    fly : DataTypes.INTEGER,
    createdAt : DataTypes.DATE,
    updatedAt : DataTypes.DATE  
  }, {});
  project.associate = function(models) {
    // associations can be defined here
  };
  return project;
};