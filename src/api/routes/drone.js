/**
 * @author Rennan Ribas <rennanrr@hotmail.com>
 * @description Class responsible for control rotes and call controllers
 */

import express from 'express';
import Ctrl from '../controllers/drone';

const router = express.Router();

  // GET /api/v1/drones- List drones
  router.route('/drones')
    .get(Ctrl.list);

  router.route('/drones/:id')
    // GET /api/v1/drones/:id - Detail drone
    .get(Ctrl.detail)
    
    // GET /api/v1/drones/:id - Update drone
    .put(Ctrl.update)

    // DELETE /api/v1/drones/:id - Delete drone
    .delete(Ctrl.delete)

    // POST /api/v1/drones/:id - Create new drone
    .post(Ctrl.create);

export default router;
