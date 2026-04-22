import express from 'express'
import multer from 'multer'

const api=express()

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads/img')
  },
  filename: function (req, file, cb) {
    console.log(file)
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.originalname)
  }
})

const uploads=multer({ storage: storage })
api.use(express.json())

const port=3000

api.get('/', (req, res)=>{
    res.send("api conectada")
})

api.post('/profile', uploads.single('avatar'), (req, res)=>{
  // req.file is the `avatar` file
  // req.body will hold the text fields, if there were any
  res.send("archivo enviado")
})


api.listen(port, ()=>{
    console.log(`conectado al http://localhost:${port}`)
})