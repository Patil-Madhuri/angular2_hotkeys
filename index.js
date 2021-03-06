"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var hotkeys_directive_1 = require("./src/hotkeys.directive");
var cheatsheet_component_1 = require("./src/cheatsheet.component");
var hotkey_options_1 = require("./src/hotkey.options");
var hotkeys_service_1 = require("./src/hotkeys.service");
__export(require("./src/cheatsheet.component"));
__export(require("./src/hotkey.model"));
__export(require("./src/hotkey.options"));
__export(require("./src/hotkeys.directive"));
__export(require("./src/hotkeys.service"));
var ɵngcc0 = require('@angular/core');
var ɵngcc1 = require('./src/hotkeys.directive');
var ɵngcc2 = require('./src/cheatsheet.component');
var ɵngcc3 = require('@angular/common');
var HotkeyModule = (function () {
    function HotkeyModule() {
    }
    HotkeyModule.forRoot = function (options) {
        if (options === void 0) { options = {}; }
        return {
            ngModule: HotkeyModule,
            providers: [
                hotkeys_service_1.HotkeysService,
                { provide: hotkey_options_1.HotkeyOptions, useValue: options }
            ]
        };
    };
HotkeyModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: HotkeyModule });
HotkeyModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function HotkeyModule_Factory(t) { return new (t || HotkeyModule)(); }, imports: [[common_1.CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(HotkeyModule, { declarations: [ɵngcc1.HotkeysDirective, ɵngcc2.CheatSheetComponent], imports: [ɵngcc3.CommonModule], exports: [ɵngcc1.HotkeysDirective, ɵngcc2.CheatSheetComponent] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(HotkeyModule, [{
        type: core_1.NgModule,
        args: [{
                imports: [common_1.CommonModule],
                exports: [hotkeys_directive_1.HotkeysDirective, cheatsheet_component_1.CheatSheetComponent],
                declarations: [hotkeys_directive_1.HotkeysDirective, cheatsheet_component_1.CheatSheetComponent]
            }]
    }], function () { return []; }, null); })();
    return HotkeyModule;
}());
/** @nocollapse */
HotkeyModule.ctorParameters = function () { return []; };
exports.HotkeyModule = HotkeyModule;

//# sourceMappingURL=index.js.map