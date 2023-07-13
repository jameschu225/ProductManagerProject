const express = require('express');
const app = express();
const cors = require('cors')
require('./configs/mongooes.config')

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors())

const ProductRoutes = require('./routes/productRoutes');
ProductRoutes(app);

app.listen (8000, ( ) => console.log('listening at port 8000'));