import { products } from "./Constants/productData.js"
import Product from "./model/productSchema.js"


const DefaultData = async () =>{
    try {
        await Product.insertMany(products);
        console.log('Data inserted successfully')
    } catch (error) {
        console.log('Error while inserting default products data:', error.message) 
    }
}

export default DefaultData;