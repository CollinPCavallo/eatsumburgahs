const express = require('express');
const router = express.Router();
const burger = require('../models/burger.js');

router.get('/',function (req,res) {
    res.render('index')
});

router.get('/' ,(req,res) => {
    burger.all((data)=>{
        console.log(data);
        let hbsObj = {
            eaten: [],
            notEaten: []
        }
        let eaten = [];
        let notEaten = [];

        for (var i = 0; i < data.length; i++) {
            if (data[i].devoured) {
                hbsObj.eaten.push(data[i]);
            }
            else {
                hbsObj.notEaten.push(data[i]);
            }
        }

        res.render("index", hbsObj);

    });
});
router.post('/burgers', (req,res) => {
    burger.add([req.body.burgers], function (result) {
        res.json({id: result.insertedId});
    });
});

router.put("/burgers/:id",(req, res) => {
    var id = req.params.id;
    burger.update([id], (result) => {
        if (result.affectedRows === 0) {

            return res.status(404).end();
        } else {

            res.status(200).end();
        }
    });
});

module.exports = router;
