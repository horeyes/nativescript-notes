"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_ng_shadow_1 = require("nativescript-ng-shadow");
var nativescript_angular_1 = require("nativescript-angular");
var notes_service_1 = require("~/notes/services/notes.service");
var angular_1 = require("nativescript-ui-sidedrawer/angular");
var NotesComponent = /** @class */ (function () {
    function NotesComponent(_routerExtensions, _notesService) {
        this._routerExtensions = _routerExtensions;
        this._notesService = _notesService;
        this._notesList = [];
        this.isSelecting = false;
        this.fontSize = 16;
        this.eventHandler = true;
        this._elevation = nativescript_ng_shadow_1.Elevation.BOTTOM_NAVIGATION_BAR;
        this._notesList = this._notesService.getNoteList();
    }
    NotesComponent.prototype.ngOnInit = function () {
    };
    NotesComponent.prototype.ngAfterViewInit = function () {
        this.drawer = this.drawerComponent.sideDrawer;
    };
    NotesComponent.prototype.drawerToggle = function () {
        this.eventHandler ? this.drawer.showDrawer() : this.drawer.closeDrawer();
    };
    NotesComponent.prototype.onDrawerOpened = function () {
        this.onDrawerToggle();
        this.showDrawer = true;
    };
    NotesComponent.prototype.onDrawerClosed = function () {
        this.onDrawerToggle();
        this.showDrawer = false;
    };
    NotesComponent.prototype.onDrawerToggle = function () {
        this.eventHandler = !this.eventHandler;
    };
    Object.defineProperty(NotesComponent.prototype, "dataItems", {
        get: function () {
            return this._notesList;
        },
        enumerable: true,
        configurable: true
    });
    NotesComponent.prototype.goToNewNoteView = function () {
        this._routerExtensions.navigate(['/notes/new-note'], {
            transition: {
                name: "slideTop",
                duration: 100
            }
        });
        this.isSelecting = false;
        this._notesList.forEach(function (x) { return x.isSelected = false; });
    };
    NotesComponent.prototype.select = function (id) {
        if (!this.isSelecting) {
            this.goToOpenNoteView(id);
        }
        else {
            this._notesList.find(function (x) { return x.noteId == id; }).isSelected = !this._notesList.find(function (x) { return x.noteId == id; }).isSelected;
            if (this._notesList.filter(function (x) { return x.isSelected === true; }).length <= 0) {
                this.isSelecting = false;
            }
        }
    };
    NotesComponent.prototype.goToOpenNoteView = function (id) {
        this._routerExtensions.navigate(['/notes/open-note'], {
            transition: {
                name: "slideTop",
                duration: 100
            }
        });
        this._notesService.setNoteData(id);
        this.isSelecting = false;
        this._notesList.forEach(function (x) { return x.isSelected = false; });
    };
    NotesComponent.prototype.startSelection = function (id) {
        this._notesList.find(function (x) { return x.noteId == id; }).isSelected = !this._notesList.find(function (x) { return x.noteId == id; }).isSelected;
        if (this._notesList.filter(function (x) { return x.isSelected === true; }).length > 0) {
            this.isSelecting = true;
        }
        else {
            this.isSelecting = false;
        }
    };
    NotesComponent.prototype.cancel = function () {
        this.isSelecting = false;
        this._notesList.forEach(function (x) { return x.isSelected = false; });
    };
    NotesComponent.prototype.delete = function () {
        this.isSelecting = false;
        this._notesList = this._notesList.filter(function (x) { return x.isSelected != true; });
        this._notesService.deleteNotesFromService(this._notesList);
    };
    __decorate([
        core_1.ViewChild(angular_1.RadSideDrawerComponent),
        __metadata("design:type", angular_1.RadSideDrawerComponent)
    ], NotesComponent.prototype, "drawerComponent", void 0);
    NotesComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-notes',
            templateUrl: './notes.component.html',
            styleUrls: ['./notes.component.css']
        }),
        __metadata("design:paramtypes", [nativescript_angular_1.RouterExtensions,
            notes_service_1.NotesService])
    ], NotesComponent);
    return NotesComponent;
}());
exports.NotesComponent = NotesComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90ZXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibm90ZXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTZEO0FBRzdELGlFQUFtRDtBQUNuRCw2REFBd0Q7QUFFeEQsZ0VBQThEO0FBRTlELDhEQUE0RTtBQVE1RTtJQVdFLHdCQUFvQixpQkFBbUMsRUFDN0MsYUFBMkI7UUFEakIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFrQjtRQUM3QyxrQkFBYSxHQUFiLGFBQWEsQ0FBYztRQVY3QixlQUFVLEdBQVksRUFBRSxDQUFDO1FBQzFCLGdCQUFXLEdBQVksS0FBSyxDQUFDO1FBQzdCLGFBQVEsR0FBVyxFQUFFLENBQUM7UUFJdEIsaUJBQVksR0FBWSxJQUFJLENBQUM7UUFLbEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxrQ0FBUyxDQUFDLHFCQUFxQixDQUFDO1FBQ2xELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNyRCxDQUFDO0lBRUQsaUNBQVEsR0FBUjtJQUNBLENBQUM7SUFFRCx3Q0FBZSxHQUFmO1FBQ0UsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQztJQUNoRCxDQUFDO0lBRU0scUNBQVksR0FBbkI7UUFDRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQzNFLENBQUM7SUFFTSx1Q0FBYyxHQUFyQjtRQUNFLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztJQUN6QixDQUFDO0lBRU0sdUNBQWMsR0FBckI7UUFDRSxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdEIs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b3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZUFycmF5IH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGUtYXJyYXkvb2JzZXJ2YWJsZS1hcnJheSc7XG5pbXBvcnQgeyBOb3RlcyB9IGZyb20gJ34vbm90ZXMvbW9kZWxzL25vdGVzJztcbmltcG9ydCB7IEVsZXZhdGlvbiB9IGZyb20gJ25hdGl2ZXNjcmlwdC1uZy1zaGFkb3cnO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyJztcbmltcG9ydCB7IHRyYW5zaXRpb24gfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcbmltcG9ydCB7IE5vdGVzU2VydmljZSB9IGZyb20gJ34vbm90ZXMvc2VydmljZXMvbm90ZXMuc2VydmljZSc7XG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyIH0gZnJvbSAnbmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXInO1xuaW1wb3J0IHsgUmFkU2lkZURyYXdlckNvbXBvbmVudCB9IGZyb20gJ25hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyL2FuZ3VsYXInO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdhcHAtbm90ZXMnLFxuICB0ZW1wbGF0ZVVybDogJy4vbm90ZXMuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9ub3Rlcy5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTm90ZXNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBwcml2YXRlIF9lbGV2YXRpb246IG51bWJlcjtcbiAgcHJpdmF0ZSBfbm90ZXNMaXN0OiBOb3Rlc1tdID0gW107XG4gIHB1YmxpYyBpc1NlbGVjdGluZzogYm9vbGVhbiA9IGZhbHNlO1xuICBwdWJsaWMgZm9udFNpemU6IG51bWJlciA9IDE2O1xuXG4gIHByaXZhdGUgZHJhd2VyOiBSYWRTaWRlRHJhd2VyO1xuICBwdWJsaWMgc2hvd0RyYXdlcjogYm9vbGVhbjtcbiAgcHVibGljIGV2ZW50SGFuZGxlcjogYm9vbGVhbiA9IHRydWU7XG4gIEBWaWV3Q2hpbGQoUmFkU2lkZURyYXdlckNvbXBvbmVudCkgcHVibGljIGRyYXdlckNvbXBvbmVudDogUmFkU2lkZURyYXdlckNvbXBvbmVudDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9yb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLFxuICAgIHByaXZhdGUgX25vdGVzU2VydmljZTogTm90ZXNTZXJ2aWNlKSB7XG4gICAgdGhpcy5fZWxldmF0aW9uID0gRWxldmF0aW9uLkJPVFRPTV9OQVZJR0FUSU9OX0JBUjtcbiAgICB0aGlzLl9ub3Rlc0xpc3QgPSB0aGlzLl9ub3Rlc1NlcnZpY2UuZ2V0Tm90ZUxpc3QoKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMuZHJhd2VyID0gdGhpcy5kcmF3ZXJDb21wb25lbnQuc2lkZURyYXdlcjtcbiAgfVxuXG4gIHB1YmxpYyBkcmF3ZXJUb2dnbGUoKSB7XG4gICAgdGhpcy5ldmVudEhhbmRsZXIgPyB0aGlzLmRyYXdlci5zaG93RHJhd2VyKCkgOiB0aGlzLmRyYXdlci5jbG9zZURyYXdlcigpO1xuICB9XG5cbiAgcHVibGljIG9uRHJhd2VyT3BlbmVkKCkge1xuICAgIHRoaXMub25EcmF3ZXJUb2dnbGUoKTtcbiAgICB0aGlzLnNob3dEcmF3ZXIgPSB0cnVlO1xuICB9XG5cbiAgcHVibGljIG9uRHJhd2VyQ2xvc2VkKCkge1xuICAgIHRoaXMub25EcmF3ZXJUb2dnbGUoKTtcbiAgICB0aGlzLnNob3dEcmF3ZXIgPSBmYWxzZTtcbiAgfVxuXG4gIHByaXZhdGUgb25EcmF3ZXJUb2dnbGUoKSB7XG4gICAgdGhpcy5ldmVudEhhbmRsZXIgPSAhdGhpcy5ldmVudEhhbmRsZXI7XG4gIH1cblxuICBnZXQgZGF0YUl0ZW1zKCkge1xuICAgIHJldHVybiB0aGlzLl9ub3Rlc0xpc3Q7XG4gIH1cblxuICBwdWJsaWMgZ29Ub05ld05vdGVWaWV3KCkge1xuICAgIHRoaXMuX3JvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoWycvbm90ZXMvbmV3LW5vdGUnXSwge1xuICAgICAgdHJhbnNpdGlvbjoge1xuICAgICAgICBuYW1lOiBcInNsaWRlVG9wXCIsXG4gICAgICAgIGR1cmF0aW9uOiAxMDBcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLmlzU2VsZWN0aW5nID0gZmFsc2U7XG4gICAgdGhpcy5fbm90ZXNMaXN0LmZvckVhY2goeCA9PiB4LmlzU2VsZWN0ZWQgPSBmYWxzZSk7XG4gIH1cblxuICBwdWJsaWMgc2VsZWN0KGlkOiBudW1iZXIpIHtcbiAgICBpZiAoIXRoaXMuaXNTZWxlY3RpbmcpIHtcbiAgICAgIHRoaXMuZ29Ub09wZW5Ob3RlVmlldyhpZCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5fbm90ZXNMaXN0LmZpbmQoeCA9PiB4Lm5vdGVJZCA9PSBpZCkuaXNTZWxlY3RlZCA9ICF0aGlzLl9ub3Rlc0xpc3QuZmluZCh4ID0+IHgubm90ZUlkID09IGlkKS5pc1NlbGVjdGVkO1xuICAgICAgaWYgKHRoaXMuX25vdGVzTGlzdC5maWx0ZXIoeCA9PiB4LmlzU2VsZWN0ZWQgPT09IHRydWUpLmxlbmd0aCA8PSAwKSB7XG4gICAgICAgIHRoaXMuaXNTZWxlY3RpbmcgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ29Ub09wZW5Ob3RlVmlldyhpZDogbnVtYmVyKSB7XG4gICAgdGhpcy5fcm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbJy9ub3Rlcy9vcGVuLW5vdGUnXSwge1xuICAgICAgdHJhbnNpdGlvbjoge1xuICAgICAgICBuYW1lOiBcInNsaWRlVG9wXCIsXG4gICAgICAgIGR1cmF0aW9uOiAxMDBcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLl9ub3Rlc1NlcnZpY2Uuc2V0Tm90ZURhdGEoaWQpO1xuICAgIHRoaXMuaXNTZWxlY3RpbmcgPSBmYWxzZTtcbiAgICB0aGlzLl9ub3Rlc0xpc3QuZm9yRWFjaCh4ID0+IHguaXNTZWxlY3RlZCA9IGZhbHNlKTtcbiAgfVxuXG4gIHB1YmxpYyBzdGFydFNlbGVjdGlvbihpZDogbnVtYmVyKSB7XG4gICAgdGhpcy5fbm90ZXNMaXN0LmZpbmQoeCA9PiB4Lm5vdGVJZCA9PSBpZCkuaXNTZWxlY3RlZCA9ICF0aGlzLl9ub3Rlc0xpc3QuZmluZCh4ID0+IHgubm90ZUlkID09IGlkKS5pc1NlbGVjdGVkO1xuICAgIGlmICh0aGlzLl9ub3Rlc0xpc3QuZmlsdGVyKHggPT4geC5pc1NlbGVjdGVkID09PSB0cnVlKS5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLmlzU2VsZWN0aW5nID0gdHJ1ZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzU2VsZWN0aW5nID0gZmFsc2U7XG4gICAgfVxuICB9XG5cblxuICBwdWJsaWMgY2FuY2VsKCkge1xuICAgIHRoaXMuaXNTZWxlY3RpbmcgPSBmYWxzZTtcbiAgICB0aGlzLl9ub3Rlc0xpc3QuZm9yRWFjaCh4ID0+IHguaXNTZWxlY3RlZCA9IGZhbHNlKTtcbiAgfVxuXG4gIHB1YmxpYyBkZWxldGUoKSB7XG4gICAgdGhpcy5pc1NlbGVjdGluZyA9IGZhbHNlO1xuICAgIHRoaXMuX25vdGVzTGlzdCA9IHRoaXMuX25vdGVzTGlzdC5maWx0ZXIoeCA9PiB4LmlzU2VsZWN0ZWQgIT0gdHJ1ZSk7XG4gICAgdGhpcy5fbm90ZXNTZXJ2aWNlLmRlbGV0ZU5vdGVzRnJvbVNlcnZpY2UodGhpcy5fbm90ZXNMaXN0KTtcbiAgfVxufVxuXG4iXX0=