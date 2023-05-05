import { Component, OnInit } from '@angular/core';
import { TableService } from '../services/table.service';
import { Movie } from '../models/Movie';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogConfig} from '@angular/material/dialog';
import { UpdateComponent } from './update/update.component';
import { AddComponent } from './add/add.component';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit{
  movies:Movie[]=[];
  constructor(private movieService:TableService,private dialog:MatDialog){}

  ngOnInit(): void {
    this.movies=this.movieService.getAllMovies();
  }

  updateMovie(movie:Movie){
    const dialogRef=this.dialog.open(UpdateComponent,{data:movie});
    this.movies=[...this.movies];
  }

  openAddDialog(){
    let dialogRef = this.dialog.open(AddComponent);
    this.movies=[...this.movieService.getAllMovies()];
    //this.movies=[...this.movies];
    console.log("add button triggered");
  }

}
