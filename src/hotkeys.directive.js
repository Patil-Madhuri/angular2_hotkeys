"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var hotkey_model_1 = require("./hotkey.model");
var hotkeys_service_1 = require("./hotkeys.service");
require("mousetrap");
var ɵngcc0 = require('@angular/core');
var HotkeysDirective = (function () {
    function HotkeysDirective(_hotkeysService, _elementRef) {
        this._hotkeysService = _hotkeysService;
        this._elementRef = _elementRef;
        this.hotkeysList = [];
        this.oldHotkeys = [];
        this.mousetrap = new Mousetrap(this._elementRef.nativeElement); // Bind hotkeys to the current element (and any children)
    }
    HotkeysDirective.prototype.ngOnInit = function () {
        for (var _i = 0, _a = this.hotkeys; _i < _a.length; _i++) {
            var hotkey = _a[_i];
            var combo = Object.keys(hotkey)[0];
            var hotkeyObj = new hotkey_model_1.Hotkey(combo, hotkey[combo]);
            var oldHotkey = this._hotkeysService.get(combo);
            if (oldHotkey !== null) {
                this.oldHotkeys.push(oldHotkey);
                this._hotkeysService.remove(oldHotkey);
            }
            this.hotkeysList.push(hotkeyObj);
            this.mousetrap.bind(hotkeyObj.combo, hotkeyObj.callback);
        }
    };
    HotkeysDirective.prototype.ngOnDestroy = function () {
        for (var _i = 0, _a = this.hotkeysList; _i < _a.length; _i++) {
            var hotkey = _a[_i];
            this.mousetrap.unbind(hotkey.combo);
        }
        this._hotkeysService.add(this.oldHotkeys);
    };
HotkeysDirective.ɵfac = function HotkeysDirective_Factory(t) { return new (t || HotkeysDirective)(ɵngcc0.ɵɵdirectiveInject(hotkeys_service_1.HotkeysService), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
HotkeysDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: HotkeysDirective, selectors: [["", "hotkeys", ""]], inputs: { hotkeys: "hotkeys" }, features: [ɵngcc0.ɵɵProvidersFeature([hotkeys_service_1.HotkeysService])] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(HotkeysDirective, [{
        type: core_1.Directive,
        args: [{
                selector: '[hotkeys]',
                providers: [hotkeys_service_1.HotkeysService]
            }]
    }], function () { return [{ type: hotkeys_service_1.HotkeysService }, { type: ɵngcc0.ElementRef }]; }, { hotkeys: [{
            type: core_1.Input
        }] }); })();
    return HotkeysDirective;
}());
/** @nocollapse */
HotkeysDirective.ctorParameters = function () { return [
    { type: hotkeys_service_1.HotkeysService, },
    { type: core_1.ElementRef, },
]; };
HotkeysDirective.propDecorators = {
    'hotkeys': [{ type: core_1.Input },],
};
exports.HotkeysDirective = HotkeysDirective;

//# sourceMappingURL=hotkeys.directive.js.map