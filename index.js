import express from 'express';
import multer from 'multer';

const api = express();

const uploads = multer({ dest: 'uploads/img' });
api.use(express.json());

const PORT = 3000;

api.get ('/', (req, res) => {
    res.send("api conectada");
});

api.post('/profile', uploads.single('avatar'), function (req, res, next) {
    res.send("Archivo enviado");
});

api.listen(PORT, () => {
    console.log(`conectado al http://localhost:${PORT}`);
});