'use strict'

let movies = [
    {title: "sergio", director:"Greg Moura", type:"action", year:2019},
    {title: "catfish", director:"Honry Joost", type:"adventure",year:2021},
    {title: "the Queen", director:"Frank Simon",type:"romantic",year:2018},
    {title: "Erth and blood", director:"julien", type:"action", year:2019},
    {title: "The occupant", director:"Alex pastor", type:"scientific", year:2021},
];

exports.getAll = function getAll() {
    return movies;
}
//exports.getItem =title getItem() {
   // const movie =movies.find(movies => movies.director)  
//}