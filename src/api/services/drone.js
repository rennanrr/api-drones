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
}

export default new DroneService();
