// Requires
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Rect = require('./models/data');
const rectRoutes = require('./routes/rects-routs')


// View Engine
app.set('view engine', 'ejs')


// DataBase CFG
const dbURI = 'Your DataBase Config'
mongoose.connect(dbURI)
    .then((result) => app.listen(3000))
    .catch((err) => console.log(err))


// Static Files CFG
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }))
app.use(express.json());


// Using Routes
app.use('/', rectRoutes)


// Not Found Page
app.use((req, res) => {
    res.status(404).render('notFound')
})