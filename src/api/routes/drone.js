/**
 * @author Rennan Ribas <rennanrr@hotmail.com>
 * @description Class responsible for control rotes and call controllers
 */

import express from 'express';
import Ctrl from '../controllers/drone';

const router = express.Router();

  
  router.route('/drones')
    // GET /api/v1/drones- List drones
    .get(Ctrl.list)

    // POST /api/v1/drones - Create new drone
    .post(Ctrl.create);

  router.route('/drones/:id')
    // GET /api/v1/drones/:id - Detail drone
    .get(Ctrl.detail)
    
    // GET /api/v1/drones/:id - Update drone
    .put(Ctrl.update)

    // DELETE /api/v1/drones/:id - Delete drone
    .delete(Ctrl.delete);

export default router;
