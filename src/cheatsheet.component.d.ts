import { OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { HotkeysService } from './hotkeys.service';
import { Hotkey } from './hotkey.model';
import * as ɵngcc0 from '@angular/core';
export declare class CheatSheetComponent implements OnInit, OnDestroy {
    private hotkeysService;
    helpVisible: boolean;
    title: string;
    subscription: Subscription;
    hotkeys: Hotkey[];
    constructor(hotkeysService: HotkeysService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    toggleCheatSheet(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CheatSheetComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<CheatSheetComponent, "hotkeys-cheatsheet", never, { "title": "title"; }, {}, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlYXRzaGVldC5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsiY2hlYXRzaGVldC5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgSG90a2V5c1NlcnZpY2UgfSBmcm9tICcuL2hvdGtleXMuc2VydmljZSc7XHJcbmltcG9ydCB7IEhvdGtleSB9IGZyb20gJy4vaG90a2V5Lm1vZGVsJztcclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQ2hlYXRTaGVldENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICAgIHByaXZhdGUgaG90a2V5c1NlcnZpY2U7XHJcbiAgICBoZWxwVmlzaWJsZTogYm9vbGVhbjtcclxuICAgIHRpdGxlOiBzdHJpbmc7XHJcbiAgICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcclxuICAgIGhvdGtleXM6IEhvdGtleVtdO1xyXG4gICAgY29uc3RydWN0b3IoaG90a2V5c1NlcnZpY2U6IEhvdGtleXNTZXJ2aWNlKTtcclxuICAgIG5nT25Jbml0KCk6IHZvaWQ7XHJcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkO1xyXG4gICAgdG9nZ2xlQ2hlYXRTaGVldCgpOiB2b2lkO1xyXG59XHJcbiJdfQ==