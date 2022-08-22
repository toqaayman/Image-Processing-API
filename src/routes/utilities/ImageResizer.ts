import sharp from 'sharp'

const resize = async (
  image: string,
  newImg: string,
  height: number,
  width: number
): Promise<void> => {
  await sharp(image)
    .resize(height, width)
    .jpeg({
      quality: 90
    })
    .toFile(newImg)
}

export default resize
