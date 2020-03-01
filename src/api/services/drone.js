/**
 * @author Rennan Ribas <rennanrr@hotmail.com>
 * @description Class responsible for control services data with business rules
 */

import Repo from '../repositories/drone';

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

  isValid(drone) {
    let errorFields;
    if(isNaN(drone.name) && drone.name.trim() !== '') errorFields = 'name|';
    if(isNaN(drone.address) && drone.address.trim() !== '') errorFields += 'address';
    if(isNaN(drone.status) && drone.status.trim() !== '') errorFields += 'status';

    return errorFields;
  }
}

export default new DroneService();
