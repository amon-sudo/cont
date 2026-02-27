import express from 'express'
import db from '../db.js'


const router = express.Router()


router.get('/', (req, res) =>{}) //get all to do for already loged in users

// creating a new to do

router.post('/', (req, res) =>{})

//updating the to do list or using put

router.put('/:id', (req, res) =>{})


//deleting a to do

router.delete('/:id', (req, res) => {})

export default router