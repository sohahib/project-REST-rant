const express = require('express')
const app = express()
require('dotenv').config()
const places = require('../models/places')

app.get('/', (req,res)=>{          
      res.render('places/index', {places})
})

app.get('/new', (req, res) => {
      res.render('places/new')
    })

app.post('/', (req, res) => {
      if(!req.body.pic){
            req.body.pic = 'http://placekitten.com/400/400'
      }
      if(!req.body.city){
            req.body.city = 'Anytown'
      }
      if(!req.body.state){
            req.body.state = 'USA'
      }
      places.push(req.body)
      res.redirect('/places')
    })
   // lett

module.exports = app