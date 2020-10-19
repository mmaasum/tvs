export class MaterialVScostModel {
  item              : number;
  quantity          : number;
  cost              : number;
    

    constructor(materialVScost?) {
        materialVScost = materialVScost || {};

        this.item                = materialVScost.item || 0;
        this.quantity            = materialVScost.quantity || 0;
        this.cost                = materialVScost.cost || 0;
        
      }
}