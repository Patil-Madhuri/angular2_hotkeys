/// <reference types="mousetrap" />
import { IHotkeyOptions } from './hotkey.options';
import { Subject } from 'rxjs';
import { Hotkey } from './hotkey.model';
import 'mousetrap';
import * as ɵngcc0 from '@angular/core';
import { MousetrapInstance } from 'mousetrap';
export declare class HotkeysService {
    private options;
    hotkeys: Hotkey[];
    pausedHotkeys: Hotkey[];
    mousetrap: MousetrapInstance;
    cheatSheetToggle: Subject<any>;
    private _preventIn;
    constructor(options: IHotkeyOptions);
    add(hotkey: Hotkey | Hotkey[], specificEvent?: string): Hotkey | Hotkey[];
    remove(hotkey?: Hotkey | Hotkey[]): Hotkey | Hotkey[];
    get(combo?: string | string[]): Hotkey | Hotkey[];
    pause(hotkey?: Hotkey | Hotkey[]): Hotkey | Hotkey[];
    unpause(hotkey?: Hotkey | Hotkey[]): Hotkey | Hotkey[];
    reset(): void;
    private findHotkey(hotkey);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<HotkeysService, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<HotkeysService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG90a2V5cy5zZXJ2aWNlLmQudHMiLCJzb3VyY2VzIjpbImhvdGtleXMuc2VydmljZS5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHR5cGVzPVwibW91c2V0cmFwXCIgLz5cclxuaW1wb3J0IHsgSUhvdGtleU9wdGlvbnMgfSBmcm9tICcuL2hvdGtleS5vcHRpb25zJztcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBIb3RrZXkgfSBmcm9tICcuL2hvdGtleS5tb2RlbCc7XHJcbmltcG9ydCAnbW91c2V0cmFwJztcclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgSG90a2V5c1NlcnZpY2Uge1xyXG4gICAgcHJpdmF0ZSBvcHRpb25zO1xyXG4gICAgaG90a2V5czogSG90a2V5W107XHJcbiAgICBwYXVzZWRIb3RrZXlzOiBIb3RrZXlbXTtcclxuICAgIG1vdXNldHJhcDogTW91c2V0cmFwSW5zdGFuY2U7XHJcbiAgICBjaGVhdFNoZWV0VG9nZ2xlOiBTdWJqZWN0PGFueT47XHJcbiAgICBwcml2YXRlIF9wcmV2ZW50SW47XHJcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zOiBJSG90a2V5T3B0aW9ucyk7XHJcbiAgICBhZGQoaG90a2V5OiBIb3RrZXkgfCBIb3RrZXlbXSwgc3BlY2lmaWNFdmVudD86IHN0cmluZyk6IEhvdGtleSB8IEhvdGtleVtdO1xyXG4gICAgcmVtb3ZlKGhvdGtleT86IEhvdGtleSB8IEhvdGtleVtdKTogSG90a2V5IHwgSG90a2V5W107XHJcbiAgICBnZXQoY29tYm8/OiBzdHJpbmcgfCBzdHJpbmdbXSk6IEhvdGtleSB8IEhvdGtleVtdO1xyXG4gICAgcGF1c2UoaG90a2V5PzogSG90a2V5IHwgSG90a2V5W10pOiBIb3RrZXkgfCBIb3RrZXlbXTtcclxuICAgIHVucGF1c2UoaG90a2V5PzogSG90a2V5IHwgSG90a2V5W10pOiBIb3RrZXkgfCBIb3RrZXlbXTtcclxuICAgIHJlc2V0KCk6IHZvaWQ7XHJcbiAgICBwcml2YXRlIGZpbmRIb3RrZXkoaG90a2V5KTtcclxufVxyXG4iXX0=