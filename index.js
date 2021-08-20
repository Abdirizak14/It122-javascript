//var http = require("http");

// var allMovies = movie.getAll();

// http.createServer((req,res) =>{
//   var path = req.url.toLowerCase();
//   switch(path) {
//     case '/': 
//         res.writeHead(200, {'Content-Type': 'text/plain'});
//         res.end('Home Page.' + 'these are my movies: ' + allMovies + ' movies');
//     break;
//     case '/about':
//       res.writeHead(200, {'Content-Type': 'text/plain'});
//       res.end('About Me: My name is abdirizak. I study web development and I like play video games.');
//       break;
//     default:
//       res.writeHead(404, {'Content-Type': 'text/plain'});
//       res.end('404:Page not found.');
//   }
  
// }).listen(process.env.PORT || 3000);



const express = require("express");
const bodyParser = require("body-parser");
const movies = require('./data');
const app = express();
const mongoose = require('mongoose');
const moviesMongo= require('./modules/moviesProject');
//import cors from 'cors';
app.use('/api', require('cors')()); // set Access-Control-Allow-Origin header for api route
app.get('/api/movies', (req, res) => {
  console.log (moviesMongo)
  return moviesMongo.find({}).lean()
    .then((movies) => {
        // res.json sets appropriate status code and response header
        res.json(movies);
    })
    .catch(err => {return res.status(500).send('Error occurred: database error.')});
});

app.get('/api/movies/:title', (req,res) => {
  const movie = movie.getItem(req.params.title); // return a single movie
  if (moviesMongo) {
    // res.json sets appropriate status code and response header
    res.json(movie);
  } else {
    return res.status(500).send('Database Error occurred');
  }
});
app.get('/api/delete/:id', (req, res) => {
  const itemId = req.params.id;
  records.deleteOne({_id: itemId})
  .exec()
  .then(result => {
      res.json(result);
  })
  .catch(err => {
      console.log(err);
      res.status(500).json({
          error: err
      });
  });
});



console.log ('./connect', moviesMongo);

//Parsing the data
app.use(bodyParser.json());
app.set('port', process.env.PORT || 3000);
app.use(express.urlencoded({extended: false}));

const exphbs = require('express-handlebars');
app.engine('handlebars', exphbs());
//app.set('view engine', 'handlebars');⸀

app.use(express.json());
// set Access-Control-Allow-Origin header for api route
var cors = require('cors')
app.use(cors());

//Send a GET request to READ(view) a list of quotes
//http://localhost:3000/quotes/
app.get('/', (req, res, next) => {
    return movies.getAll()
});

//Send a GET request to READ(view) a single quote
//http://localhost:3000/detail?id=
app.get('/detail', (req, res) => {
  const quote = movies.getMovie(req.params.id);
});

app.listen(3000, () => console.log('Quote API listening on port 3000!'));

