import express from 'express'
import routerImage from './routes/photo.route.js'
import cors from 'cors'


const app = express()

//midleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(express.static('public'))

app.use('/', routerImage)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})
