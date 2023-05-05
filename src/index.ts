import express, {Request, Response} from 'express'
import bodyParser from "body-parser"
import {videoRouters} from "./routers/video-routers";
import {deleteRouters} from "./routers/video-routers"

//create express app
const app = express()
const port = process.env.PORT || 5000





const parserMiddleware = bodyParser({})
app.use(parserMiddleware)

app.use('/videos', videoRouters)
app.use('/testing/all-data', deleteRouters)




app.listen(port, () => {

    console.log(`Example app listening on port ${port}`)
})