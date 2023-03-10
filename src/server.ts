import express from 'express';
import router from './router'
import morgan from 'morgan'
import cors from 'cors'
import {protect} from './modules/auth'
import {createNewUser, signin} from './handlers/user'

const app = express();

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
// middlewares are always written before route decorators

app.get('/',(req,res,next)=>{
    res.json({message: 'nope'})
})

app.use('/api',protect, router)
app.post('/user', createNewUser)
app.post('/signin', signin)

// error handling middleware
app.use((err, req, res, next) => {
    if (err.type === 'auth') {
      res.status(401).json({message: 'unauthorized'})
    } else if (err.type === 'input') {
      res.status(400).json({message: 'invalid input'})
    } else {
      res.status(500).json({message: 'oops, thats on us'})
    }
  })
//   can add this middleware to any handler to catch errors and send a response

export default app;
