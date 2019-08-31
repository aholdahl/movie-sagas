const express = require('express');
const pool = require('../modules/pool.js');
const router = express.Router();

//get all movies from the Movie table and send to the client
router.get('/', (req, res) => {
    const queryText = `SELECT * FROM "movies" ORDER BY "title" ASC;`
    pool.query(queryText)
        .then((result) => {
            res.send(result.rows);
        }).catch((error) => {
            console.log(error);
            res.sendStatus(500);
        })
})

//get the current movie from the Movie table and send to the client
router.get('/:id', (req, res) => {
    const queryText = `SELECT * FROM "movies" WHERE "id" = $1;`
    pool.query(queryText, [req.params.id])
        .then((result) => {
            res.send(result.rows);
        }).catch((error) => {
            console.log(error);
            res.sendStatus(500);
        })
})

//update the current movie in the Movie table and send confirmation to the client
router.put('/', (req, res)=>{
    let movieToUpdate = req.body;
    const queryText = `UPDATE "movies" SET "title" = $1, "description" = $2 WHERE "id" = $3;`
    pool.query(queryText, [movieToUpdate.title, movieToUpdate.description, movieToUpdate.id])
    .then((result)=>{
        res.sendStatus(200);
    }).catch((error)=>{
        console.log(error);
        res.sendStatus(500);
    })
})

module.exports = router;