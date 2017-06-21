/*
 * Author: Daisuke Takayama
 */
'use strict';
let e = eval, global: NodeJS.Global = e('this');

import Tab from './controller/';

declare namespace NodeJS {
  interface Global {
    document: Document;
    window: Window;
    navigator: Navigator;
    AP: {
      tab: Tab
    };
  }
}

// npm & node
if (typeof module !== 'undefined') {
  module.exports = Tab;
}

// browser
if (typeof (global) !== 'undefined') {
  if (typeof global.AP === 'undefined') {
    Object.assign(global, { AP: {} });
  }

  if (typeof global.AP.tab === 'undefined') {
    Object.assign(global.AP, { tab: new Tab });
  }
}
