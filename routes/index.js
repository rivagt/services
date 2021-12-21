'use stricts'

const express = require('express')
const api = express.Router()
const auth = require('../middlewares/auth')
const apartCtrl = require('../controllers/apartment')
const usrCtrl = require('../controllers/user')


api.get('/welcome/', (req, res) =>{
    res.send({ message: `Hello to main tree` })
})
api.get('/apartment',auth, apartCtrl.getApartments)
api.get('/apartment/:idapartment',auth, apartCtrl.getApartment)
api.post('/apartment',auth, apartCtrl.saveApartment)
api.put('/apartment/:id',auth, apartCtrl.updateApartment)
api.delete('/apartment/:id',auth, apartCtrl.deleteApartment)
api.post('/signup', usrCtrl.singUp)
api.post('/signin', usrCtrl.singIn)
api.get('/private', auth , (req,res) => {
    res.status(200).send({message: `Tienes acceso`})
})

module.exports = api