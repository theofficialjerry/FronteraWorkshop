import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import { router as routes} from './routes/index.js';

// TODO: need to import the process env variables
const PORT = 8080;
const app = express();

//express config
//
//TODO: use cors to allow for external calls to the express server from the origin http://localhost:3000
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//routes
//
//TODO: pass the routes for the app to use
app.use(routes);

//home endpoint
//e.g. example route
app.get('/', (req, res) => {
    res.send('Hello world');
});

//db connection
// TODO: connect to the mongo database passing useNewUrlParser: true and useUnifiedTopology: true
const connectdb = async () => {
    try {
        //TODO: connection goes here
        console.log('MongoDB connection success')
    }
    catch (err) {
        console.log({
            err: err,
            msg: 'connection failed'
        })
    }
}

//server starter
//
//TODO: 
(async () => {
    try {
        //TODO: call db connection here and wait for it
        //
        //TODO: Pass the port to the app to listen to for calls
    } catch (err) {
        console.log(err);
    }
})();