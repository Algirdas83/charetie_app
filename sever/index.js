
import express from 'express'
import cors from 'cors'
import session from 'express-session'
import {Users, Storys, Donations} from './controllers/index.js'

const app = express()




 //CORS blokavimo nuėmimas 
app.use(cors())

//Duomenų priėmimui JSON formatu
app.use(express.json())

//Failu perdavimui is statinės direktorijos
app.use('/uploade', express.static('uploade'))

//Duomenų priėmimui POST metodu
app.use(express.urlencoded({ extended: true }))

//Sesijos konfigūracija
app.set('trust proxy', 1)

app.use(session({
    secret: 'labai slapta fraze',
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: false,
        maxAge: 6000000
    }
}))



 app.use('/api/users/',Users  )

 app.use('/api/storys/',Storys )

 app.use('/api/donators/', Donations)




app.listen(3000)