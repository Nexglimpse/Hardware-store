const mongoose = require('mongoose')
const productSchema = new mongoose.Schema({
    image:{
        data: Buffer,
        contenType: String
    },
    category:{
        type:String,
        require: true
    },
    name:{
        type: String,
        require: true
    },
    brand:{
        type: String,
        require: true
    },
    price:{
        type : Number,
        require: true
    },
    description:{
        type: String,
        require: true

    }
    
}
)

module.exports = mongoose.model(`productModel`,productSchema)