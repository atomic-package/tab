/*
 * Author: Daisuke Takayama
 */
const APView = require('@atomic-package/common').View;

import Trigger from './Trigger';
import Target from './Target';

/**
 * Toggle View Class
 * @public
 * @param option
 **/
export class View {
  /**
   * Static Function
   **/
  static fetchElements(callback) {
    document.addEventListener("DOMContentLoaded", () => {
      let triggerList = APView.createFromTriggerElement(['[data-ap-toggle]'], Trigger);

      callback({
        triggerList: triggerList,
        targetList: APView.createTargetView(triggerList, Target)
      });
    });
  }
}

export default View;
