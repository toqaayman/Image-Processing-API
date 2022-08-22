import express from 'express'
import file from './paths'
import resize from './ImageResizer'

const resizer = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
): Promise<void> => {
  try {
    const image: string = await file.fileName(req)
    const newImg: string = await file.output(req)
    const width = Number(req.query.width)
    const height = Number(req.query.height)

    if (file.existsSync(newImg)) {
      console.log('Loaded cached picture')
      next()
    } else if (
      !file.existsSync(image) ||
      !file.PositiveNeg(height, width) ||
      !file.NumberOrString(height, width)
    ) {
      res.status(400).send(`Error!`)
      next()
    } else {
      console.log('Resizing....')
      await resize(image, newImg, height, width)
      next()
    }
  } catch (err) {
    res.send('While processing your picture, an error occurred.' + err)
  }
}

export default resizer
