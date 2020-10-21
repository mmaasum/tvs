import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { HouseTypeLayoutModel } from '../../../model/house-type-layout.model';
import { DrawHomeService } from '../draw-home.service';

@Component({
  selector: 'tvs-left-pane',
  templateUrl: './left-pane.component.html',
  styleUrls: ['./left-pane.component.css']
})
export class LeftPaneComponent implements OnInit {

  houseType                                 : any;
  drawHomeEntryForm                         : FormGroup;
  houseTypeLayoutModel                      : HouseTypeLayoutModel;
  displayHouseTypeLayout                    : any;

  semiDetachedGableFlNo                     : number;
  
  constructor(private drawHome: DrawHomeService,
    private _formBuilder: FormBuilder,
    private loadingBar: LoadingBarService) { }

  ngOnInit(): void {
    this.houseTypeLayoutModel         = new HouseTypeLayoutModel();
    this.drawHomeEntryForm            = this.createDrawHomeForm();
    this.houseTypeLayoutModel         = new HouseTypeLayoutModel();

    this.drawHome.getHouseType().subscribe(data=>{
      this.houseType = data;
    });

    this.drawHome.getHouseTypeLayout().subscribe(data=>{
      this.displayHouseTypeLayout = data;
    });
  }


  onNbFloors(value){}

  createDrawHomeForm(): FormGroup{
    return this._formBuilder.group({
      width                           : [this.houseTypeLayoutModel.width],
      length                          : [this.houseTypeLayoutModel.length],
      floorThickness                  : [this.houseTypeLayoutModel.floorThickness],
      wallThickness                   : [this.houseTypeLayoutModel.wallThickness],
      wallHeight                      : [this.houseTypeLayoutModel.wallHeight],
      nbFloors                        : [this.houseTypeLayoutModel.nbFloors],
      roofHeight                      : [this.houseTypeLayoutModel.roofHeight],
      roofThickness                   : [this.houseTypeLayoutModel.roofThickness],
      roofTopLength                   : [this.houseTypeLayoutModel.roofTopLength],
      roofBottomLength                : [this.houseTypeLayoutModel.roofBottomLength]
    })
  }
}
