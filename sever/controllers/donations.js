import express from 'express'
import db from '../database/connect.js'

const router = express.Router()

router.post('/donation', async(req, res) => {

    console.log(req.body);
// console.log('DONATIONS TESTING',req.body);
    try {

        const donation = await db.Donations.create(req.body)

        const story = await db.Storys.findOne({where : {id: req.body.storyId}})
       story.raised_donation = story.raised_donation + Number(req.body.donated_sum)

        await story.save()

        res.status(200).send('Auka sekmingai priimta')
        
    } catch (error) {
        
        console.log(error)
        res.status(500). send('Ivyko serverio klaida')
    }
})



export default router