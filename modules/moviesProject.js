const mongoose = require('mongoose');
const credentails = require("../credentails.js")
const { Schema } = mongoose;
//import { connectionString } from "./credentails.js";
//const connectionString = require("../credentails");

 mongoose.connect(credentails.connectionString, {
     dbName: 'moviesProject',
    useNewUrlParser: true,
    useUnifiedTopology: true
});



// mongoose.connection.on('open', () => {
//   console.log('Mongoose connected.');
// });
// define data model as JSON key/value pairs
// values indicate the data type of each key
const bandSchema = new Schema({
 name: { type: String, required: true },
 title: String,
 director: String,
 type: String,
 bass: String,
year: String
});
module.exports = mongoose.model('Movies', bandSchema);