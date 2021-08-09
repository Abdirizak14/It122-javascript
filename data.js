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
exports.delete = (title) => {
    const oldLength = movies.length;
    movies = movies.filter((item) => {
        return item.title !== title;
    });
    // if old & new array lengths differ, item was deleted
    return {deleted: oldLength !== movies.length, total: movies.length };
};
exports.add = (newmovie) => {
    const oldLength = movies.length;
    // use existing get() method to check if movies already in our list
    let found = this.getmovies(newmovie.title);
    if (!found) {
        movies.push(newmovie);
    }
    // if old & new array lengths differ, item was added
    return {added: oldLength !== movies.length, total: movies.length };
  };