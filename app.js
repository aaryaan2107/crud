import express from 'express'
const app = express()
const port = '3000'
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://127.0.0.1:27017"
connectDB(DATABASE_URL);
app.use(express.urlencoded({extended:false}))
import connectDB from './db/connectdb.js'
import web from './routes/web.js'
app.use('/clg',web);

app.set('view engine','ejs');

app.get('/',(req,res)=>{
res.send("plss enter /clg")
})

app.listen(port,()=>{
    console.log(`server working at http://localhost:${port}`)
})