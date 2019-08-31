const express = require('express');
const pool = require('../modules/pool.js');
const router = express.Router();

// //get all genres from the Genres table and send to client
// router.get('/', (req, res)=>{
//     const queryText = `SELECT * FROM "genres";`
//     pool.query(queryText)
//     .then((result)=>{
//         res.send(result.rows);
//     }).catch((error)=>{
//         console.log(error);
//         res.sendStatus(500);
//     })
// })

//get genres for current movie from the Genres table and send to client
router.get('/:id', (req, res) => {
    const queryText = `SELECT "genres"."name" AS "genre" FROM "movies_genres" JOIN "genres" ON "movies_genres"."genres_id" = "genres".id WHERE "movies_genres".movies_id = $1;`
    pool.query(queryText, [req.params.id])
        .then((result) => {
            res.send(result.rows);
        }).catch((error) => {
            console.log(error);
            res.sendStatus(500);
        })
})

module.exports = router;