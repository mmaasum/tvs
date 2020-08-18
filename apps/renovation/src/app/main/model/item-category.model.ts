
export class ItemcategoryModel {
    itemCategoryId: number;
    itemCategoryName: string;
    parentId: number;

    constructor(itemcategory?) {
        itemcategory = itemcategory || {};
        this.itemCategoryId = itemcategory.itemCategoryId || 0;
        this.itemCategoryName = itemcategory.itemCategoryName || '';
        this.parentId = itemcategory.parentId || 0;
      }
}