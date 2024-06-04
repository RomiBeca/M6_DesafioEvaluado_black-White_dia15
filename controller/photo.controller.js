
import { nanoid } from 'nanoid'
import Jimp from "jimp"
import path from 'path'

const __dirname = import.meta.dirname

const saveImage = path.join(__dirname, '../public/image')

export const getImage = async (req, res) => {
    const { url } = req.query
    try {
        const image = await Jimp.read(url);
        const buffer = await image
            .resize(350, 350)
            .greyscale()
            .getBufferAsync('image/jpeg')

        const idImage = `${nanoid()}.jpeg`
        const pathFile = path.join(saveImage, idImage)
        await image.writeAsync(pathFile)

        res.setHeader('Content-Type', 'image/jpeg')
        return res.send(buffer)

    } catch (error) {
        console.log(error)
        res.status(500).json({ ok: false })
    }
}


