import mongoose from "mongoose";

const productSchema =new mongoose.Schema({
    id: {
        type: String,
        unique: true,
        required: true
    },
    url: String,
    detailurl: String,
    title: Object,
    price: Object,
    quantity: Number,
    decription: String,
    dicount: String,
    tagline: String,
});

const Product = mongoose.model('product',productSchema);

export default Product;