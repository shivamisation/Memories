import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'


import postRoutes from './routes/posts.js'



const app = express() ;


app.use(bodyParser.json({limit : "30mb" , extended : true}))
app.use(bodyParser.urlencoded({limit : "30mb" , extended : true}))
app.use(cors())


app.use('/posts' , postRoutes) // every route inside our post route will start from posts


const CONNECTION_URL = 'mongodb+srv://shivam:shivam@cluster0.o9ufs.mongodb.net/memories?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000 ;

mongoose.connect(CONNECTION_URL , {useNewUrlParser : true, useUnifiedTopology : true})
    .then(() => app.listen(PORT , () => console.log(`Server running on port: ${PORT}`)))
    .catch((err) => console.log(err.message)) ;

mongoose.set('useFindAndModify' , false) ;

































