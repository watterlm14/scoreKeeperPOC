require('dotenv').config();
const express = require('express');
const path = require('path');
const dbHandler = require('./services/DBHandler');

const app = express();

var port = process.env.PORT || 3000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('pages/default');
});

app.get('/contestants', (req, res) => {
    res.render('pages/contestants', {
        contestants: dbHandler.GetAllContestants()
    });
});

app.get('/event/:id', (req, res) => {
    res.render('pages/event', {
        event: dbHandler.GetEventById(req.params.id),
        contestants: dbHandler.GetContestantsByEvent(req.params.id)
    });
});

app.get('/events', (req, res) => {
    res.render('pages/events', {
        events: dbHandler.GetEvents()
    });
});



app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
});