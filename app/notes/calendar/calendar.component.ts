import { Component, OnInit, ViewChild } from '@angular/core';
import { CalendarEvent, CalendarSelectionEventData, RadCalendar } from 'nativescript-ui-calendar'
import { CalendarEventsService } from '~/notes/services/calendar-event.service';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';
import { RadSideDrawerComponent } from 'nativescript-ui-sidedrawer/angular';
import { NotesService } from '~/notes/services/notes.service';

@Component({
  moduleId: module.id,
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  private _events: Array<CalendarEvent>;
  private _listItems: Array<CalendarEvent>;
  private drawer: RadSideDrawer;
  public showDrawer: boolean;
  public eventHandler: boolean = true;
  @ViewChild(RadSideDrawerComponent) public drawerComponent: RadSideDrawerComponent;
  constructor(private _calendarService: CalendarEventsService, 
  private _notesService: NotesService) {
  }

  ngOnInit() {
    this._events = this._calendarService.getCalendarEvents(this._notesService.getNoteList());
  }

  ngAfterViewInit() {
    this.drawer = this.drawerComponent.sideDrawer;
  }

  public drawerToggle() {
    this.eventHandler ? this.drawer.showDrawer() : this.drawer.closeDrawer();
  }

  public onDrawerOpened() {
    this.onDrawerToggle();
    this.showDrawer = true;
  }

  public onDrawerClosed() {
    this.onDrawerToggle();
    this.showDrawer = false;
  }

  private onDrawerToggle() {
    this.eventHandler = !this.eventHandler;
  }


  get eventSource() {
    return this._events;
  }

  get myItems(): Array<CalendarEvent> {
    return this._listItems;
  }

  set myItems(value) {
    this._listItems = value;
  }

  onDateSelected(args: CalendarSelectionEventData) {
    var calendar: RadCalendar = args.object;
    var date: Date = args.date;
    var events: Array<CalendarEvent> = calendar.getEventsForDate(date);
    this.myItems = events;
  }

}
