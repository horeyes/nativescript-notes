"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("nativescript-angular/forms");
var common_1 = require("nativescript-angular/common");
var notes_component_1 = require("~/notes/notes.component");
var notes_routing_1 = require("~/notes/notes.routing");
var angular_1 = require("nativescript-ui-listview/angular");
var nativescript_ng_shadow_1 = require("nativescript-ng-shadow");
var notes_service_1 = require("~/notes/services/notes.service");
var new_note_component_1 = require("~/notes/new-note/new-note.component");
var angular_2 = require("nativescript-ui-sidedrawer/angular");
var angular_3 = require("nativescript-ui-dataform/angular");
var open_note_component_1 = require("~/notes/open-note/open-note.component");
var calendar_component_1 = require("~/notes/calendar/calendar.component");
var angular_4 = require("nativescript-ui-calendar/angular");
var calendar_event_service_1 = require("~/notes/services/calendar-event.service");
var NotesModule = /** @class */ (function () {
    function NotesModule() {
    }
    NotesModule = __decorate([
        core_1.NgModule({
            providers: [
                notes_service_1.NotesService,
                calendar_event_service_1.CalendarEventsService
            ],
            imports: [
                forms_1.NativeScriptFormsModule,
                angular_1.NativeScriptUIListViewModule,
                angular_2.NativeScriptUISideDrawerModule,
                angular_4.NativeScriptUICalendarModule,
                angular_3.NativeScriptUIDataFormModule,
                notes_routing_1.NotesRoutingModule,
                common_1.NativeScriptCommonModule,
                nativescript_ng_shadow_1.NgShadowModule
            ],
            declarations: [
                notes_component_1.NotesComponent,
                new_note_component_1.NewNoteComponent,
                open_note_component_1.OpenNoteComponent,
                calendar_component_1.CalendarComponent
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], NotesModule);
    return NotesModule;
}());
exports.NotesModule = NotesModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90ZXMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibm90ZXMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJEO0FBRTNELG9EQUFxRTtBQUNyRSxzREFBdUU7QUFDdkUsMkRBQXlEO0FBQ3pELHVEQUEyRDtBQUMzRCw0REFBZ0Y7QUFDaEYsaUVBQXdEO0FBQ3hELGdFQUE4RDtBQUM5RCwwRUFBdUU7QUFDdkUsOERBQW9GO0FBQ3BGLDREQUFnRjtBQUNoRiw2RUFBMEU7QUFDMUUsMEVBQXdFO0FBQ3hFLDREQUFnRjtBQUNoRixrRkFBZ0Y7QUEyQmhGO0lBQUE7SUFBMkIsQ0FBQztJQUFmLFdBQVc7UUF6QnZCLGVBQVEsQ0FBQztZQUNOLFNBQVMsRUFBRTtnQkFDUCw0QkFBWTtnQkFDWiw4Q0FBcUI7YUFDeEI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsK0JBQXVCO2dCQUN2QixzQ0FBNEI7Z0JBQzVCLHdDQUE4QjtnQkFDOUIsc0NBQTRCO2dCQUM1QixzQ0FBNEI7Z0JBQzVCLGtDQUFrQjtnQkFDbEIsaUNBQXdCO2dCQUN4Qix1Q0FBYzthQUNqQjtZQUNELFlBQVksRUFBRTtnQkFDVixnQ0FBYztnQkFDZCxxQ0FBZ0I7Z0JBQ2hCLHVDQUFpQjtnQkFDakIsc0NBQWlCO2FBQ3BCO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHVCQUFnQjthQUNuQjtTQUNKLENBQUM7T0FDVyxXQUFXLENBQUk7SUFBRCxrQkFBQztDQUFBLEFBQTVCLElBQTRCO0FBQWYsa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlJztcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9jb21tb25cIjtcclxuaW1wb3J0IHsgTm90ZXNDb21wb25lbnQgfSBmcm9tICd+L25vdGVzL25vdGVzLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE5vdGVzUm91dGluZ01vZHVsZSB9IGZyb20gJ34vbm90ZXMvbm90ZXMucm91dGluZyc7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJTGlzdFZpZXdNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLWxpc3R2aWV3L2FuZ3VsYXJcIjtcclxuaW1wb3J0IHsgTmdTaGFkb3dNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtbmctc2hhZG93JztcclxuaW1wb3J0IHsgTm90ZXNTZXJ2aWNlIH0gZnJvbSAnfi9ub3Rlcy9zZXJ2aWNlcy9ub3Rlcy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTmV3Tm90ZUNvbXBvbmVudCB9IGZyb20gJ34vbm90ZXMvbmV3LW5vdGUvbmV3LW5vdGUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlTaWRlRHJhd2VyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyL2FuZ3VsYXJcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlEYXRhRm9ybU1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktZGF0YWZvcm0vYW5ndWxhclwiO1xyXG5pbXBvcnQgeyBPcGVuTm90ZUNvbXBvbmVudCB9IGZyb20gJ34vbm90ZXMvb3Blbi1ub3RlL29wZW4tbm90ZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDYWxlbmRhckNvbXBvbmVudCB9IGZyb20gJ34vbm90ZXMvY2FsZW5kYXIvY2FsZW5kYXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlDYWxlbmRhck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktY2FsZW5kYXIvYW5ndWxhclwiO1xyXG5pbXBvcnQgeyBDYWxlbmRhckV2ZW50c1NlcnZpY2UgfSBmcm9tICd+L25vdGVzL3NlcnZpY2VzL2NhbGVuZGFyLWV2ZW50LnNlcnZpY2UnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIE5vdGVzU2VydmljZSxcclxuICAgICAgICBDYWxlbmRhckV2ZW50c1NlcnZpY2VcclxuICAgIF0sXHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsXHJcbiAgICAgICAgTmF0aXZlU2NyaXB0VUlMaXN0Vmlld01vZHVsZSxcclxuICAgICAgICBOYXRpdmVTY3JpcHRVSVNpZGVEcmF3ZXJNb2R1bGUsXHJcbiAgICAgICAgTmF0aXZlU2NyaXB0VUlDYWxlbmRhck1vZHVsZSxcclxuICAgICAgICBOYXRpdmVTY3JpcHRVSURhdGFGb3JtTW9kdWxlLFxyXG4gICAgICAgIE5vdGVzUm91dGluZ01vZHVsZSxcclxuICAgICAgICBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUsXHJcbiAgICAgICAgTmdTaGFkb3dNb2R1bGVcclxuICAgIF0sXHJcbiAgICBkZWNsYXJhdGlvbnM6IFtcclxuICAgICAgICBOb3Rlc0NvbXBvbmVudCxcclxuICAgICAgICBOZXdOb3RlQ29tcG9uZW50LFxyXG4gICAgICAgIE9wZW5Ob3RlQ29tcG9uZW50LFxyXG4gICAgICAgIENhbGVuZGFyQ29tcG9uZW50XHJcbiAgICBdLFxyXG4gICAgc2NoZW1hczogW1xyXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE5vdGVzTW9kdWxlIHsgfSJdfQ==