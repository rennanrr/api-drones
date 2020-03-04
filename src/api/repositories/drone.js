/**
 * @author Rennan Ribas <rennanrr@hotmail.com>
 * @description Class responsible for saving Drone into the database
 */

import Model from '../models/drone';
import { Op } from  'sequelize';
import sequelize from 'sequelize';

class DroneRepository {
 
  /**
  * List all drones
  */
  async list(query, paginate) {
    let count;
    let list;

    if (query.text) {
      count = await Model.count({
        where: {
          [Op.or]: [
            { 
              name: { [Op.like]: '%'+ query.text +'%' } 
            },
            { 
              address: { [Op.like]: '%'+ query.text +'%' } 
            },
            sequelize.where(
              sequelize.cast(
                sequelize.col('Drone.max_speed'), 'char'),
                {
                  [Op.like]: `%${query.text}%`
                },
            ),
            sequelize.where(
              sequelize.cast(
                sequelize.col('Drone.average_speed'), 'char'),
                {
                  [Op.like]: `%${query.text}%`
                },
            ),
            { 
              status: { [Op.like]: '%'+ query.text +'%' } 
            }
          ]
        }
      });
      list = await Model.findAll(
        Object.assign(
          paginate,
          {
          where: {
            [Op.or]: [
              { 
                name: { [Op.like]: '%'+ query.text +'%' } 
              },
              { 
                address: { [Op.like]: '%'+ query.text +'%' } 
              },
              sequelize.where(
                sequelize.cast(
                  sequelize.col('Drone.max_speed'), 'char'),
                  {
                    [Op.like]: `%${query.text}%`
                  },
              ),
              sequelize.where(
                sequelize.cast(
                  sequelize.col('Drone.average_speed'), 'char'),
                  {
                    [Op.like]: `%${query.text}%`
                  },
              ),
              { 
                status: { [Op.like]: '%'+ query.text +'%' } 
              }
            ]
          }
        }
      )); 
    }
    else {
      count = await Model.count();
      list = await Model.findAll(
        Object.assign(
          paginate,
          {
            where: {}, // conditions
          }, 
        )
      ); 
    }
    return { list, count };
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
