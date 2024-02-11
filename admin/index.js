require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
// const bodyparser = require('body-parser')
// const product = require('./routes/product')
// const {uploadProduct} = require('../admin/components/product')
const productModel = require('../admin/models/products')

mongoose.connect(process.env.DB_URL)
const db = mongoose.connection
db.on('error', errorMessage => console.log(errorMessage))
db.once('open', ()=> console.log('connection established'))

app.use('/assets/css', express.static(__dirname + '/assets/css'))
app.use('/assetslib', express.static(__dirname + '/assets/lib'))
app.use('/assets/js', express.static(__dirname + '/assets/js'))
app.use('/assets/images', express.static(__dirname + '/assets/images'))
app.use('/assets/vendors', express.static(__dirname + '/assets/vendors'))

// app.use('/product', product)
const PORT = 3000;


app.get("/", (req, res)=> {
    res.sendFile(__dirname + '/add-products.html');
}) 

app.post('/products', async (request, response) => {
    const newProduct = new productModel({
        image:  {
            data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)),
            contentType: 'image/png'
        },
        category: request.body.coursecat,
        name: request.body.coursename,
        price: request.body.courseprice,
        description: request.body.cdesc
    })
    try{
        const product = await newProduct.save()
        response.status(200).json(product)
    }
    catch(error){
        response.status(500).json({message: "couldnt upload product"})
    }
})



app.listen(PORT, console.log(`Server was connected in http://localhost:${PORT}`));
