const mongoose = require('mongoose')
const Schema = mongoose.Schema;
//const ObjectId = Schema.ObjectId;

 const ProductSchema = new Schema({

    caverimage: String,
    name: {type: String,required:true, max: [30, '最大30文字まで'] },
     price: Number,
    description: String,
    heading1: String,
    heading2: String,
    heading3: String,
    headingtext1: String,
    headingtext2: String,
    headingtext3: String,
}); 

module.exports = mongoose.model('product',ProductSchema)