import { OnInit, OnDestroy, ElementRef } from '@angular/core';
import { ExtendedKeyboardEvent } from './hotkey.model';
import { HotkeysService } from './hotkeys.service';
import 'mousetrap';
import * as ɵngcc0 from '@angular/core';
export declare class HotkeysDirective implements OnInit, OnDestroy {
    private _hotkeysService;
    private _elementRef;
    hotkeys: {
        [combo: string]: (event: KeyboardEvent, combo: string) => ExtendedKeyboardEvent;
    }[];
    private mousetrap;
    private hotkeysList;
    private oldHotkeys;
    constructor(_hotkeysService: HotkeysService, _elementRef: ElementRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<HotkeysDirective, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<HotkeysDirective, "[hotkeys]", never, { "hotkeys": "hotkeys"; }, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG90a2V5cy5kaXJlY3RpdmUuZC50cyIsInNvdXJjZXMiOlsiaG90a2V5cy5kaXJlY3RpdmUuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT25Jbml0LCBPbkRlc3Ryb3ksIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRXh0ZW5kZWRLZXlib2FyZEV2ZW50IH0gZnJvbSAnLi9ob3RrZXkubW9kZWwnO1xyXG5pbXBvcnQgeyBIb3RrZXlzU2VydmljZSB9IGZyb20gJy4vaG90a2V5cy5zZXJ2aWNlJztcclxuaW1wb3J0ICdtb3VzZXRyYXAnO1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBIb3RrZXlzRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gICAgcHJpdmF0ZSBfaG90a2V5c1NlcnZpY2U7XHJcbiAgICBwcml2YXRlIF9lbGVtZW50UmVmO1xyXG4gICAgaG90a2V5czoge1xyXG4gICAgICAgIFtjb21ibzogc3RyaW5nXTogKGV2ZW50OiBLZXlib2FyZEV2ZW50LCBjb21ibzogc3RyaW5nKSA9PiBFeHRlbmRlZEtleWJvYXJkRXZlbnQ7XHJcbiAgICB9W107XHJcbiAgICBwcml2YXRlIG1vdXNldHJhcDtcclxuICAgIHByaXZhdGUgaG90a2V5c0xpc3Q7XHJcbiAgICBwcml2YXRlIG9sZEhvdGtleXM7XHJcbiAgICBjb25zdHJ1Y3RvcihfaG90a2V5c1NlcnZpY2U6IEhvdGtleXNTZXJ2aWNlLCBfZWxlbWVudFJlZjogRWxlbWVudFJlZik7XHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkO1xyXG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZDtcclxufVxyXG4iXX0=