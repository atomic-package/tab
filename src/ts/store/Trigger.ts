const APModel = require('@atomic-package/common').Model;

// store
import Target from './Target';
import TriggerItem from './TriggerItem';

// component
import TriggerView from '../component/Trigger';

/**
 * Tab Trigger Model Class
 * @public
 * @param option
 **/
export class Trigger {
  constructor(
      public id: number,
      public className: string,
      public idName: string,
      public items: TriggerItem[],
      public itemLength: number,
      public selectedNumber: number,
      public target: any,
      public targetId: number[],
      public view: TriggerView
  ) {
    this.items = this.createItem(this.items);
    this.items[selectedNumber - 1].select();
  }

  /**
   * Static Function
   **/
  static fromData(data: any): Trigger {
    return new Trigger(
        data.id ? data.id : 1,
        data.className ? data.className : '',
        data.idName ? data.idName : '',
        data.items ? data.items : null,
        data.items.length,
        data.selectedNumber ? data.selectedNumber : 1,
        data.target ? data.target : null,
        data.targetId ? data.targetId : [],
        data ? data : null
    );
  }

  /**
   * Private Function
   **/
  private createItem(items) {
    let itemModels = [];

    for(let i: number = 0; i < items.length; i++) {
      itemModels.push(TriggerItem.fromData(items[i]));
    }

    return itemModels;
  }


  private searchItem(id: number) {
    return this.items.filter((item: any) => {
      return (item.id == id);
    })[0];
  }

  private setSelectedNumber(item: TriggerItem): void {
    this.selectedNumber = item.itemNumber;
  }

  /**
   * Public Function
   **/
  public setTargetId(contentsViewList: Target[]) {
    let searchContents: Target[] = APModel.search(contentsViewList, this.target);

    if(searchContents) {
      for (let i: number = 0; i < searchContents.length; i++) {
        this.targetId.push(searchContents[i].id);
      }
    }
  }

  public select(selectItem, targetList) {
    if(selectItem.isDisable) return;

    this.selectItem(selectItem);

    for(let i: number = 0; i < this.targetId.length; i++) {
      for(let n: number = 0; n < targetList.length; n++) {
        if(targetList[n].id === this.targetId[i]) {
          targetList[n].select(selectItem.itemNumber);
        }
      }
    }
  }

  public selectItem(selectItem) {
    this.resetSelected();
    this.setSelectedNumber(selectItem);
    this.items[selectItem.itemNumber - 1].select();
  }

  public resetSelected(): void {
    this.items.forEach((item: TriggerItem) => {
      item.reset();
    });
  }
}

export default Trigger;
