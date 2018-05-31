"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DateForm = /** @class */ (function () {
    function DateForm(day, time) {
        if (day === void 0) { day = new Date(new Date(2018, 0, 1)); }
        if (time === void 0) { time = new Date(new Date().setHours(8, 0)); }
        this.day = day;
        this.time = time;
    }
    return DateForm;
}());
exports.DateForm = DateForm;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90ZS1kYXRlLWZvcm0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJub3RlLWRhdGUtZm9ybS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQU9BO0lBQ0ksa0JBQW1CLEdBQTBDLEVBQ2xELElBQWlEO1FBRHpDLG9CQUFBLEVBQUEsVUFBZ0IsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDbEQscUJBQUEsRUFBQSxXQUFpQixJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBRSxDQUFDO1FBRHpDLFFBQUcsR0FBSCxHQUFHLENBQXVDO1FBQ2xELFNBQUksR0FBSixJQUFJLENBQTZDO0lBQzVELENBQUM7SUFDTCxlQUFDO0FBQUQsQ0FBQyxBQUpELElBSUM7QUFKWSw0QkFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5cclxuaW50ZXJmYWNlIElEYXRlRm9ybXtcclxuICAgIGRheTogRGF0ZTtcclxuICAgIHRpbWU6IERhdGU7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBEYXRlRm9ybSBpbXBsZW1lbnRzIElEYXRlRm9ybXtcclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBkYXk6IERhdGUgPSBuZXcgRGF0ZShuZXcgRGF0ZSgyMDE4LCAwLCAxKSksXHJcbiAgICAgICAgcHVibGljIHRpbWU6IERhdGUgPSBuZXcgRGF0ZShuZXcgRGF0ZSgpLnNldEhvdXJzKDgsIDAsKSkpe1xyXG4gICAgfVxyXG59Il19