import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Movie } from 'src/app/models/Movie';
import { TableService } from 'src/app/services/table.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit{

  constructor(@Inject(MAT_DIALOG_DATA) public data:any,
    private service:TableService){}

  ngOnInit(): void {}

  editMovie(){
    if(this.data){
      this.service.updateMovie(this.data);
    }
  }
}
