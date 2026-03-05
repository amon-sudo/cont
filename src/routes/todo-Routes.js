import express from 'express'
import db from '../db.js'


const router = express.Router()


router.get('/', (req, res) =>{
    const getTodos = db.prepare("SELECT * FROM todos WHERE user_id = ?")
    const todos = getTodos.all(req.userid)
    res.json(todos)
}) //get all to do for already loged in users

// creating a new to do

router.post('/', (req, res) =>{
    const {task} = req.body
    const insertTodo = db.prepare(`INSERT INTO todos ( user_id, task), VALUES
        (?, ?)`)
})

//updating the to do list or using put

router.put('/:id', (req, res) =>{})


//deleting a to do

router.delete('/:id', (req, res) => {})

export default router