import express from 'express';
import pic from './api/images';
const routes = express.Router();

routes.get('/', (req: express.Request, res: express.Response): void => {
    res.send('Working');
});

routes.use('/image', pic);

export default routes;
