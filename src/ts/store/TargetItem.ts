/**
 * Tab Target Item Model Class
 * @public
 * @param option
 **/
export class TargetItem {
    constructor(
        public id: number,
        public parentId: number,
        public className: string,
        public idName: string,
        public isShow: boolean,
        public view: any
    ) {
    }

    static fromData(data: any): TargetItem {
        return new TargetItem(
            data.id ? data.id : 1,
            data.parentId ? data.parentId : 1,
            data.className ? data.className : '',
            data.idName ? data.idName : '',
            data.isShow ? data.isShow : false,
            data ? data : null
        );
    }

    public reset() {
        this.isShow = false;
        this.view.resetItem();
    }


    public select() {
        this.isShow = true;
        this.view.selectItem();
    }

}

export default TargetItem;
