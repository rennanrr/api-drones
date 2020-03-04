/**
 * @author Rennan Ribas <rennanrr@hotmail.com>
 * @description Class responsible for control status and call services
 */

import _ from 'lodash';
import Service from '../services/drone';

class DroneCtrl {

  async list(req, res) {
    try {
      const drones = await Service.list(req.query);

      res.status(200).json(drones);
    } catch (err) {
      console.error(err);
      res.sendStatus(401);
    }
  }

  async detail(req, res) {
    try {
      const drone = await Service.detail(req.params.id);

      res.status(200).json(drone);
    } catch (err) {
      console.error(err);
      res.sendStatus(401);
    }
  }

  async update(req, res) {
    try {
      const notValid = await Service.isNotValid(req.body);
      console.log(notValid);
      if (!notValid) {
        console.log('entrou aqui');
        const updated = await Service.update(req.params.id, req.body);
        res.status(200).json(updated);
      }
      else
        res.status(304).json(notValid);
    } catch (err) {
      console.error(err);
      res.sendStatus(401);
    }
  }

  async delete(req, res) {
    try {
      const deleted = await Service.delete(req.params.id);
      if (deleted) {
        res.status(200).json(deleted);
      } else {
        res.sendStatus(422);
      }
    } catch (err) {
      res.sendStatus(400);
    }
  }

  async create(req, res) {
    try {
      const notValid = await Service.isNotValid(req.body);
      if (!notValid) {
        const saved = await Service.create(req.body);
        res.status(200).json(saved);
      }
      else
        res.status(300).json(notValid);

    } catch (err) {
      console.error(err);
      res.sendStatus(401);
    }
  }
}

export default new DroneCtrl();
