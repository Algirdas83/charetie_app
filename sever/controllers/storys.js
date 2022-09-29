import express from 'express'
import db from '../database/connect.js'
import upload from '../middlevear/multer.js'

const router = express.Router()


router.post('/new', upload.single('photo'), async(req, res) => {
    console.log('Ar ATKELIAUJA FOTO',req.file);
try {

    if(req.file)
        
    req.body.photo ='/' + req.file.path

    
    const storys = await db.Storys.create(req.body)

    res.status(200).send('Yrasas sekmingai isaugotas')
} catch (error) {
    console.log(error);

    res.status(500).send('ivyko serverio klaida')
}

})


export default router