import { Component, OnInit, Input } from '@angular/core';
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { DrawHomeDialogComponent } from '../draw-home-dialog/draw-home-dialog.component';

export interface Course {
  id:number;
  description:string;
  iconUrl: string;
  courseListIcon: string;
  longDescription: string;
  category:string;
  lessonsCount:number;
}

@Component({
  selector: 'tvs-draw-home',
  templateUrl: './draw-home.component.html',
  styleUrls: ['./draw-home.component.scss']
})
export class DrawHomeComponent implements OnInit {
  courses: Course[];

  
  
  constructor(private dialog: MatDialog) {
  }
  // tslint:disable-next-line: no-input-rename
  @Input('master') masterName: string;
  
  ngOnInit(): void {
  }

  editCourse() {

    const dialogConfig = new MatDialogConfig();
    dialogConfig.height = '95%'
    dialogConfig.width = 'auto'

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
        // description, longDescription, category
    };

    const dialogRef = this.dialog.open(DrawHomeDialogComponent,
        dialogConfig);


    dialogRef.afterClosed().subscribe(
        val => console.log("Dialog output:", val)
    );

}
}
