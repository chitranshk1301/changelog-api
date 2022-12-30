import express from 'express';
import router from './router'
import morgan from 'morgan'

const app = express();

// middlewares are always written before route decorators
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/',(req,res)=>{
    console.log("hello world")
    res.status(200)
    res.json(
        {"message":"hello world"}
    )
})

app.use('/api', router)

export default app;
