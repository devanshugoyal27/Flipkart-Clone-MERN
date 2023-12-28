import  express  from "express";
import connection from "./database/db.js";
import dotenv from 'dotenv'
import defaultData from "./defaultData.js";
import router from "./routes/route.js";
import cors from 'cors';
import bodyParser from "body-parser";

const app = express();
const PORT = process.env.PORT || 8000

dotenv.config();
app.use(cors());
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use('/', router);

const user = process.env.DB_USERNAME;
const pass = process.env.DB_PASSWORD;
const url = process.env.MONGODB_URI || `mongodb+srv://${user}:${pass}@ecommerce.zmt0chz.mongodb.net/PROJECT0?retryWrites=true&w=majority`;
connection(url);

app.listen(PORT, ()=>{
    console.log(`server is running sucuessfully on PORT ${PORT}`)
});

defaultData();