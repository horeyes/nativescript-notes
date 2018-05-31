"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var calendar_event_service_1 = require("~/notes/services/calendar-event.service");
var angular_1 = require("nativescript-ui-sidedrawer/angular");
var notes_service_1 = require("~/notes/services/notes.service");
var CalendarComponent = /** @class */ (function () {
    function CalendarComponent(_calendarService, _notesService) {
        this._calendarService = _calendarService;
        this._notesService = _notesService;
        this.eventHandler = true;
    }
    CalendarComponent.prototype.ngOnInit = function () {
        this._events = this._calendarService.getCalendarEvents(this._notesService.getNoteList());
    };
    CalendarComponent.prototype.ngAfterViewInit = function () {
        this.drawer = this.drawerComponent.sideDrawer;
    };
    CalendarComponent.prototype.drawerToggle = function () {
        this.eventHandler ? this.drawer.showDrawer() : this.drawer.closeDrawer();
    };
    CalendarComponent.prototype.onDrawerOpened = function () {
        this.onDrawerToggle();
        this.showDrawer = true;
    };
    CalendarComponent.prototype.onDrawerClosed = function () {
        this.onDrawerToggle();
        this.showDrawer = false;
    };
    CalendarComponent.prototype.onDrawerToggle = function () {
        this.eventHandler = !this.eventHandler;
    };
    Object.defineProperty(CalendarComponent.prototype, "eventSource", {
        get: function () {
            return this._events;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalendarComponent.prototype, "myItems", {
        get: function () {
            return this._listItems;
        },
        set: function (value) {
            this._listItems = value;
        },
        enumerable: true,
        configurable: true
    });
    CalendarComponent.prototype.onDateSelected = function (args) {
        var calendar = args.object;
        var date = args.date;
        var events = calendar.getEventsForDate(date);
        this.myItems = events;
    };
    __decorate([
        core_1.ViewChild(angular_1.RadSideDrawerComponent),
        __metadata("design:type", angular_1.RadSideDrawerComponent)
    ], CalendarComponent.prototype, "drawerComponent", void 0);
    CalendarComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-calendar',
            templateUrl: './calendar.component.html',
            styleUrls: ['./calendar.component.css']
        }),
        __metadata("design:paramtypes", [calendar_event_service_1.CalendarEventsService,
            notes_service_1.NotesService])
    ], CalendarComponent);
    return CalendarComponent;
}());
exports.CalendarComponent = CalendarComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2FsZW5kYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTZEO0FBRTdELGtGQUFnRjtBQUVoRiw4REFBNEU7QUFDNUUsZ0VBQThEO0FBUTlEO0lBT0UsMkJBQW9CLGdCQUF1QyxFQUNuRCxhQUEyQjtRQURmLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBdUI7UUFDbkQsa0JBQWEsR0FBYixhQUFhLENBQWM7UUFINUIsaUJBQVksR0FBWSxJQUFJLENBQUM7SUFJcEMsQ0FBQztJQUVELG9DQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7SUFDM0YsQ0FBQztJQUVELDJDQUFlLEdBQWY7UUFDRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDO0lBQ2hELENBQUM7SUFFTSx3Q0FBWSxHQUFuQjtRQUNFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDM0UsQ0FBQztJQUVNLDBDQUFjLEdBQXJCO1FBQ0UsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO0lBQ3pCLENBQUM7SUFFTSwwQ0FBYyxHQUFyQjtRQUNFLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztJQUMxQixDQUFDO0lBRU8sMENBQWMsR0FBdEI7UUFDRSxJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQztJQUN6QyxDQUFDO0lBR0Qsc0JBQUksMENBQVc7YUFBZjtZQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ3RCLENBQUM7OztPQUFBO0lBRUQsc0JBQUksc0NBQU87YUFBWDtZQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQ3pCLENBQUM7YUFFRCxVQUFZLEtBQUs7WUFDZixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztRQUMxQixDQUFDOzs7T0FKQTtJQU1ELDBDQUFjLEdBQWQsVUFBZSxJQUFnQztRQUM3QyxJQUFJLFFBQVEsR0FBZ0IsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUN4QyxJQUFJLElBQUksR0FBUyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQzNCLElBQUksTUFBTSxHQUF5QixRQUFRLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbkUsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7SUFDeEIsQ0FBQztJQWpEa0M7UUFBbEMsZ0JBQVMsQ0FBQyxnQ0FBc0IsQ0FBQztrQ0FBeUIsZ0NBQXNCOzhEQUFDO0lBTnZFLGlCQUFpQjtRQU43QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxjQUFjO1lBQ3hCLFdBQVcsRUFBRSwyQkFBMkI7WUFDeEMsU0FBUyxFQUFFLENBQUMsMEJBQTBCLENBQUM7U0FDeEMsQ0FBQzt5Q0FRc0MsOENBQXFCO1lBQ3BDLDRCQUFZO09BUnhCLGlCQUFpQixDQXlEN0I7SUFBRCx3QkFBQztDQUFBLEFBekRELElBeURDO0FBekRZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENhbGVuZGFyRXZlbnQsIENhbGVuZGFyU2VsZWN0aW9uRXZlbnREYXRhLCBSYWRDYWxlbmRhciB9IGZyb20gJ25hdGl2ZXNjcmlwdC11aS1jYWxlbmRhcidcbmltcG9ydCB7IENhbGVuZGFyRXZlbnRzU2VydmljZSB9IGZyb20gJ34vbm90ZXMvc2VydmljZXMvY2FsZW5kYXItZXZlbnQuc2VydmljZSc7XG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyIH0gZnJvbSAnbmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXInO1xuaW1wb3J0IHsgUmFkU2lkZURyYXdlckNvbXBvbmVudCB9IGZyb20gJ25hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyL2FuZ3VsYXInO1xuaW1wb3J0IHsgTm90ZXNTZXJ2aWNlIH0gZnJvbSAnfi9ub3Rlcy9zZXJ2aWNlcy9ub3Rlcy5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnYXBwLWNhbGVuZGFyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NhbGVuZGFyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY2FsZW5kYXIuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIENhbGVuZGFyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHJpdmF0ZSBfZXZlbnRzOiBBcnJheTxDYWxlbmRhckV2ZW50PjtcbiAgcHJpdmF0ZSBfbGlzdEl0ZW1zOiBBcnJheTxDYWxlbmRhckV2ZW50PjtcbiAgcHJpdmF0ZSBkcmF3ZXI6IFJhZFNpZGVEcmF3ZXI7XG4gIHB1YmxpYyBzaG93RHJhd2VyOiBib29sZWFuO1xuICBwdWJsaWMgZXZlbnRIYW5kbGVyOiBib29sZWFuID0gdHJ1ZTtcbiAgQFZpZXdDaGlsZChSYWRTaWRlRHJhd2VyQ29tcG9uZW50KSBwdWJsaWMgZHJhd2VyQ29tcG9uZW50OiBSYWRTaWRlRHJhd2VyQ29tcG9uZW50O1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9jYWxlbmRhclNlcnZpY2U6IENhbGVuZGFyRXZlbnRzU2VydmljZSwgXG4gIHByaXZhdGUgX25vdGVzU2VydmljZTogTm90ZXNTZXJ2aWNlKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLl9ldmVudHMgPSB0aGlzLl9jYWxlbmRhclNlcnZpY2UuZ2V0Q2FsZW5kYXJFdmVudHModGhpcy5fbm90ZXNTZXJ2aWNlLmdldE5vdGVMaXN0KCkpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMuZHJhd2VyID0gdGhpcy5kcmF3ZXJDb21wb25lbnQuc2lkZURyYXdlcjtcbiAgfVxuXG4gIHB1YmxpYyBkcmF3ZXJUb2dnbGUoKSB7XG4gICAgdGhpcy5ldmVudEhhbmRsZXIgPyB0aGlzLmRyYXdlci5zaG93RHJhd2VyKCkgOiB0aGlzLmRyYXdlci5jbG9zZURyYXdlcigpO1xuICB9XG5cbiAgcHVibGljIG9uRHJhd2VyT3BlbmVkKCkge1xuICAgIHRoaXMub25EcmF3ZXJUb2dnbGUoKTtcbiAgICB0aGlzLnNob3dEcmF3ZXIgPSB0cnVlO1xuICB9XG5cbiAgcHVibGljIG9uRHJhd2VyQ2xvc2VkKCkge1xuICAgIHRoaXMub25EcmF3ZXJUb2dnbGUoKTtcbiAgICB0aGlzLnNob3dEcmF3ZXIgPSBmYWxzZTtcbiAgfVxuXG4gIHByaXZhdGUgb25EcmF3ZXJUb2dnbGUoKSB7XG4gICAgdGhpcy5ldmVudEhhbmRsZXIgPSAhdGhpcy5ldmVudEhhbmRsZXI7XG4gIH1cblxuXG4gIGdldCBldmVudFNvdXJjZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fZXZlbnRzO1xuICB9XG5cbiAgZ2V0IG15SXRlbXMoKTogQXJyYXk8Q2FsZW5kYXJFdmVudD4ge1xuICAgIHJldHVybiB0aGlzLl9saXN0SXRlbXM7XG4gIH1cblxuICBzZXQgbXlJdGVtcyh2YWx1ZSkge1xuICAgIHRoaXMuX2xpc3RJdGVtcyA9IHZhbHVlO1xuICB9XG5cbiAgb25EYXRlU2VsZWN0ZWQoYXJnczogQ2FsZW5kYXJTZWxlY3Rpb25FdmVudERhdGEpIHtcbiAgICB2YXIgY2FsZW5kYXI6IFJhZENhbGVuZGFyID0gYXJncy5vYmplY3Q7XG4gICAgdmFyIGRhdGU6IERhdGUgPSBhcmdzLmRhdGU7XG4gICAgdmFyIGV2ZW50czogQXJyYXk8Q2FsZW5kYXJFdmVudD4gPSBjYWxlbmRhci5nZXRFdmVudHNGb3JEYXRlKGRhdGUpO1xuICAgIHRoaXMubXlJdGVtcyA9IGV2ZW50cztcbiAgfVxuXG59XG4iXX0=