import express, { Application, Request, Response } from 'express'
import morgan from 'morgan'
import * as dotenv from 'dotenv'
import index from './routes/index';

dotenv.config()

const PORT = process.env.PORT || 3000
const app: Application = express()
app.use(morgan('short'))

// add routing for / path
app.get('/', (req: Request, res: Response) => {
  res.json({
    message: 'Hello there 😊 \n' +
        'visit http://localhost:3000/api/image?filename=encenadaport&height=3000&width=3000 to see a picture :D'
  })
})
app.use('/api', index);

app.listen(PORT, (): void => {
  console.log(`Listening to http://localhost:${PORT}
    visit http://localhost:3000/api/image?filename=encenadaport&height=3000&width=3000 to see a picture :D
  `);
});

export default app
