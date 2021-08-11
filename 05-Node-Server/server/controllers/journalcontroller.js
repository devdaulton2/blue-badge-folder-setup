let express = require('express');
let router = express.Router();
let validateSession = require('../middleware/validate-session');
let Journal = require('../db').import('../models/journals');


router.get('/practice', validateSession, function(req, res) 
{
    res.send('Hey!! This is a practice route!')
})


//Journal Create

router.post('/create', validateSession, (req, res) => {
    const journalEntry = {
        title: req.body.journal.title,
        date: req.body.journal.date,
        entry: req.body.journal.entry,
        owner: req.user.id
    }
    Journal.created(journalEntry)
        .then(journal => res.status(200).json(journal))
        .catch(err => res.status(500).json({error: err}))
})


//Get All Entries
router.get("/", (req, res) => {
    Journal.findAll()
        .then(journals => res.status(200).json(journals))
        .catch(err => res.status(500).json({error: err}))
});


//Get entries by user

router.get("/mine", validateSession, (req, res) => {
    let userid = req.user.id
    Journal.findAll({
        where: {owner: userid}
    })
        .then(journals => res.status(200).json(journals))
        .catch(err => res.status(500).json({error: err}))
});


// Get entries by title

router.get('/:title', function (req, res) {
    let title = req.params.title;

    Journal.findAll({
        where: {title: title}
    })
    .then(journals => res.status(200).json(journals))
    .catch(err => res.status(500).json({error: err}))
});

module.exports = router