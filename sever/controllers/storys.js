import express from 'express'
import db from '../database/connect.js'
import upload from '../middlevear/multer.js'

const router = express.Router()


router.get('/', async (req, res) => {

    try {

        const storys = await db.Storys.findAll()

        res.json(storys)
    } catch (error) {

        console.log(error);
        res.status(500).send('Ivyko klaida issaugant duomenis ')
        
    }
})


router.post('/new', upload.single('photo'), async(req, res) => {
    
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