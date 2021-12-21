'use strict'

const Apartment = require('../models/apartment')

function getApartment(req, res) {  
    let idapartment = req.params.idapartment

    Apartment.findById(idapartment, (err,apartment)=> {
        if (err) return res.status(500).send({message: `Error al realizar la petición: ${err}`})
        if (!apartment) return res.status(404).send({message: `El departamento no existe`})

        res.status(200).send({apartment: apartment})
    })
}

function getApartments(req, res) { 
    Apartment.find({}, (err,apartments)=> {
        if(err) res.status(500).send({message: `Error al realizar la petición ${err}`})
        if (!apartments) return res.status(404).send({message: `No existen departamentos disponibles`})
        res.status(200).send({apartments})
    })
}

function saveApartment(req,res){
    console.log('POST /api/apartment')
    console.log(req.body)

    let apartment = new Apartment()
    apartment.ubication = req.body.ubication
    apartment.picture = req.body.picture
    apartment.price = req.body.price
    apartment.category = req.body.category
    apartment.description = req.body.description
    apartment.phone = req.body.phone
    apartment.save((err, apartmentStored) => {
        if(err) res.status(500).send({message: `Error al registrar un departamento ${err}`})

        res.status(200).send({apartment: apartmentStored})
    })
} 

function updateApartment(req,res) { 
    let id = req.params.id
    let update = req.body

    Apartment.findByIdAndUpdate(id, update, (err, aparmetUpdated) => {
        if (err) res.status(500).send({message: `Error al actualizar el departamento: ${err}`})
        res.status(200).send({apartment: aparmetUpdated})
    })
}

function deleteApartment(req,res) {  
    let id =  req.params.id
    Apartment.findById(id, (err,apartment) => {
        if (err) res.status(500).send({message: `Error al eliminar el departamento: ${err}`})
        apartment.remove(err => {
            if (err) res.status(500).send({message: `Error al eliminar el departamento: ${err}`})
            res.status(200).send({message: `El departamento ha sido eliminado`})
        })
    })
}

module.exports = {
    getApartment,
    getApartments,
    saveApartment,
    updateApartment,
    deleteApartment
}