import express from 'express'
import db from '../database/connect.js'
import upload from '../middlevear/multer.js'
 import {newStoryValidator} from '../middlevear/validate.js'

const router = express.Router()

// router.get('/test-asoc' ,async(req, res) => {

   
//     try {
        
//         res.send('Vikas ok su testiniu keliu')

//     } catch (error) {
//         console.log(error)
//         res.status(500).send('Ivyko servako klaida testuojant')
//     }
// })



router.get('/', async (req, res) => {

    try {

        const storys = await db.Storys.findAll({
            include: db.Donations
        })

        res.json(storys)
    } catch (error) {

        console.log(error);
        res.status(500).send('Ivyko klaida issaugant duomenis ')
        
    }
})


router.post('/new', upload.single('photo'), newStoryValidator,  async(req, res) => {
    
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