// DataBase Models Require
const Rect = require('../models/data');


// Recttangle Overlap Function
function rectOverLap(main, input) {
    return !(
        main.x + main.width <= input.x ||
        input.x + input.width <= main.x ||
        main.y + main.height <= input.y ||
        input.y + input.height <= main.y);
}


// Get Request
const rect_get = (req, res) => {
    Rect.find().sort({ createdAt: -1 })
        .then((rects) => {
            res.render('main', { title: 'All Rects', rects })
        })
        .catch((err) => {
            console.log(err);
        })
}


// Post Request
const rect_post = (req, res) => {
    const { main, input } = req.body;
    const time = new Date().toISOString();


    // Main Rectangles Type
    const mainRect = {
        x: Number(main.x),
        y: Number(main.y),
        width: Number(main.width),
        height: Number(main.height)
    };


    // Input Rectangles Type
    const inputRect = input.map(rect => ({
        x: Number(rect.x),
        y: Number(rect.y),
        width: Number(rect.width),
        height: Number(rect.height)
    }));


    // Filtering Overlap Rectangles
    const filteredInputs = inputRect.filter(rect => {
        const overlap = rectOverLap(mainRect, rect);
        return overlap;
    });


    // Saving Rectangles
    const rectsToSave = filteredInputs.map(rect => ({
        x: rect.x,
        y: rect.y,
        width: rect.width,
        height: rect.height,
        time: time
    }));
    if (rectsToSave.length > 0) {
        Rect.insertMany(rectsToSave)
            .then((result) => {
                res.redirect('/')
            })
            .catch((err) => {
                console.log(err);
            });
    } else {
        res.status(200).render('try-again')
    }
}

// Get Reauest For Creating Rectangles
const create_rect = (req, res) => {
    res.render('create-rect')
}

// Exporting Controllers
module.exports = {
    rect_get,
    rect_post,
    create_rect
}