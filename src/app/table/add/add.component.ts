import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Movie } from 'src/app/models/Movie';
import { TableService } from 'src/app/services/table.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  newMovie:Movie={
   id:0,
   title:"",
   director:"",
   rating:0,
   genre:"",
   releaseyear:0
}
  

  constructor(private movieService:TableService){}

  addNewMovie(){
    if(this.newMovie!=undefined)
      this.movieService.addMovie(this.newMovie);
    console.log("add movie button");
  }
}
