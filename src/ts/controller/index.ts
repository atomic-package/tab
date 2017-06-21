/*
 * Author: Daisuke Takayama
 */
import Model from '../model/';
import View from '../component/';

/**
 * Tab Controller Class
 * @public
 * @param option
 **/
export class Tab {
    private model: Model;

    constructor() {
        View.fetchElements((data) => {
            this.model = Model.fromData(data);
        });
    }

    /**
     * Public Function
     **/
    public create(data: any): void {
    }
}


export default Tab;
