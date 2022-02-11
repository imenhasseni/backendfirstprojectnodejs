const express = require("express");
const cors = require('cors');
const mongoose = require("mongoose");
const { success, error } = require('consola');
require('dotenv').config();
const categoryroute = require("./routes/categoryRoute");
const productroute = require("./routes/productRoute");

const db = require('./config/database');

const app = express();

// 2 methode methode simple ou bien avec .env
// const PORT = 5000;
const PORT =  process.env.APP_PORT;

const DOMAIN = process.env.APP_DOMAIN;

//methode 1 with express methode 2 avec cors
//app.use(express.json()); les requests on format json
app.use(cors()); //securite de la partage de ressource

//route
app.use('/category', categoryroute)
app.use('/product', productroute)

//app.listen(Port, console.log('Server is running ${Port}).....)

//app.listen(port, function(){
//   console.log('The server is running, '+ 'please, open your browser at http://localhost:%s', port);
//});
//start listenting for the server on PORT
app.listen(PORT, async () => {
    try {
        success({
            message: `Server started on PORT ${PORT} ` + `URL : ${DOMAIN}`,
            badge: true,
        });
    } catch (err) {
        error({ message: 'error with server', badge: true });
    }
});

