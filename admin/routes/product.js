const express = require('express');
const router = express.Router();
// const {uploadProduct} = require('../components/product')

const dirname = "/Users/admin/Desktop/Codes/Hardware-store/admin";
router.use('/assets/css', express.static(__dirname + '/assets/css'))
router.use('/assetslib', express.static(__dirname + '/assets/lib'))
router.use('/assets/js', express.static(__dirname + '/assets/js'))
router.use('/assets/images', express.static(__dirname + '/assets/images'))
router.use('/assets/vendors', express.static(__dirname + '/assets/vendors'))


// router.get("/", (req, res)=> {
//     res.sendFile(dirname + '/add-products.html');
// }) 


// router.route('/products').post(uploadProduct);

module.exports = router;