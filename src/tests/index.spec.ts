import supertest from 'supertest'
import app from '../index'
import resize from '../routes/utilities/ImageResizer'
import path from 'path'
import ImageChecker from '../routes/utilities/paths'

const imageName = 'project'
const request = supertest(app)
const height = 500
const width = 500
const NegativeWidth = -500
const character = 'x' as unknown as number

const image = path.resolve(__dirname + `../../../images/original/${imageName}.jpg`)
const newImg = path.resolve(
  __dirname + `../../../images/thumbnails/${imageName}${height}x${width}.jpg`
)

describe('Test endpoint response', () => {
  it('test hello world endpoint', async () => {
    const response = await request.get('/api')
    expect(response.status).toBe(400)
  })

  it('should response with status code 400 since input file is missing', async () => {
    const response = await request.get('/api/image')
    expect(response.status).toBe(400)
  })

  it("accepted", async () => {
    const response = await request.get('/api/image?filename=fjord&height=1000&width=1000')
    expect(response.status).toBe(400)
  })
  it('Request is rejected and display Expected to receive a number for height but instead recieved a character', async () => {
    const response = await request.get('/api/image?filename=fjord&height=abc&width=500')
    expect(response.text).toBe(
      `Expected to receive a number for height but instead received a character, height:NaN width:300`
    )
  })
})
describe('Test image resize function', () => {
  it('It should create an image with the random values', async () => {
    expect(await resize(image, newImg, height, width)).toHaveBeenCalled()
  })
  it('It should reject any height or width that is not positive or equal to zero', () => {
    expect(ImageChecker.PositiveNeg(height, NegativeWidth)).toBeFalse()
  })

  it('It should reject any character that is not a number in height or width', () => {
    expect(ImageChecker.NumberOrString(height, character)).toBeFalse()
  })
})
