import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { SplitterComponent} from '@syncfusion/ej2-angular-layouts';
import { Splitter } from '@syncfusion/ej2-layouts';
import { HouseTypeLayoutModel } from '../../model/house-type-layout.model';
import { MaterialVScostModel } from '../../model/material-vs-cost.model';
import { DrawHomeService } from '../services/draw-home.service';
import { LoadingBarService } from '@ngx-loading-bar/core';

// import {} '../../../../assets/images/cns-1.jpg';

@Component({
  selector: 'tvs-draw-home',
  templateUrl: './draw-home.component.html',
  styleUrls: ['./draw-home.component.css']
})
export class DrawHomeComponent implements OnInit {
  loader        = this.loadingBar.useRef();
  zoomSize      = ['100%','80%','75%','50%','35%','25%'];
  selected      = [ 2, 8 ];
  
  normalPB: boolean;    

  stripedPB: boolean;    

  animatedPB: boolean; 

  @ViewChild('splitterInstance') splitterObj: SplitterComponent;
  houseType                                 : any;
  displayHouseTypeLayout                    : any;
  houseTypeLayoutModel                      : HouseTypeLayoutModel;
  materialVScostBasic                       : MaterialVScostModel;
  materialVScostCustom                      : MaterialVScostModel;
  materialVScostAdvanced                    : MaterialVScostModel;
  drawHomeEntryForm                         : FormGroup;
  parentMessageBasic                        : any;
  parentMessageCustom                       : any;
  parentMessageAdvanced                     : any;

  testJson                                  : any;
  semiDetachedGableFlNo                     : number;

  constructor(private drawHome: DrawHomeService,
              private _formBuilder: FormBuilder,
              private loadingBar: LoadingBarService) { }

  public onCreated () {
          const splitterObj1 = new Splitter({
              height: '310px',
              paneSettings: [
                  { size: '150px', min: '20%'},
                  { size: '100px', min: '20%'}
              ],
              orientation: 'Vertical'
          });
          splitterObj1.appendTo('#vertical_splitter');
      }
      
  ngOnInit(): void {

    this.houseTypeLayoutModel         = new HouseTypeLayoutModel();
    this.drawHomeEntryForm            = this.createDrawHomeForm();
    this.materialVScostBasic          = new MaterialVScostModel();
    this.materialVScostCustom         = new MaterialVScostModel();
    this.materialVScostAdvanced       = new MaterialVScostModel();

    this.drawHome.getHouseType().subscribe(data=>{
      this.houseType = data;
    });

    this.drawHome.getHouseTypeLayout().subscribe(data=>{
      // console.log(data);
      this.displayHouseTypeLayout = data;
    });
    
  }

  onNbFloors(){
    console.log(this.semiDetachedGableFlNo);
    // this.semiDetachedGableFlNo = this.houseTypeLayoutModel.nbFloors;
  }
  calculateCost():void{
    this.drawHome.getMaterialVScost().subscribe(data=>{

      this.materialVScostBasic    = data[0].basic;
      this.materialVScostCustom   = data[0].custom;
      this.materialVScostAdvanced = data[0].advanced;

      this.parentMessageBasic     = data[0].basic;
      this.parentMessageCustom    = data[0].custom;
      this.parentMessageAdvanced  = data[0].advanced;
    })
  }

  // getMaterialVScost(): void{
    
  //   this.drawHome.getMaterialVScost().subscribe(data=>{

  //     this.materialVScostBasic    = data[0].basic;
  //     this.materialVScostCustom   = data[0].custom;
  //     this.materialVScostAdvanced = data[0].advanced;

  //     this.parentMessageBasic     = data[0].basic;
  //     this.parentMessageCustom    = data[0].custom;
  //     this.parentMessageAdvanced  = data[0].advanced;

  //     // this.parentMessage = data[0].advanced;


  //     // this.parentMessage = this.drawHome.changeMessage(data[0].basic);
  //     // this.parentMessageCustom = this.drawHome.changeMessage(data[0].custom);
  //     // this.parentMessage = this.drawHome.changeMessage(data[0].advanced);


  //     // console.log(this.materialVScostBasic);
  //     // console.log(this.materialVScostCustom);
  //     // console.log(this.materialVScostAdvanced);
  //   })
  // }

  onOptionsSelected(value:number){
    
    this.houseTypeLayoutModel = this.displayHouseTypeLayout.filter(x => x.houseTypeLayoutId === Number(value))[0]

    // console.log(this.houseTypeLayoutModel);

  }
  saveData(): void{
    this.loader.start();
    const data = this.drawHomeEntryForm.getRawValue();
    this.drawHome.saveDrawHome(data).subscribe(response => {
      this.displayHouseTypeLayout = response;
      // console.log(this.displayHouseTypeLayout);
      this.loader.complete();
    });
  }
  showProgressBar(value){    
    
        this.normalPB=false;    
   
        this.stripedPB=false;    
    
        this.animatedPB=false;    
    
    
      }
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
