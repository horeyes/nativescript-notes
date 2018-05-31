import { Injectable } from '@angular/core';
import { CalendarEvent } from 'nativescript-ui-calendar'
import { Color } from 'tns-core-modules/color';
import { NotesService } from '~/notes/services/notes.service';
import { Notes } from '~/notes/models/notes';
@Injectable()
export class CalendarEventsService {
  getCalendarEvents(notesList: Notes[]): Array<CalendarEvent> {
    let now = new Date();
    let startDate: Date,
      endDate: Date,
      event: CalendarEvent;
    let colors: Array<Color> = [new Color(200, 188, 26, 214), new Color(220, 255, 109, 130), new Color(255, 55, 45, 255), new Color(199, 17, 227, 10), new Color(255, 255, 54, 3)];
    let events: Array<CalendarEvent> = new Array<CalendarEvent>();
    for (let i = 0; i < notesList.length; i++) {
      if (notesList[i].hasDateChecked) {
        startDate = new Date(notesList[i].date);
        endDate = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate() + 1);
        event = new CalendarEvent(notesList[i].title, startDate, endDate, false, colors[i * 10 % (colors.length - 1)]);
        events.push(event);
      }
    }
    return events;
  }
}