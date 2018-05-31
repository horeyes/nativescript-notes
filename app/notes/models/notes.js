"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Notes = /** @class */ (function () {
    function Notes(noteId, title, note, date, hasDateChecked, isSelected) {
        if (noteId === void 0) { noteId = 0; }
        if (title === void 0) { title = ""; }
        if (note === void 0) { note = ""; }
        if (date === void 0) { date = null; }
        if (hasDateChecked === void 0) { hasDateChecked = false; }
        if (isSelected === void 0) { isSelected = false; }
        this.noteId = noteId;
        this.title = title;
        this.note = note;
        this.date = date;
        this.hasDateChecked = hasDateChecked;
        this.isSelected = isSelected;
    }
    return Notes;
}());
exports.Notes = Notes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90ZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJub3Rlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQVNBO0lBQ0ksZUFBbUIsTUFBa0IsRUFDMUIsS0FBa0IsRUFDbEIsSUFBaUIsRUFDakIsSUFBaUIsRUFDakIsY0FBK0IsRUFDL0IsVUFBMkI7UUFMbkIsdUJBQUEsRUFBQSxVQUFrQjtRQUMxQixzQkFBQSxFQUFBLFVBQWtCO1FBQ2xCLHFCQUFBLEVBQUEsU0FBaUI7UUFDakIscUJBQUEsRUFBQSxXQUFpQjtRQUNqQiwrQkFBQSxFQUFBLHNCQUErQjtRQUMvQiwyQkFBQSxFQUFBLGtCQUEyQjtRQUxuQixXQUFNLEdBQU4sTUFBTSxDQUFZO1FBQzFCLFVBQUssR0FBTCxLQUFLLENBQWE7UUFDbEIsU0FBSSxHQUFKLElBQUksQ0FBYTtRQUNqQixTQUFJLEdBQUosSUFBSSxDQUFhO1FBQ2pCLG1CQUFjLEdBQWQsY0FBYyxDQUFpQjtRQUMvQixlQUFVLEdBQVYsVUFBVSxDQUFpQjtJQUN0QyxDQUFDO0lBQ0wsWUFBQztBQUFELENBQUMsQUFSRCxJQVFDO0FBUlksc0JBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbnRlcmZhY2UgSU5vdGVzIHtcclxuICAgIG5vdGVJZDogbnVtYmVyO1xyXG4gICAgdGl0bGU6IHN0cmluZztcclxuICAgIG5vdGU6IHN0cmluZztcclxuICAgIGRhdGU6IERhdGU7XHJcbiAgICBoYXNEYXRlQ2hlY2tlZDogYm9vbGVhbjtcclxuICAgIGlzU2VsZWN0ZWQ6IGJvb2xlYW47XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBOb3RlcyBpbXBsZW1lbnRzIElOb3RlcyB7XHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgbm90ZUlkOiBudW1iZXIgPSAwLFxyXG4gICAgICAgIHB1YmxpYyB0aXRsZTogc3RyaW5nID0gXCJcIixcclxuICAgICAgICBwdWJsaWMgbm90ZTogc3RyaW5nID0gXCJcIixcclxuICAgICAgICBwdWJsaWMgZGF0ZTogRGF0ZSA9IG51bGwsXHJcbiAgICAgICAgcHVibGljIGhhc0RhdGVDaGVja2VkOiBib29sZWFuID0gZmFsc2UsXHJcbiAgICAgICAgcHVibGljIGlzU2VsZWN0ZWQ6IGJvb2xlYW4gPSBmYWxzZSkge1xyXG4gICAgfVxyXG59Il19