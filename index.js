require('dotenv').config()
const express = require('express')
const app = express()

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))


app.use('/places', require('./controllers/places'))

app.get('/', (req, res)=>{
    res.render('Home')
})
app.get('/places', (req, res)=>{
    res.render('index')
})


app.get('*', (req, res) => {
    res.render('error404')
  })
  

app.listen(process.env.PORT, ()=>{
    console.log("listening on port ", process.env.PORT)
})