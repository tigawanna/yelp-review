import "dotenv/config.js";
import express,{ Request,Response } from "express";
import cors from 'cors'
import { createServer } from "http";
import bodyParser from 'body-parser'





const app = express();


const jsonParser = bodyParser.json()
const PORT = process.env.PORT||4000
const server = createServer(app);




(async () => {

app.use(cors())
app.options('*', cors());

app.get('/', (_:Request, res:Response) => {
  res.send({ message: "We did it!, the server works" })
});


// POST /api/users gets JSON bodies
app.post('/users', jsonParser, function (req:Request, res:Response) {
  // create user in req.body
  const user = req.body?.user.username
  // //console.log("looking for ===== ",user)
 //console.log("looking for ===== ",user, userExists)
  res.send({data:user})
})


server.listen(PORT, () => {
  console.log(`listening on  http://localhost:${PORT}`)
});

})().catch(e=> console.log('error on server ====== ',e)
)

