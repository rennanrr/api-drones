import axios from 'axios';
import config from '../config/config';
import drone from '../api/routes/drone';
import packageJson from '../../package.json';

const API_V1 = '/api/v1';

export default app => {
  app.get(API_V1, (req, res) => {
    res.json({ version: packageJson.version });
  });/* 

  app.use(API_V1, async (req, res, next) => {
    try {                   
      const token = get(req, 'headers.authorization');
      
      if (token) {
        const auth = await axios.post(config.re + '/auth/validate', { token });
        req.user = get(auth, 'data.data'); // set User based on Authorization Token
      }
    } catch (e) {
      console.log(e);
    }

    next();
  }); */

  app.use(API_V1, drone);
}