let express = require('express');
let router = express.Router();
let validateSession = require('../middleware/validate-session');
const Log = require('../db').import('../models/log');

router.post('/', validateSession, (req, res) => {
    const logEntry = {
        description: req.body.log.description,
        definition: req.body.log.definition,
        result: req.body.log.result,
        owner_id: req.user.id
    }
    Log.create(logEntry)
        .then(log => res.status(200).json(log))
        .catch(err => res.status(500).json({error: err}))
})

router.get('/all', validateSession, (req, res) => {
    Log.findAll()
    .then(logs => res.status(200).json(logs))
    .catch(err => res.status(500).json({error: err}))
});

router.get('/', validateSession, (req, res) => {
    let owner_id = req.user.id
    Log.findAll({
        where: {owner_id: req.user.id}
    })
    .then(logs => res.status(200).json(logs))
    .catch(err => res.status(500).json({error: err}))
});

router.get('/:owner_id', validateSession, (req, res) => {
    // let owner_id = req.user.id
    Log.findAll({
        where: {owner_id: req.params.owner_id}
    })
    .then(logs => res.status(200).json(logs))
    .catch(err => res.status(500).json({error: err}))
});

router.put('/update/:id', validateSession, function (req, res) {
    const updateLogEntry = {
        description: req.body.log.description,
        definition: req.body.log.definition,
        result: req.body.log.result,
    };
    const query = { where: { id: req.params.id, owner_id: req.user.id} };
    Log.update(updateLogEntry, query)
        .then((logs) => res.status(200).json(logs))
        .catch((err) => res.status(500).json({ error: err }));
});

router.delete("/delete/:id", validateSession, function (req, res) {
    const query = { where: { id: req.params.id, owner_id: req.user.id }};

        Log.destroy(query)
        .then(() => res.status(200).json({message: "Log deleted"}))
        .catch((err) => res.status(500).json({error: err}))
});

module.exports = router