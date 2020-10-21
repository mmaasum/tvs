import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tvs-middle-pane',
  templateUrl: './middle-pane.component.html',
  styleUrls: ['./middle-pane.component.css']
})
export class MiddlePaneComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}

  onOptionsSelected(value:number){
    // this.houseTypeLayoutModel = this.displayHouseTypeLayout.filter(x => x.houseTypeLayoutId === Number(value))[0]
  }

  saveData(): void{
    // this.loader.start();
    // const data = this.drawHomeEntryForm.getRawValue();
    // this.drawHome.saveDrawHome(data).subscribe(response => {
    //   this.displayHouseTypeLayout = response;
    //   console.log(this.displayHouseTypeLayout);
    //   this.loader.complete();
    // });
  }
}
