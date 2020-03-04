import axios from 'axios';
import config from '../config/config';
import drone from '../api/routes/drone';
import packageJson from '../../package.json';

const API_V1 = '/api/v1';

export default app => {
  app.get(API_V1, (req, res) => {
    res.json({ version: packageJson.version });
  });

  app.use(API_V1, drone);
}