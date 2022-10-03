import express from 'express'
import db from '../database/connect.js'
import bcrypt from 'bcrypt'

const router = express.Router()

const saltRounds = 10





router.post ('/register', async (req, res) => {
    
    try {

        const userExist = await  db.Users.findOne( {where: {email: req.body.email } } )

        if(userExist){
            res.status(401).send('Toks vartotoajas jau egzistuoja')
            return 
        }

        req.body.password =  await bcrypt.hash(req.body.password, saltRounds )

        const user = await db.Users.create(req.body)

        res.json(' Registracija sekminga')
        
    } catch (error) {

        console.log(error);
        res.status(401).send('ivyko serverio klaida')
    }

})


router.post('/login', async (req, res) => {

    try {

     const user = await db.Users.findOne({where:{email: req.body.email}})
        console.log('Testas ligono', req.body);
     if(!user)
     return res.status(401).send('Toks vartotojas nerastas')

     if(await bcrypt.compare(req.body.password, user.password )) {

       req.session.loggedIn = true

       req.session.user = {
        id: user.id,
        first_name: user.name,
        last_name: user.last_name,
        email: user.email
        // role: user.role

       }

       res.status(200).json({user: req.session.user, message: 'Sekmingai prisijungete'})
       
     } else{
        res.status(401).send('Nepavyko prisijungti')
     }

    } catch (error) {
        console.log(error);
        res.status(500).send('Ivyko serverio klaida')
    }
    
})


export default router