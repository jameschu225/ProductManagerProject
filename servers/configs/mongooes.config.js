const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/Products', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

        .then (() => console.log('Product DB is connected'))
        .catch ((err) => console.log(err));

        require('../models/prodcut.models')