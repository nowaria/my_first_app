require('dotenv').config()
const express= require('express')
const bodyParser= require('body-parser')
const app=express()

const port= process.env.PORT

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
      extended: true
}))

app.get('/', (req, res )=> {
    res.json({app: 'The end point is working'})
  })

  app.listen(port, () => {
    console.log(`Successful! The server is up and running on port ${port}`)
  })