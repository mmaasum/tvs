export class HouseTypeLayoutModel {
    
    // houseTypeLayoutId     : number;
    houseTypeId           : number;
    userId                : number;
    layoutName            : number
    width                 : number;
    length                : number;
    floorThickness        : number;
    wallThickness         : number;
    wallHeight            : number;
    nbFloors              : number;
    roofHeight            : number;
    roofThickness         : number;
    roofTopLength         : number;
    roofBottomLength      : number;

    constructor(houseTypeLayout?) {

      // this.houseTypeLayoutId= houseTypeLayout.houseTypeLayoutId || 0;
      houseTypeLayout       = houseTypeLayout || {};
      this.houseTypeId      = houseTypeLayout.houseTypeId || 0;
      this.userId           = houseTypeLayout.userId || 0;
      this.layoutName       = houseTypeLayout.layoutName || '';
      this.width            = houseTypeLayout.width || 13;
      this.length           = houseTypeLayout.length || 15;
      this.floorThickness   = houseTypeLayout.floorThickness || .5;
      this.wallThickness    = houseTypeLayout.wallThickness || .4;
      this.wallHeight       = houseTypeLayout.wallHeight || 17;
      this.nbFloors         = houseTypeLayout.nbFloors || 0;
      this.roofHeight       = houseTypeLayout.roofHeight || 13;
      this.roofThickness    = houseTypeLayout.roofThickness || .3;
      this.roofTopLength    = houseTypeLayout.roofTopLength || 0;
      this.roofBottomLength = houseTypeLayout.roofBottomLength || 0;
        
    }
}