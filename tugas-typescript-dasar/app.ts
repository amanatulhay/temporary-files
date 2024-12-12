const cors = require('cors')
const router = require("./src/routes/main")
import express, {Request, Response} from 'express'

const app = express()
const port = 3000

var corsOptions = {
  origin: 'http://localhost:5173',
  optionsSuccessStatus: 200
}

app.use(cors(corsOptions))
app.use(express.json())
app.use("/", router)

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})