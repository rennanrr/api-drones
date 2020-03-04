/**
 * @author Rennan Ribas <rennanrr@hotmail.com>
 * @description Class responsible for control services data with business rules
 */

import Repo from '../repositories/drone';
import Joi from '@hapi/joi';

class DroneService {
  constructor() {}

  async list(query) {    
    return Repo.list(query);
  }

  async detail(id) {
    return Repo.detail(id);
  }

  async update(id, drone) {
    return Repo.update(id, drone);
  }

  async delete(id) {
    return Repo.delete(id);
  }

  async create(drone) {
    return Repo.create(drone);
  }

  /**
  * Check if drone object is valid for business rules
  * @param {id, image, name, address, battery, max_speed, average_speed, 
  *         status, fly } drone - drone object {}
  */
  async isNotValid(drone) {
    let errors = {
      name: Joi.string().min(2).max(20).required().validate(drone.name),
      address: Joi.string().min(2).max(50).required().validate(drone.address),
      status: Joi.string().min(2).max(20).required().validate(drone.status)
    };
    if(errors.name.error || errors.address.error || errors.status.error)
      return errors;
    else
      return false;
  }
}

export default new DroneService();
