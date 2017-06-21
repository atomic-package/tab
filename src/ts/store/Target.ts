// store
import TargetItem from './TargetItem';

/**
 * Tab Target Model Class
 * @public
 * @param option
 **/
export class Target {
  constructor(
      public id: number,
      public className: string,
      public idName: string,
      public items: TargetItem[],
      public selectedNumber: number,
      public view: any
  ) {
    this.items = this.createItem(this.items);
    this.items[this.selectedNumber - 1].select();
  }

  static fromData(data: any): Target {
    return new Target(
        data.id ? data.id : 1,
        data.className ? data.className : '',
        data.idName ? data.idName : '',
        data.items ? data.items : null,
        data.selectedNumber ? data.selectedNumber : 1,
        data ? data : null
    );
  }

  /**
   * Private Function
   **/
  private createItem(items) {
    let itemModels = [];

    for(let i: number = 0; i < items.length; i++) {
      itemModels.push(TargetItem.fromData(items[i]));
    }
    return itemModels;
  }

  private selectItem(itemNumber: number) {
    this.selectedNumber = itemNumber;
    this.items[this.selectedNumber - 1].select();
  }

  public resetSelected(): void {
    this.items.forEach((item: TargetItem) => {
      item.reset();
    });
  }

  public select(itemNumber) {
    this.resetSelected();
    this.selectItem(itemNumber);
  }
}

export default Target;
