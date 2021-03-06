"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var hotkeys_service_1 = require("./hotkeys.service");
var ɵngcc0 = require('@angular/core');
var ɵngcc1 = require('@angular/common');

function CheatSheetComponent_tr_6_span_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 8);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var key_r3 = ctx.$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(key_r3);
} }
function CheatSheetComponent_tr_6_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "tr");
    ɵngcc0.ɵɵelementStart(1, "td", 5);
    ɵngcc0.ɵɵtemplate(2, CheatSheetComponent_tr_6_span_2_Template, 2, 1, "span", 6);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(3, "td", 7);
    ɵngcc0.ɵɵtext(4);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var hotkey_r1 = ctx.$implicit;
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngForOf", hotkey_r1.formatted);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate(hotkey_r1.description);
} }
var _c0 = function (a0) { return { "in": a0 }; };
var CheatSheetComponent = (function () {
    function CheatSheetComponent(hotkeysService) {
        this.hotkeysService = hotkeysService;
        this.helpVisible = false;
        this.title = 'Keyboard Shortcuts:';
    }
    CheatSheetComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.hotkeysService.cheatSheetToggle.subscribe(function (isOpen) {
            if (isOpen !== false) {
                _this.hotkeys = _this.hotkeysService.hotkeys.filter(function (hotkey) { return hotkey.description; });
            }
            if (isOpen === false) {
                _this.helpVisible = false;
            }
            else {
                _this.toggleCheatSheet();
            }
        });
    };
    CheatSheetComponent.prototype.ngOnDestroy = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    CheatSheetComponent.prototype.toggleCheatSheet = function () {
        this.helpVisible = !this.helpVisible;
    };
CheatSheetComponent.ɵfac = function CheatSheetComponent_Factory(t) { return new (t || CheatSheetComponent)(ɵngcc0.ɵɵdirectiveInject(hotkeys_service_1.HotkeysService)); };
CheatSheetComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: CheatSheetComponent, selectors: [["hotkeys-cheatsheet"]], inputs: { title: "title" }, decls: 9, vars: 5, consts: [[1, "cfp-hotkeys-container", "fade", 2, "display", "none", 3, "ngClass"], [1, "cfp-hotkeys"], [1, "cfp-hotkeys-title"], [4, "ngFor", "ngForOf"], [1, "cfp-hotkeys-close", 3, "click"], [1, "cfp-hotkeys-keys"], ["class", "cfp-hotkeys-key", 4, "ngFor", "ngForOf"], [1, "cfp-hotkeys-text"], [1, "cfp-hotkeys-key"]], template: function CheatSheetComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "div", 1);
        ɵngcc0.ɵɵelementStart(2, "h4", 2);
        ɵngcc0.ɵɵtext(3);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(4, "table");
        ɵngcc0.ɵɵelementStart(5, "tbody");
        ɵngcc0.ɵɵtemplate(6, CheatSheetComponent_tr_6_Template, 5, 2, "tr", 3);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(7, "div", 4);
        ɵngcc0.ɵɵlistener("click", function CheatSheetComponent_Template_div_click_7_listener() { return ctx.toggleCheatSheet(); });
        ɵngcc0.ɵɵtext(8, "\u00D7");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(3, _c0, ctx.helpVisible));
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵtextInterpolate(ctx.title);
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.hotkeys);
    } }, directives: [ɵngcc1.NgClass, ɵngcc1.NgForOf], styles: [".cfp-hotkeys-container[_ngcontent-%COMP%] {\n  display: table !important;\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  color: #333;\n  font-size: 1em;\n  background-color: rgba(255,255,255,0.9);\n}\n\n.cfp-hotkeys-container.fade[_ngcontent-%COMP%] {\n  z-index: -1024;\n  visibility: hidden;\n  opacity: 0;\n  -webkit-transition: opacity 0.15s linear;\n  -moz-transition: opacity 0.15s linear;\n  -o-transition: opacity 0.15s linear;\n  transition: opacity 0.15s linear;\n}\n\n.cfp-hotkeys-container.fade.in[_ngcontent-%COMP%] {\n  z-index: 10002;\n  visibility: visible;\n  opacity: 1;\n}\n\n.cfp-hotkeys-title[_ngcontent-%COMP%] {\n  font-weight: bold;\n  text-align: center;\n  font-size: 1.2em;\n}\n\n.cfp-hotkeys[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: table-cell;\n  vertical-align: middle;\n}\n\n.cfp-hotkeys[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  margin: auto;\n  color: #333;\n}\n\n.cfp-content[_ngcontent-%COMP%] {\n  display: table-cell;\n  vertical-align: middle;\n}\n\n.cfp-hotkeys-keys[_ngcontent-%COMP%] {\n  padding: 5px;\n  text-align: right;\n}\n\n.cfp-hotkeys-key[_ngcontent-%COMP%] {\n  display: inline-block;\n  color: #fff;\n  background-color: #333;\n  border: 1px solid #333;\n  border-radius: 5px;\n  text-align: center;\n  margin-right: 5px;\n  box-shadow: inset 0 1px 0 #666, 0 1px 0 #bbb;\n  padding: 5px 9px;\n  font-size: 1em;\n}\n\n.cfp-hotkeys-text[_ngcontent-%COMP%] {\n  padding-left: 10px;\n  font-size: 1em;\n}\n\n.cfp-hotkeys-close[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 20px;\n  right: 20px;\n  font-size: 2em;\n  font-weight: bold;\n  padding: 5px 10px;\n  border: 1px solid #ddd;\n  border-radius: 5px;\n  min-height: 45px;\n  min-width: 45px;\n  text-align: center;\n}\n\n.cfp-hotkeys-close[_ngcontent-%COMP%]:hover {\n  background-color: #fff;\n  cursor: pointer;\n}\n\n@media all and (max-width: 500px) {\n  .cfp-hotkeys[_ngcontent-%COMP%] {\n    font-size: 0.8em;\n  }\n}\n\n@media all and (min-width: 750px) {\n  .cfp-hotkeys[_ngcontent-%COMP%] {\n    font-size: 1.2em;\n  }\n}"] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CheatSheetComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'hotkeys-cheatsheet',
                styles: ["\n.cfp-hotkeys-container {\n  display: table !important;\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  color: #333;\n  font-size: 1em;\n  background-color: rgba(255,255,255,0.9);\n}\n\n.cfp-hotkeys-container.fade {\n  z-index: -1024;\n  visibility: hidden;\n  opacity: 0;\n  -webkit-transition: opacity 0.15s linear;\n  -moz-transition: opacity 0.15s linear;\n  -o-transition: opacity 0.15s linear;\n  transition: opacity 0.15s linear;\n}\n\n.cfp-hotkeys-container.fade.in {\n  z-index: 10002;\n  visibility: visible;\n  opacity: 1;\n}\n\n.cfp-hotkeys-title {\n  font-weight: bold;\n  text-align: center;\n  font-size: 1.2em;\n}\n\n.cfp-hotkeys {\n  width: 100%;\n  height: 100%;\n  display: table-cell;\n  vertical-align: middle;\n}\n\n.cfp-hotkeys table {\n  margin: auto;\n  color: #333;\n}\n\n.cfp-content {\n  display: table-cell;\n  vertical-align: middle;\n}\n\n.cfp-hotkeys-keys {\n  padding: 5px;\n  text-align: right;\n}\n\n.cfp-hotkeys-key {\n  display: inline-block;\n  color: #fff;\n  background-color: #333;\n  border: 1px solid #333;\n  border-radius: 5px;\n  text-align: center;\n  margin-right: 5px;\n  box-shadow: inset 0 1px 0 #666, 0 1px 0 #bbb;\n  padding: 5px 9px;\n  font-size: 1em;\n}\n\n.cfp-hotkeys-text {\n  padding-left: 10px;\n  font-size: 1em;\n}\n\n.cfp-hotkeys-close {\n  position: fixed;\n  top: 20px;\n  right: 20px;\n  font-size: 2em;\n  font-weight: bold;\n  padding: 5px 10px;\n  border: 1px solid #ddd;\n  border-radius: 5px;\n  min-height: 45px;\n  min-width: 45px;\n  text-align: center;\n}\n\n.cfp-hotkeys-close:hover {\n  background-color: #fff;\n  cursor: pointer;\n}\n\n@media all and (max-width: 500px) {\n  .cfp-hotkeys {\n    font-size: 0.8em;\n  }\n}\n\n@media all and (min-width: 750px) {\n  .cfp-hotkeys {\n    font-size: 1.2em;\n  }\n}  "],
                template: "<div class=\"cfp-hotkeys-container fade\" [ngClass]=\"{'in': helpVisible}\" style=\"display:none\"><div class=\"cfp-hotkeys\">\n  <h4 class=\"cfp-hotkeys-title\">{{ title }}</h4>\n  <table><tbody>\n    <tr *ngFor=\"let hotkey of hotkeys\">\n      <td class=\"cfp-hotkeys-keys\">\n        <span *ngFor=\"let key of hotkey.formatted\" class=\"cfp-hotkeys-key\">{{ key }}</span>\n      </td>\n      <td class=\"cfp-hotkeys-text\">{{ hotkey.description }}</td>\n    </tr>\n  </tbody></table>\n  <div class=\"cfp-hotkeys-close\" (click)=\"toggleCheatSheet()\">&#215;</div>\n</div></div>"
            }]
    }], function () { return [{ type: hotkeys_service_1.HotkeysService }]; }, { title: [{
            type: core_1.Input
        }] }); })();
    return CheatSheetComponent;
}());
/** @nocollapse */
CheatSheetComponent.ctorParameters = function () { return [
    { type: hotkeys_service_1.HotkeysService, },
]; };
CheatSheetComponent.propDecorators = {
    'title': [{ type: core_1.Input },],
};
exports.CheatSheetComponent = CheatSheetComponent;

//# sourceMappingURL=cheatsheet.component.js.map