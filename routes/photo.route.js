import { Router } from "express"
import { getImage } from "../controller/photo.controller.js"

const router = Router()

router.get('/image', getImage)

export default router