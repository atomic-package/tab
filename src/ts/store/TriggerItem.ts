/**
 * Tab ToggleItem Class
 * @public
 * @param option
 **/
export class TriggerItem {
    constructor(
        public id: number,
        public parentId: number,
        public className: string,
        public idName: string,
        public itemNumber: number,
        public isSelected: boolean,
        public isDisable: boolean,
        public view: any
    ) {
    }

    static fromData(data: any): TriggerItem {
        return new TriggerItem(
            data.id ? data.id : 1,
            data.parentId ? data.parentId : 1,
            data.className ? data.className : '',
            data.idName ? data.idName : '',
            data.itemNumber ? data.itemNumber : 0,
            data.isSelected ? data.isSelected : false,
            data.isDisable ? data.isDisable : false,
            data ? data : null
        );
    }

    public reset() {
        this.isSelected = false;
        this.view.resetItem();
    }

    public select() {
        this.isSelected = true;
        this.view.selectItem();
    }
}

export default TriggerItem;
