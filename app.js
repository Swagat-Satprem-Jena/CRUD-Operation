import express from 'express';
import web from './routes/web.js';
import path from 'path';
import bodyParser from 'body-parser';
import connectDB from './db/connectdb.js';

const app = express();
app.use(bodyParser.urlencoded({ extended: false }))

const port = process.env.PORT || 3000;
const DATABASE_URL = process.env.DATABASE_URL || 'mongodb://localhost:27017';

connectDB(DATABASE_URL);

app.set ('views', './views');
app.set('view engine', 'ejs');

app.use(express.static(path.join(process.cwd(), 'public')));

app.use("/", web);

app.listen(port, () => {
    console.log(`Server started at Port ${port} link :- http://localhost:${port}`);
})