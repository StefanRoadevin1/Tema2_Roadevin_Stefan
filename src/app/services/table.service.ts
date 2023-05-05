import { Injectable } from '@angular/core';
import { Movie } from '../models/Movie';

@Injectable({
  providedIn: 'root'
})
export class TableService {
  movies:Movie[]=[{
    id:1,
   title:"Big ork",
   director: "Bon Jovi",
   rating:7,
   genre:"Thriller",
   releaseyear:2004
  },
  {
    id:2,
   title:"The night Agent",
   director: "Liam Neeson",
   rating:9,
   genre:"Drama",
   releaseyear:2022
  },
  {
    id:3,
   title:"The Marksman",
   director:"Robert Lorenz",
   rating:10,
   genre:"Thriller",
   releaseyear:2016
  },
  {
    id:4,
    title:"The last kingdom",
    director:"Edward Bazalgette",
    rating:6,
    genre:"Thriller",
    releaseyear:2023
  }
];
  index:number=5;
  constructor() { }

  getAllMovies():Movie[]{
    return this.movies;
  }

  updateMovie(movie:Movie){
    let movieToUpdate=this.movies.find(x=>x.id==movie.id);
    movieToUpdate=movie;
  }

  addMovie(movie:Movie){
    movie.id=this.index++;
    this.movies.push(movie);
    console.log("movie added from service"+this.index+movie.title);
  }
}
