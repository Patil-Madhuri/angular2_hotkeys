"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var hotkey_options_1 = require("./hotkey.options");
var rxjs_1 = require("rxjs");
var core_1 = require("@angular/core");
var hotkey_model_1 = require("./hotkey.model");
require("mousetrap");
var ɵngcc0 = require('@angular/core');
var HotkeysService = (function () {
    function HotkeysService(options) {
        this.options = options;
        this.hotkeys = [];
        this.pausedHotkeys = [];
        this.cheatSheetToggle = new rxjs_1.Subject();
        this._preventIn = ['INPUT', 'SELECT', 'TEXTAREA'];
        Mousetrap.prototype.stopCallback = function (event, element, combo, callback) {
            // if the element has the class "mousetrap" then no need to stop
            if ((' ' + element.className + ' ').indexOf(' mousetrap ') > -1) {
                return false;
            }
            return (element.contentEditable && element.contentEditable === 'true');
        };
        this.mousetrap = new Mousetrap();
        if (!this.options.disableCheatSheet) {
            this.add(new hotkey_model_1.Hotkey(this.options.cheatSheetHotkey || '?', function (event) {
                this.cheatSheetToggle.next();
            }.bind(this), [], this.options.cheatSheetDescription || 'Show / hide this help menu'));
        }
        if (this.options.cheatSheetCloseEsc) {
            this.add(new hotkey_model_1.Hotkey('esc', function (event) {
                this.cheatSheetToggle.next(false);
            }.bind(this), ['HOTKEYS-CHEATSHEET'], this.options.cheatSheetCloseEscDescription || 'Hide this help menu'));
        }
    }
    HotkeysService.prototype.add = function (hotkey, specificEvent) {
        var _this = this;
        if (Array.isArray(hotkey)) {
            var temp = [];
            for (var _i = 0, hotkey_1 = hotkey; _i < hotkey_1.length; _i++) {
                var key = hotkey_1[_i];
                temp.push(this.add(key, specificEvent));
            }
            return temp;
        }
        this.remove(hotkey);
        this.hotkeys.push(hotkey);
        this.mousetrap.bind(hotkey.combo, function (event, combo) {
            var shouldExecute = true;
            // if the callback is executed directly `hotkey.get('w').callback()`
            // there will be no event, so just execute the callback.
            if (event) {
                var target = (event.target || event.srcElement); // srcElement is IE only
                var nodeName = target.nodeName.toUpperCase();
                // check if the input has a mousetrap class, and skip checking preventIn if so
                if ((' ' + target.className + ' ').indexOf(' mousetrap ') > -1) {
                    shouldExecute = true;
                }
                else if (_this._preventIn.indexOf(nodeName) > -1 && hotkey.allowIn.map(function (allow) { return allow.toUpperCase(); }).indexOf(nodeName) === -1) {
                    // don't execute callback if the event was fired from inside an element listed in preventIn but not in allowIn
                    shouldExecute = false;
                }
            }
            if (shouldExecute) {
                return hotkey.callback.apply(_this, [event, combo]);
            }
        }, specificEvent);
        return hotkey;
    };
    HotkeysService.prototype.remove = function (hotkey) {
        var temp = [];
        if (!hotkey) {
            for (var _i = 0, _a = this.hotkeys; _i < _a.length; _i++) {
                var key = _a[_i];
                temp.push(this.remove(key));
            }
            return temp;
        }
        if (Array.isArray(hotkey)) {
            for (var _b = 0, hotkey_2 = hotkey; _b < hotkey_2.length; _b++) {
                var key = hotkey_2[_b];
                temp.push(this.remove(key));
            }
            return temp;
        }
        var index = this.findHotkey(hotkey);
        if (index > -1) {
            this.hotkeys.splice(index, 1);
            this.mousetrap.unbind(hotkey.combo);
            return hotkey;
        }
        return null;
    };
    HotkeysService.prototype.get = function (combo) {
        if (!combo) {
            return this.hotkeys;
        }
        if (Array.isArray(combo)) {
            var temp = [];
            for (var _i = 0, combo_1 = combo; _i < combo_1.length; _i++) {
                var key = combo_1[_i];
                temp.push(this.get(key));
            }
            return temp;
        }
        for (var i = 0; i < this.hotkeys.length; i++) {
            if (this.hotkeys[i].combo.indexOf(combo) > -1) {
                return this.hotkeys[i];
            }
        }
        return null;
    };
    HotkeysService.prototype.pause = function (hotkey) {
        if (!hotkey) {
            return this.pause(this.hotkeys);
        }
        if (Array.isArray(hotkey)) {
            var temp = [];
            for (var _i = 0, hotkey_3 = hotkey; _i < hotkey_3.length; _i++) {
                var key = hotkey_3[_i];
                temp.push(this.pause(key));
            }
            return temp;
        }
        this.remove(hotkey);
        this.pausedHotkeys.push(hotkey);
        return hotkey;
    };
    HotkeysService.prototype.unpause = function (hotkey) {
        if (!hotkey) {
            return this.unpause(this.pausedHotkeys);
        }
        if (Array.isArray(hotkey)) {
            var temp = [];
            for (var _i = 0, hotkey_4 = hotkey; _i < hotkey_4.length; _i++) {
                var key = hotkey_4[_i];
                temp.push(this.unpause(key));
            }
            return temp;
        }
        var index = this.pausedHotkeys.indexOf(hotkey);
        if (index > -1) {
            this.add(hotkey);
            return this.pausedHotkeys.splice(index, 1);
        }
        return null;
    };
    HotkeysService.prototype.reset = function () {
        this.mousetrap.reset();
    };
    HotkeysService.prototype.findHotkey = function (hotkey) {
        return this.hotkeys.indexOf(hotkey);
    };
HotkeysService.ɵfac = function HotkeysService_Factory(t) { return new (t || HotkeysService)(ɵngcc0.ɵɵinject(hotkey_options_1.HotkeyOptions)); };
HotkeysService.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: HotkeysService, factory: function (t) { return HotkeysService.ɵfac(t); } });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(HotkeysService, [{
        type: core_1.Injectable
    }], function () { return [{ type: undefined, decorators: [{
                type: core_1.Inject,
                args: [hotkey_options_1.HotkeyOptions]
            }] }]; }, null); })();
    return HotkeysService;
}());
/** @nocollapse */
HotkeysService.ctorParameters = function () { return [
    { type: undefined, decorators: [{ type: core_1.Inject, args: [hotkey_options_1.HotkeyOptions,] },] },
]; };
exports.HotkeysService = HotkeysService;

//# sourceMappingURL=hotkeys.service.js.map