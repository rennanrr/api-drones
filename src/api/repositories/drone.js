/**
 * @author Rennan Ribas <rennanrr@hotmail.com>
 * @description Class responsible for saving Drone into the database
 */

import Model from '../models/user';
import { Op } from  'sequelize';

class DroneRepository {
 
  /**
  * List all drones
  */
  async list() {
    return Model.findAll({});      
  }

  /**
  * Detail drone in the database
  * @param {Object} id - id of drone
  */
  async detail(id) {
    return Model.findOne({
        where: {id: id},
        raw: true
      });
  }

  /**
  * Update drone
  * @param {Object} drone - drone object to be updated
  */
  async update(id, drone) {
  return Model.upsert(drone, {where: {id:id}});
  }

  /**
  * Delete drone in the database
  * @param {Object} id - id of drone to be deleted
  */
  async delete(id) {
  return Model.destroy({where: {id: id}});
  }

  /**
  * Create new drone in the database
  * @param {Object} user - drone object to be created
  */
  async create(drone) {
    return Model.create(drone);
  }
}

export default new DroneRepository();
