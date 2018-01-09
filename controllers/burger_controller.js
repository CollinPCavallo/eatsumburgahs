const express = require('express');
const router = express.Router();
const burger = require('../models/burger.js');

// router.get('/',function (req,res) {
//     res.render('index')
// });

router.get('/', (req, res) => {
    burger.all((data) => {
        var hbsObj = {
            burgers: data
        };
        res.render('index', hbsObj)
    });
});
router.post('/burgers', (req,res) => {
    console.log("POSTING");
    burger.add([req.body.burgers], function (result) {
        res.json({id: result.insertedId});
    });
});

router.put('/burgers/:id', (req, res) => {
    console.log("UPDATING");
    const state = req.params.id;
    console.log(state)

    burger.update(state, (data) => {
        if(data.changedRows === 0) {
            return res.status(404).end()
        } else{
            res.status(200).end()
        }
    })

});

module.exports = router;
