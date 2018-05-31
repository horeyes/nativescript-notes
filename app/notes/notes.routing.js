"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var notes_component_1 = require("~/notes/notes.component");
var new_note_component_1 = require("~/notes/new-note/new-note.component");
var open_note_component_1 = require("~/notes/open-note/open-note.component");
var calendar_component_1 = require("~/notes/calendar/calendar.component");
var routes = [
    {
        path: '',
        component: notes_component_1.NotesComponent
    },
    {
        path: 'new-note',
        component: new_note_component_1.NewNoteComponent
    },
    {
        path: 'open-note',
        component: open_note_component_1.OpenNoteComponent
    },
    {
        path: 'calendar',
        component: calendar_component_1.CalendarComponent
    }
];
var NotesRoutingModule = /** @class */ (function () {
    function NotesRoutingModule() {
    }
    NotesRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forChild(routes)],
            exports: [router_1.NativeScriptRouterModule]
        })
    ], NotesRoutingModule);
    return NotesRoutingModule;
}());
exports.NotesRoutingModule = NotesRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90ZXMucm91dGluZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5vdGVzLnJvdXRpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBb0Q7QUFFcEQsc0RBQXVFO0FBQ3ZFLDJEQUF5RDtBQUN6RCwwRUFBdUU7QUFDdkUsNkVBQTBFO0FBQzFFLDBFQUF3RTtBQUV4RSxJQUFNLE1BQU0sR0FBVztJQUNuQjtRQUNJLElBQUksRUFBRSxFQUFFO1FBQ1IsU0FBUyxFQUFFLGdDQUFjO0tBQzVCO0lBQ0Q7UUFDSSxJQUFJLEVBQUUsVUFBVTtRQUNoQixTQUFTLEVBQUUscUNBQWdCO0tBQzlCO0lBQ0Q7UUFDSSxJQUFJLEVBQUUsV0FBVztRQUNqQixTQUFTLEVBQUUsdUNBQWlCO0tBQy9CO0lBQ0Q7UUFDSSxJQUFJLEVBQUUsVUFBVTtRQUNoQixTQUFTLEVBQUUsc0NBQWlCO0tBQy9CO0NBQ0osQ0FBQztBQU1GO0lBQUE7SUFBa0MsQ0FBQztJQUF0QixrQkFBa0I7UUFKOUIsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFLENBQUMsaUNBQXdCLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3BELE9BQU8sRUFBRSxDQUFDLGlDQUF3QixDQUFDO1NBQ3RDLENBQUM7T0FDVyxrQkFBa0IsQ0FBSTtJQUFELHlCQUFDO0NBQUEsQUFBbkMsSUFBbUM7QUFBdEIsZ0RBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IE5vdGVzQ29tcG9uZW50IH0gZnJvbSAnfi9ub3Rlcy9ub3Rlcy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOZXdOb3RlQ29tcG9uZW50IH0gZnJvbSAnfi9ub3Rlcy9uZXctbm90ZS9uZXctbm90ZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBPcGVuTm90ZUNvbXBvbmVudCB9IGZyb20gJ34vbm90ZXMvb3Blbi1ub3RlL29wZW4tbm90ZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDYWxlbmRhckNvbXBvbmVudCB9IGZyb20gJ34vbm90ZXMvY2FsZW5kYXIvY2FsZW5kYXIuY29tcG9uZW50JztcclxuXHJcbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xyXG4gICAge1xyXG4gICAgICAgIHBhdGg6ICcnLFxyXG4gICAgICAgIGNvbXBvbmVudDogTm90ZXNDb21wb25lbnRcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgcGF0aDogJ25ldy1ub3RlJyxcclxuICAgICAgICBjb21wb25lbnQ6IE5ld05vdGVDb21wb25lbnRcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgcGF0aDogJ29wZW4tbm90ZScsXHJcbiAgICAgICAgY29tcG9uZW50OiBPcGVuTm90ZUNvbXBvbmVudFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBwYXRoOiAnY2FsZW5kYXInLFxyXG4gICAgICAgIGNvbXBvbmVudDogQ2FsZW5kYXJDb21wb25lbnRcclxuICAgIH1cclxuXTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBpbXBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcyldLFxyXG4gICAgZXhwb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIE5vdGVzUm91dGluZ01vZHVsZSB7IH0iXX0=