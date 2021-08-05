'use strict'

let movies = [
    {id:1, title: "sergio", director:"Greg Moura", type:"action", year:2019},
    {id:2, title: "catfish", director:"Honry Joost", type:"adventure",year:2021},
    {id:3, title: "the Queen", director:"Frank Simon",type:"romantic",year:2018},
    {id:4, title: "Erth and blood", director:"julien", type:"action", year:2019},
    {id:5, title: "The occupant", director:"Alex pastor", type:"scientific", year:2021},
];

// exports.getAll = function getAll() {
//     return movies;
// }
//exports.getItem =title getItem() {
   // const movie =movies.find(movies => movies.director)  
//}

const getAll = () => {
    console.log("Movies data: ", movies);
    return {movies: true};
}

const getMovie = (id) => {
    return movies.find(movie => movie.id == id);
}

module.exports = {
    getAll,
    getMovie
}