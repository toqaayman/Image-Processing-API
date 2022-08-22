import express from 'express';
import resizer from '../utilities/middleware';

const pic = express.Router();
const path = require('path');

pic.get(
    '/',
    resizer,
    async (req: express.Request, res: express.Response, next: express.NextFunction): Promise<void> => {
        try {
            res.sendFile(
                path.resolve(
                    __dirname +
                    `../../../../images/thumbnails/${req.query.filename}${req.query.height}x${req.query.width}.jpg`
                )
            );
        } catch (err) {
            next(err);
        }
    }
);

export default pic;
