(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["ap-tab"] = factory();
	else
		root["ap-tab"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["ap-common"] = factory();
	else
		root["ap-common"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Model = (function () {
    function Model() {
    }
    Model.isArray = function (data) {
        return Array.isArray(data) || typeof data !== 'object' && /^\[(\d|[^[|,])/.test(data);
    };
    Model.isObject = function (data) {
        var type = typeof data;
        return type === 'function' || type === 'object' && !!data;
    };
    Model.getSearchItems = function (dataList, type) {
        if (!type)
            return;
        var key = Object.keys(type)[0];
        if (type === 'all') {
            return dataList;
        }
        else {
            return dataList.filter(function (data) {
                return (data[key] == type[key]);
            });
        }
    };
    Model.stringToNumber = function (data) {
        if (parseInt(data, 10) && /^\d|(^\-)/.test(data)) {
            return parseInt(data, 10);
        }
        else {
            return data;
        }
    };
    Model.stringToObjectCheck = function (data) {
        return /{.*:.*}/.test(data);
    };
    Model.stringToJson = function (data) {
        return JSON.parse(data
            .replace(/([\$\w]+)\s*:/g, function (_, $1) { return '"' + $1 + '":'; })
            .replace(/'([^']+)'/g, function (_, $1) { return '"' + $1 + '"'; }));
    };
    Model.stringToArray = function (data) {
        var _this = this;
        if (typeof data === 'string') {
            var splitList = data.replace(/^\[/g, '').replace(/\s+/g, '').replace(/\]$/g, '').split(","), newSplitList_1 = [];
            if (this.stringToObjectCheck(splitList)) {
                splitList.forEach(function (item) {
                    if (_this.stringToObjectCheck(item)) {
                        newSplitList_1.push(_this.stringToJson(item.trim()));
                    }
                    else {
                        newSplitList_1.push(_this.stringToNumber(item));
                    }
                });
                return newSplitList_1;
            }
            else {
                splitList.forEach(function (item) {
                    newSplitList_1.push(_this.stringToNumber(item));
                });
                return newSplitList_1;
            }
        }
        else {
            return data;
        }
    };
    Model.checkType = function (data) {
        switch (typeof data) {
            case 'object':
                return data;
            case 'number':
                return { id: data };
            case 'string':
                if (/^#/.test(data)) {
                    return { idName: data.substr(1) };
                }
                else if (/^\./.test(data)) {
                    return { className: data.substr(1) };
                }
                else if (/all/gi.test(data)) {
                    return 'all';
                }
                else if (this.stringToNumber(data)) {
                    return { id: data };
                }
                break;
        }
    };
    Model.search = function (dataList, type) {
        var _this = this;
        if (this.isArray(type)) {
            var keys_1 = [], searchItems_1 = [], resultItem_1 = [];
            this.stringToArray(type).forEach(function (item) {
                keys_1.push(_this.checkType(item));
            });
            keys_1.forEach(function (key) {
                searchItems_1 = _this.getSearchItems(dataList, key);
                searchItems_1.forEach(function (item) {
                    resultItem_1.push(item);
                });
            });
            return resultItem_1;
        }
        else {
            return this.getSearchItems(dataList, this.checkType(type));
        }
    };
    Model.uniq = function (stringArr) {
        var newArr = stringArr.filter(function (x, i, self) {
            return self.indexOf(x) === i;
        });
        return newArr;
    };
    Model.flattenArray = function (array) {
        return [].concat.apply(array);
    };
    Model.createTriggerModel = function (triggerView, triggerClass) {
        var triggerList = [];
        triggerView.forEach(function (trigger) {
            triggerList.push(triggerClass.fromData(trigger));
        });
        return triggerList;
    };
    Model.createTargetModel = function (targetView, targetClass) {
        var targetList = [];
        targetView.forEach(function (target) {
            targetList.push(targetClass.fromData(target));
        });
        return targetList;
    };
    Model.setTriggerTargetId = function (triggerList, targetList) {
        for (var i = 0; i < triggerList.length; i++) {
            triggerList[i].setTargetId(targetList);
        }
    };
    return Model;
}());
exports.Model = Model;
exports.default = Model;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _1 = __webpack_require__(0);
var View = (function () {
    function View() {
    }
    View.getFirstChildLastNode = function (child) {
        if (child.children.length > 0) {
            return this.getFirstChildLastNode(child.children[0]);
        }
        else {
            return child;
        }
    };
    View.createFromTriggerElement = function (selectors, trigger) {
        var triggerList = [], triggerViewList = [];
        selectors.forEach(function (selector) {
            triggerList.push(document.querySelectorAll(selector));
        });
        triggerList.forEach(function (nodeList) {
            for (var i = 0; i < nodeList.length; i++) {
                triggerViewList.push(trigger.fromData(nodeList[i]));
            }
        });
        return triggerViewList;
    };
    View.createTargetView = function (triggerList, target) {
        var selectors = this.getTargetSelectors(triggerList), targetNodeList = this.getTargetNodeList(selectors), createTargetList = this.createFromTargetsElement(targetNodeList, target);
        return this.getTargetViewList(createTargetList);
    };
    View.getTargetSelectors = function (triggerList) {
        var selectors = [];
        triggerList.forEach(function (trigger) {
            if (trigger.target) {
                selectors.push(trigger.target);
            }
        });
        return _1.default.uniq(selectors);
    };
    View.getTargetNodeList = function (selectors) {
        var targetNodeList = [];
        for (var i = 0; i < selectors.length; i++) {
            if (selectors[i] !== "all") {
                targetNodeList.push(document.querySelectorAll(selectors[i]));
            }
        }
        return targetNodeList;
    };
    View.createFromTargetsElement = function (targetList, target) {
        var targetViewList = [];
        targetList.forEach(function (nodeList) {
            for (var i = 0; i < nodeList.length; i++) {
                targetViewList.push(target.fromData({ node: nodeList[i] }));
            }
        });
        return targetViewList;
    };
    View.getTargetViewList = function (createTargetList) {
        var targetViewList = [];
        createTargetList.forEach(function (createTarget) {
            targetViewList.push(createTarget);
        });
        return targetViewList;
    };
    return View;
}());
exports.View = View;
exports.default = View;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(4));
__export(__webpack_require__(5));


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var e = eval, global = e('this');
var _1 = __webpack_require__(0);
var _2 = __webpack_require__(1);
var index_1 = __webpack_require__(2);
if (true) {
    module.exports.Model = _1.default;
    module.exports.View = _2.default;
    module.exports.Target = index_1.Target;
    module.exports.Trigger = index_1.Trigger;
}
if (typeof (global) !== 'undefined') {
    if (typeof global.AP === 'undefined') {
        Object.assign(global, { AP: {} });
    }
    if (typeof global.AP.common === 'undefined') {
        Object.assign(global.AP, { common: {} });
    }
    if (typeof global.AP.common.model === 'undefined') {
        Object.assign(global.AP.common, { model: _1.default });
    }
    if (typeof global.AP.common.view === 'undefined') {
        Object.assign(global.AP.common, { view: _2.default });
    }
}


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _created_target_num = 0;
var Target = (function () {
    function Target(id, idName, className, node) {
        this.id = id;
        this.idName = idName;
        this.className = className;
        this.node = node;
        this.id = this.createContentsId();
    }
    Target.fromData = function (data) {
        return new Target(0, data.node && data.node.id ? data.node.id : null, data.node && data.node.className ? data.node.className : null, data.node ? data.node : null);
    };
    Target.prototype.createContentsId = function () {
        return ++_created_target_num;
    };
    return Target;
}());
exports.Target = Target;
exports.default = Target;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _created_trigger_num = 0;
var Trigger = (function () {
    function Trigger(id, className, idName, target, node) {
        this.id = id;
        this.className = className;
        this.idName = idName;
        this.target = target;
        this.node = node;
        this.callBackFunction = function () { };
        this.id = this.createTriggerId();
    }
    Trigger.fromData = function (data) {
        return new Trigger(0, data.className ? data.className : null, data.id ? data.id : null, data.dataset.apToggle ? data.dataset.apToggle : null, data ? data : null);
    };
    Trigger.prototype.createTriggerId = function () {
        return ++_created_trigger_num;
    };
    Trigger.prototype.getItemNode = function () {
        return this.node;
    };
    return Trigger;
}());
exports.Trigger = Trigger;
exports.default = Trigger;


/***/ })
/******/ ]);
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var TargetItem = (function () {
    function TargetItem(id, parentId, className, idName, isShow, view) {
        this.id = id;
        this.parentId = parentId;
        this.className = className;
        this.idName = idName;
        this.isShow = isShow;
        this.view = view;
    }
    TargetItem.fromData = function (data) {
        return new TargetItem(data.id ? data.id : 1, data.parentId ? data.parentId : 1, data.className ? data.className : '', data.idName ? data.idName : '', data.isShow ? data.isShow : false, data ? data : null);
    };
    TargetItem.prototype.reset = function () {
        this.isShow = false;
        this.view.resetItem();
    };
    TargetItem.prototype.select = function () {
        this.isShow = true;
        this.view.selectItem();
    };
    return TargetItem;
}());
exports.TargetItem = TargetItem;
exports.default = TargetItem;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var TriggerItem = (function () {
    function TriggerItem(id, parentId, className, idName, itemNumber, isSelected, isDisable, view) {
        this.id = id;
        this.parentId = parentId;
        this.className = className;
        this.idName = idName;
        this.itemNumber = itemNumber;
        this.isSelected = isSelected;
        this.isDisable = isDisable;
        this.view = view;
    }
    TriggerItem.fromData = function (data) {
        return new TriggerItem(data.id ? data.id : 1, data.parentId ? data.parentId : 1, data.className ? data.className : '', data.idName ? data.idName : '', data.itemNumber ? data.itemNumber : 0, data.isSelected ? data.isSelected : false, data.isDisable ? data.isDisable : false, data ? data : null);
    };
    TriggerItem.prototype.reset = function () {
        this.isSelected = false;
        this.view.resetItem();
    };
    TriggerItem.prototype.select = function () {
        this.isSelected = true;
        this.view.selectItem();
    };
    return TriggerItem;
}());
exports.TriggerItem = TriggerItem;
exports.default = TriggerItem;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _1 = __webpack_require__(8);
var _2 = __webpack_require__(6);
var Tab = (function () {
    function Tab() {
        var _this = this;
        _2.default.fetchElements(function (data) {
            _this.model = _1.default.fromData(data);
        });
    }
    Tab.prototype.create = function (data) {
    };
    return Tab;
}());
exports.Tab = Tab;
exports.default = Tab;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _created_toggle_contents_num = 0;
var Target = (function () {
    function Target(id, idName, className, toggleClassName, node) {
        this.id = id;
        this.idName = idName;
        this.className = className;
        this.toggleClassName = toggleClassName;
        this.node = node;
        this._DEFAULT_TOGGLE_CLASS_NAME = 'active';
        this.id = this.createContentsId();
        if (!this.toggleClassName) {
            this.toggleClassName = this._DEFAULT_TOGGLE_CLASS_NAME;
        }
    }
    Target.fromData = function (data) {
        return new Target(0, data.node && data.node.id ? data.node.id : null, data.node && data.node.className ? data.node.className : null, data.toggleClassName ? data.toggleClassName : null, data.node ? data.node : null);
    };
    Target.prototype.createContentsId = function () {
        return ++_created_toggle_contents_num;
    };
    Target.prototype.toggleClass = function () {
        if (this.node.classList.contains(this.toggleClassName)) {
            this.node.classList.remove(this.toggleClassName);
        }
        else {
            this.node.classList.add(this.toggleClassName);
        }
    };
    Target.prototype.getItemNode = function (node) {
    };
    Target.prototype.toggle = function () {
        this.toggleClass();
    };
    return Target;
}());
exports.Target = Target;
exports.default = Target;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _created_toggle_trigger_num = 0;
var Trigger = (function () {
    function Trigger(id, className, idName, target, node) {
        this.id = id;
        this.className = className;
        this.idName = idName;
        this.target = target;
        this.node = node;
        this.toggleCallBackFunction = function () { };
        this.id = this.createTriggerId();
        this.setEventListener();
    }
    Trigger.fromData = function (data) {
        return new Trigger(0, data.className ? data.className : null, data.id ? data.id : null, data.dataset.apToggle ? data.dataset.apToggle : null, data ? data : null);
    };
    Trigger.prototype.createTriggerId = function () {
        return ++_created_toggle_trigger_num;
    };
    Trigger.prototype.setEventListener = function () {
        var _this = this;
        this.node.addEventListener('click', function (e) {
            e.preventDefault();
            _this.toggle(_this.toggleCallBackFunction);
        }, false);
    };
    Trigger.prototype.toggle = function (fn, isFirst) {
        this.toggleCallBackFunction = fn;
        if (!isFirst) {
            fn(this);
        }
    };
    Trigger.prototype.getItemNode = function (node) {
    };
    Trigger.prototype.resetSelectedClassName = function () {
    };
    return Trigger;
}());
exports.Trigger = Trigger;
exports.default = Trigger;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var APView = __webpack_require__(0).View;
var Trigger_1 = __webpack_require__(5);
var Target_1 = __webpack_require__(4);
var View = (function () {
    function View() {
    }
    View.fetchElements = function (callback) {
        document.addEventListener("DOMContentLoaded", function () {
            var triggerList = APView.createFromTriggerElement(['[data-ap-toggle]'], Trigger_1.default);
            callback({
                triggerList: triggerList,
                targetList: APView.createTargetView(triggerList, Target_1.default)
            });
        });
    };
    return View;
}());
exports.View = View;
exports.default = View;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var e = eval, global = e('this');
var _1 = __webpack_require__(3);
if (true) {
    module.exports = _1.default;
}
if (typeof (global) !== 'undefined') {
    if (typeof global.AP === 'undefined') {
        Object.assign(global, { AP: {} });
    }
    if (typeof global.AP.tab === 'undefined') {
        Object.assign(global.AP, { tab: new _1.default });
    }
}


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var APModel = __webpack_require__(0).Model;
var _1 = __webpack_require__(11);
var Model = (function () {
    function Model(targetList, triggerList) {
        this.targetList = targetList;
        this.triggerList = triggerList;
        this.setTriggerCallBack();
        this.setTriggerTargetId();
    }
    Model.fromData = function (data) {
        return new Model(data.targetList ? APModel.createTargetModel(data.targetList, _1.Target) : [], data.triggerList ? APModel.createTriggerModel(data.triggerList, _1.Trigger) : []);
    };
    Model.prototype.setTriggerCallBack = function () {
        var _this = this;
        this.triggerList.forEach(function (trigger) {
            var parent = trigger;
            trigger.items.forEach(function (item) {
                item.view.select(function (view) {
                    parent.select(view, _this.targetList);
                }, true);
            });
        });
    };
    Model.prototype.setTriggerTargetId = function () {
        for (var i = 0; i < this.triggerList.length; i++) {
            this.triggerList[i].setTargetId(this.targetList);
        }
    };
    Model.prototype.select = function (data) {
    };
    return Model;
}());
exports.Model = Model;
exports.default = Model;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var TargetItem_1 = __webpack_require__(1);
var Target = (function () {
    function Target(id, className, idName, items, selectedNumber, view) {
        this.id = id;
        this.className = className;
        this.idName = idName;
        this.items = items;
        this.selectedNumber = selectedNumber;
        this.view = view;
        this.items = this.createItem(this.items);
        this.items[this.selectedNumber - 1].select();
    }
    Target.fromData = function (data) {
        return new Target(data.id ? data.id : 1, data.className ? data.className : '', data.idName ? data.idName : '', data.items ? data.items : null, data.selectedNumber ? data.selectedNumber : 1, data ? data : null);
    };
    Target.prototype.createItem = function (items) {
        var itemModels = [];
        for (var i = 0; i < items.length; i++) {
            itemModels.push(TargetItem_1.default.fromData(items[i]));
        }
        return itemModels;
    };
    Target.prototype.selectItem = function (itemNumber) {
        this.selectedNumber = itemNumber;
        this.items[this.selectedNumber - 1].select();
    };
    Target.prototype.resetSelected = function () {
        this.items.forEach(function (item) {
            item.reset();
        });
    };
    Target.prototype.select = function (itemNumber) {
        this.resetSelected();
        this.selectItem(itemNumber);
    };
    return Target;
}());
exports.Target = Target;
exports.default = Target;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var APModel = __webpack_require__(0).Model;
var TriggerItem_1 = __webpack_require__(2);
var Trigger = (function () {
    function Trigger(id, className, idName, items, itemLength, selectedNumber, target, targetId, view) {
        this.id = id;
        this.className = className;
        this.idName = idName;
        this.items = items;
        this.itemLength = itemLength;
        this.selectedNumber = selectedNumber;
        this.target = target;
        this.targetId = targetId;
        this.view = view;
        this.items = this.createItem(this.items);
        this.items[selectedNumber - 1].select();
    }
    Trigger.fromData = function (data) {
        return new Trigger(data.id ? data.id : 1, data.className ? data.className : '', data.idName ? data.idName : '', data.items ? data.items : null, data.items.length, data.selectedNumber ? data.selectedNumber : 1, data.target ? data.target : null, data.targetId ? data.targetId : [], data ? data : null);
    };
    Trigger.prototype.createItem = function (items) {
        var itemModels = [];
        for (var i = 0; i < items.length; i++) {
            itemModels.push(TriggerItem_1.default.fromData(items[i]));
        }
        return itemModels;
    };
    Trigger.prototype.searchItem = function (id) {
        return this.items.filter(function (item) {
            return (item.id == id);
        })[0];
    };
    Trigger.prototype.setSelectedNumber = function (item) {
        this.selectedNumber = item.itemNumber;
    };
    Trigger.prototype.setTargetId = function (contentsViewList) {
        var searchContents = APModel.search(contentsViewList, this.target);
        if (searchContents) {
            for (var i = 0; i < searchContents.length; i++) {
                this.targetId.push(searchContents[i].id);
            }
        }
    };
    Trigger.prototype.select = function (selectItem, targetList) {
        if (selectItem.isDisable)
            return;
        this.selectItem(selectItem);
        for (var i = 0; i < this.targetId.length; i++) {
            for (var n = 0; n < targetList.length; n++) {
                if (targetList[n].id === this.targetId[i]) {
                    targetList[n].select(selectItem.itemNumber);
                }
            }
        }
    };
    Trigger.prototype.selectItem = function (selectItem) {
        this.resetSelected();
        this.setSelectedNumber(selectItem);
        this.items[selectItem.itemNumber - 1].select();
    };
    Trigger.prototype.resetSelected = function () {
        this.items.forEach(function (item) {
            item.reset();
        });
    };
    return Trigger;
}());
exports.Trigger = Trigger;
exports.default = Trigger;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(9));
__export(__webpack_require__(1));
__export(__webpack_require__(10));
__export(__webpack_require__(2));


/***/ })
/******/ ]);
});