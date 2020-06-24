import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Course } from '../draw-home/draw-home.component';
import * as moment from 'moment';

@Component({
  selector: 'tvs-draw-home-dialog',
  templateUrl: './draw-home-dialog.component.html',
  styleUrls: ['./draw-home-dialog.component.scss']
})
export class DrawHomeDialogComponent implements OnInit {
  form: FormGroup;
  description:string;
  
  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<DrawHomeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) {description,longDescription,
        category}:Course ) {

    this.description = description;


    this.form = fb.group({
      Height: [description, Validators.required],
      Width: [description, Validators.required],
      Material: [category, Validators.required],
      category: [category, Validators.required],
      releasedAt: [moment()],
      Approximate: [description]
    });

}

  ngOnInit(): void {
  }
  save() {
    this.dialogRef.close(this.form.value);
}

close() {
    this.dialogRef.close();
}
}
