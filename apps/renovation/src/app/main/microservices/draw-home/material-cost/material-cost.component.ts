import { Component, Input, OnInit } from '@angular/core';
import { MaterialVScostModel } from '../../../model/material-vs-cost.model';
import { DrawHomeService } from '../draw-home.service';

@Component({
  selector: 'tvs-material-cost',
  templateUrl: './material-cost.component.html',
  styleUrls: ['./material-cost.component.css']
})
export class MaterialCostComponent implements OnInit {

  @Input() childMessage: any;

  houseType                                 : any;
  materialVScostBasic                       : MaterialVScostModel[];
  parentMessageBasic                        : any;
  parentMessageCustom                       : any;
  parentMessageAdvanced                     : any;

  constructor(private drawHome: DrawHomeService,) { }

  ngOnInit(): void {
    // this.materialVScostBasic          = new MaterialVScostModel();

    this.drawHome.getHouseType().subscribe(data=>{
      this.houseType = data;
    });
  }


  calculateCost():void{
    this.drawHome.getMaterialVScost().subscribe(data=>{

      console.log(data);
      this.childMessage       = data;
      // this.materialVScostCustom   = data[0].custom;
      // this.materialVScostAdvanced = data[0].advanced;

      // this.parentMessageBasic     = data[0].basic;
      // this.parentMessageCustom    = data[0].custom;
      // this.parentMessageAdvanced  = data[0].advanced;
    })

    console.log(this.childMessage);
  }

  
}
