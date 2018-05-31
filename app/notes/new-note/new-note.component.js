"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var notes_1 = require("~/notes/models/notes");
var nativescript_angular_1 = require("nativescript-angular");
var notes_service_1 = require("~/notes/services/notes.service");
var angular_1 = require("nativescript-ui-sidedrawer/angular");
var note_date_form_1 = require("~/notes/models/note-date-form");
var moment = require("moment");
var NewNoteComponent = /** @class */ (function () {
    function NewNoteComponent(_routerExtensions, _notesService) {
        this._routerExtensions = _routerExtensions;
        this._notesService = _notesService;
        this.eventHandler = true;
        this._note = new notes_1.Notes();
        this._noteDateForm = new note_date_form_1.DateForm();
    }
    NewNoteComponent.prototype.ngOnInit = function () { };
    NewNoteComponent.prototype.ngAfterViewInit = function () {
        this.drawer = this.drawerComponent.sideDrawer;
    };
    NewNoteComponent.prototype.drawerToggle = function () {
        this.eventHandler ? this.drawer.showDrawer() : this.drawer.closeDrawer();
    };
    NewNoteComponent.prototype.onDrawerOpened = function () {
        this.onDrawerToggle();
        this.showDrawer = true;
    };
    NewNoteComponent.prototype.onDrawerClosed = function () {
        this.onDrawerToggle();
        this.showDrawer = false;
    };
    NewNoteComponent.prototype.onDrawerToggle = function () {
        this.eventHandler = !this.eventHandler;
    };
    NewNoteComponent.prototype.onSwitchChange = function (args) {
        var switchState = args.object;
        this._note.hasDateChecked = switchState.checked;
    };
    NewNoteComponent.prototype.goBack = function () {
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
        this._notesService.addNewNote(this._note);
    };
    __decorate([
        core_1.ViewChild(angular_1.RadSideDrawerComponent),
        __metadata("design:type", angular_1.RadSideDrawerComponent)
    ], NewNoteComponent.prototype, "drawerComponent", void 0);
    NewNoteComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-new-note',
            templateUrl: './new-note.component.html',
            styleUrls: ['./new-note.component.css']
        }),
        __metadata("design:paramtypes", [nativescript_angular_1.RouterExtensions,
            notes_service_1.NotesService])
    ], NewNoteComponent);
    return NewNoteComponent;
}());
exports.NewNoteComponent = NewNoteComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3LW5vdGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmV3LW5vdGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTZEO0FBQzdELDhDQUE2QztBQUM3Qyw2REFBd0Q7QUFDeEQsZ0VBQThEO0FBRzlELDhEQUE0RTtBQUM1RSxnRUFBeUQ7QUFFekQsK0JBQWlDO0FBUWpDO0lBUUUsMEJBQW9CLGlCQUFtQyxFQUM3QyxhQUEyQjtRQURqQixzQkFBaUIsR0FBakIsaUJBQWlCLENBQWtCO1FBQzdDLGtCQUFhLEdBQWIsYUFBYSxDQUFjO1FBSDlCLGlCQUFZLEdBQVksSUFBSSxDQUFDO1FBSWxDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxhQUFLLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUkseUJBQVEsRUFBRSxDQUFDO0lBQ3RDLENBQUM7SUFFRCxtQ0FBUSxHQUFSLGNBQWEsQ0FBQztJQUVkLDBDQUFlLEdBQWY7UUFDRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDO0lBQ2hELENBQUM7SUFFTSx1Q0FBWSxHQUFuQjtRQUNFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDM0UsQ0FBQztJQUVNLHlDQUFjLEdBQXJCO1FBQ0UsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO0lBQ3pCLENBQUM7SUFFTSx5Q0FBYyxHQUFyQjtRQUNFLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztJQUMxQixDQUFDO0lBRU8seUNBQWMsR0FBdEI7UUFDRSxJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQztJQUN6QyxDQUFDO0lBRU0seUNBQWMsR0FBckIsVUFBc0IsSUFBSTtRQUN4QixJQUFJLFdBQVcsR0FBVyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3RDLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxHQUFHLFdBQVcsQ0FBQyxPQUFPLENBQUM7SUFDbEQsQ0FBQztJQUVNLGlDQUFNLEdBQWI7UUFDRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDMUMsVUFBVSxFQUFFO2dCQUNWLElBQUksRUFBRSxhQUFhO2dCQUNuQixRQUFRLEVBQUUsR0FBRzthQUNkO1NBQ0YsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxnQkFBZ0IsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN0RCxJQUFJLGdCQUFnQixHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZELGdCQUFnQixDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO1FBQ25GLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7UUFDdEQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFoRGtDO1FBQWxDLGdCQUFTLENBQUMsZ0NBQXNCLENBQUM7a0NBQXlCLGdDQUFzQjs2REFBQztJQVB2RSxnQkFBZ0I7UUFONUIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsY0FBYztZQUN4QixXQUFXLEVBQUUsMkJBQTJCO1lBQ3hDLFNBQVMsRUFBRSxDQUFDLDBCQUEwQixDQUFDO1NBQ3hDLENBQUM7eUNBU3VDLHVDQUFnQjtZQUM5Qiw0QkFBWTtPQVQxQixnQkFBZ0IsQ0F3RDVCO0lBQUQsdUJBQUM7Q0FBQSxBQXhERCxJQXdEQztBQXhEWSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOb3RlcyB9IGZyb20gJ34vbm90ZXMvbW9kZWxzL25vdGVzJztcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhcic7XG5pbXBvcnQgeyBOb3Rlc1NlcnZpY2UgfSBmcm9tICd+L25vdGVzL3NlcnZpY2VzL25vdGVzLnNlcnZpY2UnO1xuaW1wb3J0IHsgUmFkU2lkZURyYXdlciB9IGZyb20gJ25hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyJztcbmltcG9ydCB7IFJhZExpc3RWaWV3Q29tcG9uZW50IH0gZnJvbSAnbmF0aXZlc2NyaXB0LXVpLWxpc3R2aWV3L2FuZ3VsYXInO1xuaW1wb3J0IHsgUmFkU2lkZURyYXdlckNvbXBvbmVudCB9IGZyb20gJ25hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyL2FuZ3VsYXInO1xuaW1wb3J0IHsgRGF0ZUZvcm0gfSBmcm9tICd+L25vdGVzL21vZGVscy9ub3RlLWRhdGUtZm9ybSc7XG5pbXBvcnQgeyBTd2l0Y2ggfSBmcm9tIFwidWkvc3dpdGNoXCI7XG5pbXBvcnQgKiBhcyBtb21lbnQgZnJvbSAnbW9tZW50JztcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnYXBwLW5ldy1ub3RlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL25ldy1ub3RlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbmV3LW5vdGUuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIE5ld05vdGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIHByaXZhdGUgX25vdGU6IE5vdGVzO1xuICBwcml2YXRlIF9ub3RlRGF0ZUZvcm06IERhdGVGb3JtO1xuICBwcml2YXRlIGRyYXdlcjogUmFkU2lkZURyYXdlcjtcbiAgcHVibGljIHNob3dEcmF3ZXI6IGJvb2xlYW47XG4gIHB1YmxpYyBldmVudEhhbmRsZXI6IGJvb2xlYW4gPSB0cnVlO1xuICBAVmlld0NoaWxkKFJhZFNpZGVEcmF3ZXJDb21wb25lbnQpIHB1YmxpYyBkcmF3ZXJDb21wb25lbnQ6IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQ7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3JvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsXG4gICAgcHJpdmF0ZSBfbm90ZXNTZXJ2aWNlOiBOb3Rlc1NlcnZpY2UpIHtcbiAgICB0aGlzLl9ub3RlID0gbmV3IE5vdGVzKCk7XG4gICAgdGhpcy5fbm90ZURhdGVGb3JtID0gbmV3IERhdGVGb3JtKCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHsgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLmRyYXdlciA9IHRoaXMuZHJhd2VyQ29tcG9uZW50LnNpZGVEcmF3ZXI7XG4gIH1cblxuICBwdWJsaWMgZHJhd2VyVG9nZ2xlKCkge1xuICAgIHRoaXMuZXZlbnRIYW5kbGVyID8gdGhpcy5kcmF3ZXIuc2hvd0RyYXdlcigpIDogdGhpcy5kcmF3ZXIuY2xvc2VEcmF3ZXIoKTtcbiAgfVxuXG4gIHB1YmxpYyBvbkRyYXdlck9wZW5lZCgpIHtcbiAgICB0aGlzLm9uRHJhd2VyVG9nZ2xlKCk7XG4gICAgdGhpcy5zaG93RHJhd2VyID0gdHJ1ZTtcbiAgfVxuXG4gIHB1YmxpYyBvbkRyYXdlckNsb3NlZCgpIHtcbiAgICB0aGlzLm9uRHJhd2VyVG9nZ2xlKCk7XG4gICAgdGhpcy5zaG93RHJhd2VyID0gZmFsc2U7XG4gIH1cblxuICBwcml2YXRlIG9uRHJhd2VyVG9nZ2xlKCkge1xuICAgIHRoaXMuZXZlbnRIYW5kbGVyID0gIXRoaXMuZXZlbnRIYW5kbGVyO1xuICB9XG5cbiAgcHVibGljIG9uU3dpdGNoQ2hhbmdlKGFyZ3MpIHtcbiAgICBsZXQgc3dpdGNoU3RhdGUgPSA8U3dpdGNoPmFyZ3Mub2JqZWN0O1xuICAgIHRoaXMuX25vdGUuaGFzRGF0ZUNoZWNrZWQgPSBzd2l0Y2hTdGF0ZS5jaGVja2VkO1xuICB9XG5cbiAgcHVibGljIGdvQmFjaygpIHtcbiAgICB0aGlzLl9yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFsnL25vdGVzJ10sIHtcbiAgICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgbmFtZTogXCJzbGlkZUJvdHRvbVwiLFxuICAgICAgICBkdXJhdGlvbjogMTAwXG4gICAgICB9XG4gICAgfSk7XG4gICAgbGV0IG5vdGVSZW1pbmRlckRhdGUgPSBtb21lbnQodGhpcy5fbm90ZURhdGVGb3JtLmRheSk7XG4gICAgbGV0IG5vdGVSZW1pbmRlclRpbWUgPSBtb21lbnQodGhpcy5fbm90ZURhdGVGb3JtLnRpbWUpO1xuICAgIG5vdGVSZW1pbmRlckRhdGUuaG91cihub3RlUmVtaW5kZXJUaW1lLmhvdXIoKSkubWludXRlcyhub3RlUmVtaW5kZXJUaW1lLm1pbnV0ZXMoKSk7XG4gICAgdGhpcy5fbm90ZS5kYXRlID0gbmV3IERhdGUobm90ZVJlbWluZGVyRGF0ZS5mb3JtYXQoKSk7XG4gICAgdGhpcy5fbm90ZXNTZXJ2aWNlLmFkZE5ld05vdGUodGhpcy5fbm90ZSk7XG4gIH1cbn1cbiJdfQ==