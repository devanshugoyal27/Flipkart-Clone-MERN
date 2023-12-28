import { products } from "./constant/data.js"
import Product from "./model/productSchema.js"


const defaultData = async () => {

try{
       await Product.insertMany(products);
        console.log('products inserted succesfully');

}catch(error){
        console.log('error while insserting default data' , error.message)
}
}

export default defaultData
