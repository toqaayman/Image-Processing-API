import express from 'express';
import path from 'path';


const fs = require('fs');
const existsSync = (path: string) => {
    try {
        fs.accessSync(path, fs.constants.R_OK);
        return true;
    } catch (_) {
        return false;
    }
};

const NumberOrString = (height: number, width: number) => {
    if (!isNaN(height) || !isNaN(width)) {
        return true;
    } else {
        return false;
    }
};

const PositiveNeg = (height: number, width: number) => {
    if (height <= 0 || width <= 0) {
        return false;
    } else {
        return true;
    }
};


const fileName = async (req: express.Request, res: express.Response): Promise<string> => {
    const fileName = path.join(
        __dirname + `../../../../images/original/${req.query.filename}.jpg`
    );
    return fileName;
};

const output = async (req: express.Request, res: express.Response): Promise<string> => {
    const output = path.resolve(
        __dirname +
        `../../../../images/thumbnails/${req.query.filename}${req.query.height}x${req.query.width}.jpg`
    );
    return output;
};
export default {
    fileName,
    output,
    NumberOrString,
    existsSync,
    PositiveNeg
};
