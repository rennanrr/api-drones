/**
 * @author Rennan Ribas <rennanrr@hotmail.com>
 * @description Class responsible for model of database, like am ORM
 */

import db from '../../config/db_connection';
import Sequelize from 'sequelize';

const Drone = db.define('drone', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  image: {
    type: Sequelize.STRING
  },
  name: {
    allowNull: false,
    type: Sequelize.STRING
  },
  address: {
    allowNull: false,
    type: Sequelize.STRING
  },
  battery: {
    type: Sequelize.INTEGER
  },
  max_speed: {
    type: Sequelize.FLOAT
  },
  average_speed: {
    type: Sequelize.FLOAT
  },
  status: {
    allowNull: false,
    type: Sequelize.STRING
  },
  fly: {
    type: Sequelize.INTEGER
  },
  createdAt: {
    allowNull: false,
    type: Sequelize.DATE
  },
  updatedAt: {
    allowNull: false,
    type: Sequelize.DATE
  }
});

export default Drone;
