export class HouseTypeModel {
    houseTypeId: number;
    houseTypeName: string;
    

    constructor(houseType?) {
        houseType = houseType || {};

        this.houseTypeId = houseType.houseTypeId || 0;
        this.houseTypeName = houseType.houseTypeName || '';
        
        
      }
}