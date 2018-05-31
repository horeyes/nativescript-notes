"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var notes_1 = require("~/notes/models/notes");
var nativescript_angular_1 = require("nativescript-angular");
var notes_service_1 = require("~/notes/services/notes.service");
var angular_1 = require("nativescript-ui-sidedrawer/angular");
var note_date_form_1 = require("~/notes/models/note-date-form");
var moment = require("moment");
var OpenNoteComponent = /** @class */ (function () {
    function OpenNoteComponent(_routerExtensions, _notesService) {
        this._routerExtensions = _routerExtensions;
        this._notesService = _notesService;
        this.eventHandler = true;
        this._note = new notes_1.Notes();
        this._noteDateForm = new note_date_form_1.DateForm();
    }
    OpenNoteComponent.prototype.ngOnInit = function () {
        this._note = this._notesService.getNoteData();
        this._noteDateForm.day = this._note.date;
        this._noteDateForm.time = this._note.date;
    };
    OpenNoteComponent.prototype.ngAfterViewInit = function () {
        this.drawer = this.drawerComponent.sideDrawer;
    };
    OpenNoteComponent.prototype.drawerToggle = function () {
        this.eventHandler ? this.drawer.showDrawer() : this.drawer.closeDrawer();
    };
    OpenNoteComponent.prototype.onDrawerOpened = function () {
        this.onDrawerToggle();
        this.showDrawer = true;
    };
    OpenNoteComponent.prototype.onDrawerClosed = function () {
        this.onDrawerToggle();
        this.showDrawer = false;
    };
    OpenNoteComponent.prototype.onDrawerToggle = function () {
        this.eventHandler = !this.eventHandler;
    };
    OpenNoteComponent.prototype.onSwitchChange = function (args) {
        var switchState = args.object;
        this._note.hasDateChecked = switchState.checked;
    };
    OpenNoteComponent.prototype.goBack = function () {
        this._routerExtensions.navigate(['/notes'], {
            transition: {
                name: "slideBottom",
                duration: 100
            }
        });
        var noteReminderDate = moment(this._noteDateForm.day);
        var noteReminderTime = moment(this._noteDateForm.time);
        noteReminderDate.hour(noteReminderTime.hour()).minutes(noteReminderTime.minutes());
        this._note.date = new Date(noteReminderDate.format());
        this._notesService.editNote(this._note);
    };
    __decorate([
        core_1.ViewChild(angular_1.RadSideDrawerComponent),
        __metadata("design:type", angular_1.RadSideDrawerComponent)
    ], OpenNoteComponent.prototype, "drawerComponent", void 0);
    OpenNoteComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-open-note',
            templateUrl: './open-note.component.html',
            styleUrls: ['./open-note.component.css']
        }),
        __metadata("design:paramtypes", [nativescript_angular_1.RouterExtensions,
            notes_service_1.NotesService])
    ], OpenNoteComponent);
    return OpenNoteComponent;
}());
exports.OpenNoteComponent = OpenNoteComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3Blbi1ub3RlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm9wZW4tbm90ZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBNkQ7QUFDN0QsOENBQTZDO0FBQzdDLDZEQUF3RDtBQUN4RCxnRUFBOEQ7QUFHOUQsOERBQTRFO0FBQzVFLGdFQUF5RDtBQUV6RCwrQkFBaUM7QUFVakM7SUFRRSwyQkFBb0IsaUJBQW1DLEVBQzdDLGFBQTJCO1FBRGpCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBa0I7UUFDN0Msa0JBQWEsR0FBYixhQUFhLENBQWM7UUFIOUIsaUJBQVksR0FBWSxJQUFJLENBQUM7UUFJbEMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLGFBQUssRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSx5QkFBUSxFQUFFLENBQUM7SUFDdEMsQ0FBQztJQUVELG9DQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDOUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7UUFDekMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7SUFDNUMsQ0FBQztJQUVELDJDQUFlLEdBQWY7UUFDRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDO0lBQ2hELENBQUM7SUFFTSx3Q0FBWSxHQUFuQjtRQUNFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDM0UsQ0FBQztJQUVNLDBDQUFjLEdBQXJCO1FBQ0UsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO0lBQ3pCLENBQUM7SUFFTSwwQ0FBYyxHQUFyQjtRQUNFLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztJQUMxQixDQUFDO0lBRU8sMENBQWMsR0FBdEI7UUFDRSxJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQztJQUN6QyxDQUFDO0lBRU0sMENBQWMsR0FBckIsVUFBc0IsSUFBSTtRQUN4QixJQUFJLFdBQVcsR0FBVyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3RDLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxHQUFHLFdBQVcsQ0FBQyxPQUFPLENBQUM7SUFDbEQsQ0FBQztJQUVNLGtDQUFNLEdBQWI7UUFDRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDMUMsVUFBVSxFQUFFO2dCQUNWLElBQUksRUFBRSxhQUFhO2dCQUNuQixRQUFRLEVBQUUsR0FBRzthQUNkO1NBQ0YsQ0FBQyxDQUFDO1FBRUgsSUFBSSxnQkFBZ0IsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN0RCxJQUFJLGdCQUFnQixHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZELGdCQUFnQixDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO1FBQ25GLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7UUFDdEQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBRTFDLENBQUM7SUF0RGtDO1FBQWxDLGdCQUFTLENBQUMsZ0NBQXNCLENBQUM7a0NBQXlCLGdDQUFzQjs4REFBQztJQVB2RSxpQkFBaUI7UUFON0IsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsZUFBZTtZQUN6QixXQUFXLEVBQUUsNEJBQTRCO1lBQ3pDLFNBQVMsRUFBRSxDQUFDLDJCQUEyQixDQUFDO1NBQ3pDLENBQUM7eUNBU3VDLHVDQUFnQjtZQUM5Qiw0QkFBWTtPQVQxQixpQkFBaUIsQ0FnRTdCO0lBQUQsd0JBQUM7Q0FBQSxBQWhFRCxJQWdFQztBQWhFWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOb3RlcyB9IGZyb20gJ34vbm90ZXMvbW9kZWxzL25vdGVzJztcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhcic7XG5pbXBvcnQgeyBOb3Rlc1NlcnZpY2UgfSBmcm9tICd+L25vdGVzL3NlcnZpY2VzL25vdGVzLnNlcnZpY2UnO1xuaW1wb3J0IHsgUmFkU2lkZURyYXdlciB9IGZyb20gJ25hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyJztcbmltcG9ydCB7IFJhZExpc3RWaWV3Q29tcG9uZW50IH0gZnJvbSAnbmF0aXZlc2NyaXB0LXVpLWxpc3R2aWV3L2FuZ3VsYXInO1xuaW1wb3J0IHsgUmFkU2lkZURyYXdlckNvbXBvbmVudCB9IGZyb20gJ25hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyL2FuZ3VsYXInO1xuaW1wb3J0IHsgRGF0ZUZvcm0gfSBmcm9tICd+L25vdGVzL21vZGVscy9ub3RlLWRhdGUtZm9ybSc7XG5pbXBvcnQgeyBTd2l0Y2ggfSBmcm9tIFwidWkvc3dpdGNoXCI7XG5pbXBvcnQgKiBhcyBtb21lbnQgZnJvbSAnbW9tZW50JztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdhcHAtb3Blbi1ub3RlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL29wZW4tbm90ZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL29wZW4tbm90ZS5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgT3Blbk5vdGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIHByaXZhdGUgX25vdGU6IE5vdGVzO1xuICBwcml2YXRlIF9ub3RlRGF0ZUZvcm06IERhdGVGb3JtO1xuICBwcml2YXRlIGRyYXdlcjogUmFkU2lkZURyYXdlcjtcbiAgcHVibGljIHNob3dEcmF3ZXI6IGJvb2xlYW47XG4gIHB1YmxpYyBldmVudEhhbmRsZXI6IGJvb2xlYW4gPSB0cnVlO1xuICBAVmlld0NoaWxkKFJhZFNpZGVEcmF3ZXJDb21wb25lbnQpIHB1YmxpYyBkcmF3ZXJDb21wb25lbnQ6IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQ7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3JvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsXG4gICAgcHJpdmF0ZSBfbm90ZXNTZXJ2aWNlOiBOb3Rlc1NlcnZpY2UpIHtcbiAgICB0aGlzLl9ub3RlID0gbmV3IE5vdGVzKCk7XG4gICAgdGhpcy5fbm90ZURhdGVGb3JtID0gbmV3IERhdGVGb3JtKCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLl9ub3RlID0gdGhpcy5fbm90ZXNTZXJ2aWNlLmdldE5vdGVEYXRhKCk7XG4gICAgdGhpcy5fbm90ZURhdGVGb3JtLmRheSA9IHRoaXMuX25vdGUuZGF0ZTtcbiAgICB0aGlzLl9ub3RlRGF0ZUZvcm0udGltZSA9IHRoaXMuX25vdGUuZGF0ZTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLmRyYXdlciA9IHRoaXMuZHJhd2VyQ29tcG9uZW50LnNpZGVEcmF3ZXI7XG4gIH1cblxuICBwdWJsaWMgZHJhd2VyVG9nZ2xlKCkge1xuICAgIHRoaXMuZXZlbnRIYW5kbGVyID8gdGhpcy5kcmF3ZXIuc2hvd0RyYXdlcigpIDogdGhpcy5kcmF3ZXIuY2xvc2VEcmF3ZXIoKTtcbiAgfVxuXG4gIHB1YmxpYyBvbkRyYXdlck9wZW5lZCgpIHtcbiAgICB0aGlzLm9uRHJhd2VyVG9nZ2xlKCk7XG4gICAgdGhpcy5zaG93RHJhd2VyID0gdHJ1ZTtcbiAgfVxuXG4gIHB1YmxpYyBvbkRyYXdlckNsb3NlZCgpIHtcbiAgICB0aGlzLm9uRHJhd2VyVG9nZ2xlKCk7XG4gICAgdGhpcy5zaG93RHJhd2VyID0gZmFsc2U7XG4gIH1cblxuICBwcml2YXRlIG9uRHJhd2VyVG9nZ2xlKCkge1xuICAgIHRoaXMuZXZlbnRIYW5kbGVyID0gIXRoaXMuZXZlbnRIYW5kbGVyO1xuICB9XG5cbiAgcHVibGljIG9uU3dpdGNoQ2hhbmdlKGFyZ3MpIHtcbiAgICBsZXQgc3dpdGNoU3RhdGUgPSA8U3dpdGNoPmFyZ3Mub2JqZWN0O1xuICAgIHRoaXMuX25vdGUuaGFzRGF0ZUNoZWNrZWQgPSBzd2l0Y2hTdGF0ZS5jaGVja2VkO1xuICB9XG5cbiAgcHVibGljIGdvQmFjaygpIHtcbiAgICB0aGlzLl9yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFsnL25vdGVzJ10sIHtcbiAgICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgbmFtZTogXCJzbGlkZUJvdHRvbVwiLFxuICAgICAgICBkdXJhdGlvbjogMTAwXG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBsZXQgbm90ZVJlbWluZGVyRGF0ZSA9IG1vbWVudCh0aGlzLl9ub3RlRGF0ZUZvcm0uZGF5KTtcbiAgICBsZXQgbm90ZVJlbWluZGVyVGltZSA9IG1vbWVudCh0aGlzLl9ub3RlRGF0ZUZvcm0udGltZSk7XG4gICAgbm90ZVJlbWluZGVyRGF0ZS5ob3VyKG5vdGVSZW1pbmRlclRpbWUuaG91cigpKS5taW51dGVzKG5vdGVSZW1pbmRlclRpbWUubWludXRlcygpKTtcbiAgICB0aGlzLl9ub3RlLmRhdGUgPSBuZXcgRGF0ZShub3RlUmVtaW5kZXJEYXRlLmZvcm1hdCgpKTtcbiAgICB0aGlzLl9ub3Rlc1NlcnZpY2UuZWRpdE5vdGUodGhpcy5fbm90ZSk7XG5cbiAgfVxuXG5cbn1cbiJdfQ==