import express from 'express';
import file from './paths';
import resize from './ImageResizer';



const resizer = async (req: express.Request, res: express.Response, next: Function): Promise<void> => {
    try {
        const image: string = await file.fileName(req, res);
        const newImg: string = await file.output(req, res);
        const height: number = Number(req.query.height);
        const width: number = Number(req.query.width);

        if (file.existsSync(newImg)) {
            console.log('Loaded cached picture');
            next();
        } else if (!file.existsSync(image) ||
            !file.PositiveNeg(height, width)
            ||   !file.NumberOrString(height, width)
        ) {
            res.status(400).send(`Error!`);
            next();
        } else {
            console.log('Resizing....');
            await resize(image, newImg, height, width);
            next();
        }
    } catch (err) {
        res.send('While processing your picture, an error occurred.' + err);
    }
};


export default resizer;
